import React, { ReactElement, Suspense } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { QueryClientProvider } from '@tanstack/react-query';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { queryClient } from '@/api/queryClient';

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <MemoryRouter>
        <Suspense>{children}</Suspense>
      </MemoryRouter>
    </QueryClientProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => ({
  user: userEvent.setup(),
  ...render(ui, { wrapper: Wrapper, ...options }),
});

export * from '@testing-library/react';
export { customRender as render };
