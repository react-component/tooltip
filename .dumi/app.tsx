import { Navigate } from 'dumi';
import * as React from 'react';

export function patchClientRoutes({ routes }) {
  routes[0].children.unshift({
    id: 'demo-redirect',
    path: '/demo',
    element: <Navigate to="arrow-content" />,
  });
}
