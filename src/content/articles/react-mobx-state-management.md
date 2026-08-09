# Streamlining React Development with MobX for State Management

State management is one of the first places a React application starts to feel heavy. New feature, new `useEffect`, another prop threaded through three levels of components, another re-render you cannot quite explain. Context helps for a while, Redux scales but asks you to wire a lot of ceremony around every change. MobX approaches the problem from a different direction: state is observable, components react to it automatically, and you only write the state you actually need.

This article walks through the practical reasons MobX keeps React applications simpler, and the patterns I use on real products.

## The problem with "just passing props"

When an application grows, so does the distance between state and the components that need it. The most common symptom:

```jsx
function OrderView({ order, onQuantityChange }) {
  return <QuantityEditor value={order.quantity} onChange={onQuantityChange} />;
}
```

Every layer between the source of the state and the leaf component has to accept and forward those props. Change one shape and the whole chain changes. This is the prop-drilling tax: type it, thread it, re-type it, repeat.

MobX's premise is that components should not need to know where state came from. They subscribe to whatever parts they touch, and the library handles the rest.

## Observable state, automatic reactions

MobX is built on a small set of concepts, and the mental load is low:

- **Observables** — state that tracks when it is read and changed
- **Actions** — functions that mutate observables
- **Reactions / observers** — pieces of UI or logic that re-run when the observables they read change

A simple store:

```javascript
import { makeAutoObservable } from 'mobx';

class CartStore {
  items = [];

  constructor() {
    makeAutoObservable(this);
  }

  get total() {
    return this.items.reduce((sum, item) => sum + item.price * item.qty, 0);
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(id) {
    this.items = this.items.filter((item) => item.id !== id);
  }
}

export const cart = new CartStore();
```

The component just reads it:

```jsx
import { cart } from './stores/cart';
import { observer } from 'mobx-react-lite';

const CartSummary = observer(() => (
  <p>{cart.items.length} items — {cart.total.toFixed(2)}</p>
));
```

`observer` wraps the component in a reaction. Every observable the component reads becomes a tracked dependency, so when `cart.items` changes, the summary updates — and only the summary updates.

## Why this keeps components simpler

The win is structural. State lives in stores and gets injected where needed through a single context provider or directly through module-level stores. Components receive the slice they need at the top, never thread it through layers of props.

```jsx
const ProductsView = observer(() => {
  const load = useProductsStore(); // store from context

  return (
    <div>
      {load.state === 'pending' && <Spinner />}
      {load.state === 'ready' && load.products.map((p) => <ProductCard key={p.id} product={p} />)}
    </div>
  );
});
```

The view is now mostly declarative: what state has things to show, what shows while loading, what shows when ready. The how is the store's business.

## Rules that keep MobX code predictable

MobX is permissive, and permissive libraries need self-discipline:

1. **Only mutate state through actions.** `makeAutoObservable` treats methods as actions by default. Mutating observable fields directly in unrelated code defeats the auditability that actions give you.
2. **Keep computed values composed.** Build derived state from smaller computed properties rather than recomputing inside components.
3. **Don't over-annotate.** One rule of thumb: state, computed, action. If everything is an action, you lose the ability to reason about how a value changed — and how it should not.

## When to choose something else

MobX shines when the state graph is live and made of many small values that depend on each other. If most of your complexity is around the delivery of serialized JSON, reducers with explicit transitions, entity normalization, and replay — a flux-style store with a flattened, normalized shape and explicit selectors is usually a better fit. MobX wants to describe a live thing, not a write-log.

## The takeaway

Predictability in React does not have to mean a box of reducers. MobX gives you auto-computed, subscription-based state that drastically reduces prop-threading, and it keeps components small and declarative by making "just read the store" the default. For teams that want the ergonomics of a spreadsheet and the mental model of "state that reacts", it is a genuinely simpler baseline.