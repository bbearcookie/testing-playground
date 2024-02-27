import { createBrowserRouter } from 'react-router-dom';
import { PATHS } from './constants/paths';
import App from './App';

export const router = createBrowserRouter([
  {
    path: PATHS.ROOT,
    element: <App />,
    children: [
      {
        path: PATHS.ONE,
        element: <div>ONE</div>,
      },
      {
        path: PATHS.TWO,
        element: <div>TWO</div>,
      },
      {
        path: PATHS.THREE,
        element: <div>THREE</div>,
      },
    ],
  },
]);
