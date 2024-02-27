import { render, screen } from '@/utils/testing-library';
import { expect } from 'vitest';
import SimpleComponent from './SimpleComponent';

it('should render Simple', async () => {
  render(<SimpleComponent />);

  const element = screen.getByText('간단한 컴포넌트');

  expect(element).toBeInTheDocument();
});
