# Complete Guide to Vue.js Authorization and Access Control

Access control is the part of an application that is easy to defer and expensive to retrofit. Most apps start with a login, then add roles, then discover one stray `v-if` that leaks a feature to the wrong audience. This guide walks through structuring authorization in Vue applications so that policy lives outside your components, your checks are consistent, and auditing a permission change is a one-line diff.

## The mental model: authentication vs. authorization

Authentication answers "who is this?" Authorization answers "what may they do?". The two must stay separate concepts in the code. If your routes and components hardcode which roles exist, every role change — and every new audience — forces an application release.

The goal is a single source of truth for rules, evaluated by one function, with UI and routing both consulting it:

```js
const can = (user, action) => authorize(user, action);
```

## Three layers of protection

### 1. API policy (the source of truth)

Client-side checks are UX sugar. The real boundary is the API: every request must be authorized with your application-level data (ownership, org membership, resource state). Treat the client as an untrusted reader.

### 2. Routing guards

Guards decide what a user may *reach*. In Vue.js, that's a navigation guard:

```js
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !auth.isAuthenticated()) {
    return next({ name: 'login', query: { redirect: to.fullPath } });
  }

  if (to.meta.forRoles && !intersects(to.meta.forRoles, auth.roles())) {
    return next({ name: 'forbidden' });
  }

  return next();
});
```

Put the required meta on each route:

```js
{
  path: '/admin/users',
  component: AdminUsers,
  meta: { requiresAuth: true, permission: 'users:manage' }
}
```

### 3. Component-level gating

Route guards stop the wrong user from *entering*. Component guards stop them from *seeing details*. Every action in a view should answer the same question: does this user have permission?

```vue
<template>
  <button v-if="allowed('users:delete')" @click="removeUser(user)">
    Delete
  </button>
</template>

<script setup>
const { allowed } = useAuthorization();
</script>
```

Because a dedicated composable owns the check, the template stays declarative and the rule stays obvious.

## A reusable `useAuthorization` composable

The shared API keeps the client consistent. A minimal implementation:

```js
export function useAuthorization() {
  const auth = useAuth();

  function allowed(action, resource) {
    return authorize(auth.user.value, action, resource);
  }

  function hasRole(role) {
    return auth.roles.value.includes(role);
  }

  return { allowed, hasRole };
}
```

Now every guard and every component import the same function, so a rule change only happens in one place.

## Where the policy should live

Your component tree should not define the rules; your policy file should. A table of role-to-permission mappings is readable and testable:

```js
const policies = {
  admin: ['*'],
  manager: ['team:read', 'reports:read', 'reports:write'],
  viewer: ['team:read', 'reports:read'],
};

export function authorize(user, action) {
  return (policies[user.role] || []).includes(action) || policies[user.role].includes('*');
}
```

The biggest trap is scattering `v-if="user.role === 'admin'"` across presentational components. Role checks in templates leak implementation details and make it impossible to change the policy later without touching every component that renders it.

## Common pitfalls

- **Authorization in routing only.** A hidden route does not secure a data leak. Guard the data too.
- **Single-role assumptions.** Users often hold multiple roles. Model permissions by role-set, not one enum.
- **Row-level checks.** For records on a single page, ownership often matters (both an admin and the owner manage the same document). Pass the resource to the rule: `authorize(user, action, resource)`, where the resource's owner is part of the check.

```js
export function canEdit(user, doc) {
  return authorize(user, 'documents:edit') && (isAdmin(user) || doc.ownerId === user.id);
}
```

## The takeaway

Authorization in Vue is an architecture, not a series of `v-if`s. Own the policy in one file and evaluate centrally; connect routing and components to the same source of truth; keep the API as the eventual authority, client guard as a convenience. Do that, and modifying what a role can do becomes a single rule change with a test to prove it — never a Friday-deploy gamble.