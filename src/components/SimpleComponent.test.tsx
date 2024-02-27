import { render, screen } from '@/utils/testing-library';
import { expect } from 'vitest';
import SimpleComponent from './SimpleComponent';

describe('SimpleComponent', () => {
  it('간단한 컴포넌트가 렌더링이 되어야 한다.', async () => {
    render(<SimpleComponent />);

    const element = screen.getByText('간단한 컴포넌트');
    expect(element).toBeInTheDocument();
  });

  it('버튼을 클릭하면 텍스트가 변경되어야 한다.', async () => {
    const { user } = render(<SimpleComponent />);

    const button = screen.getByRole('button');
    await user.click(button);

    const element = screen.getByText('변경된 컴포넌트');
    expect(element).toBeInTheDocument();
  });
});
