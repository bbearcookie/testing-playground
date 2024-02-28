import { QueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { isAxiosError } from 'axios';

export const mutationDefaultErrorHandler = (err: Error) => {
  const message = isAxiosError(err)
    ? err.response?.data || err.message
    : err.message;

  console.error(err);
  toast.error(message, {
    autoClose: 3000,
    position: 'bottom-center',
  });
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
    mutations: {
      onError: mutationDefaultErrorHandler,
    },
  },
});
