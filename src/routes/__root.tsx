import { createRootRoute, Outlet } from '@tanstack/react-router';
import MainLayout from '@/components/shared/layout/main-layout';
import NotFound from '@/components/shared/not-found';

export const Route = createRootRoute({
  component: () => (
    <MainLayout>
      <Outlet />
    </MainLayout>
  ),
  notFoundComponent: NotFound,
});
