import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { router } from './router';
import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient();

async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  const { worker } = await import('@/mocks/browser');

  return worker.start();
}

enableMocking().then(() =>
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
        <ToastContainer />
      </QueryClientProvider>
    </React.StrictMode>
  )
);
