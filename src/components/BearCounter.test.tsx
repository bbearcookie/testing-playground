import { render, screen } from '@/utils/testing-library';
import BearCounter from './BearCounter';
import useBearStore from '@/store/useBearStore';

const initialState = useBearStore.getState();

describe('BearCounter', () => {
  beforeEach(() => {
    useBearStore.setState(initialState);
  });

  it('처음에는 0마리여야 한다.', () => {
    render(<BearCounter />);

    expect(screen.getByText('0마리')).toBeInTheDocument();
  });

  it('한 번 누르면 3마리여야 한다.', async () => {
    const { user } = render(<BearCounter />);

    await user.click(screen.getByText('곰 추가'));

    expect(screen.getByText('3마리')).toBeInTheDocument();
  });

  it('두 번 누르면 6마리여야 한다.', async () => {
    const { user } = render(<BearCounter />);

    await user.click(screen.getByText('곰 추가'));
    await user.click(screen.getByText('곰 추가'));

    expect(screen.getByText('6마리')).toBeInTheDocument();
  });
});
