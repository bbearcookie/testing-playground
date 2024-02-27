import { beforeAll, afterEach, afterAll } from 'vitest';
import { server } from '@/mocks/server';
import '@testing-library/jest-dom'; // toBeInTheDocument 같은 Matcher를 사용하기 위해 필요합니다.

vi.mock('zustand');

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  vi.clearAllMocks();
  server.resetHandlers();
});

afterAll(() => {
  vi.resetAllMocks();
  server.close();
});
