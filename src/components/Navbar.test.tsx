import { render, screen, within } from '@/utils/testing-library';
import Navbar from './Navbar';
import { PATHS } from '@/constants/paths';

const navigateFn = vi.fn();

vi.mock('react-router-dom', async () => {
  const original = await vi.importActual('react-router-dom');
  return {
    ...original,
    useNavigate: () => navigateFn,
  };
});

describe('Navbar', () => {
  it('화면에 세 개의 네비바 링크가 보여야 한다', async () => {
    render(<Navbar />);

    expect(screen.getByText('ONE')).toBeInTheDocument();
    expect(screen.getByText('TWO')).toBeInTheDocument();
    expect(screen.getByText('THREE')).toBeInTheDocument();
  });

  it('ONE 링크를 클릭하면 /one 으로 이동해야 한다.', async () => {
    const { user } = render(<Navbar />);

    const oneLink = screen.getByText('ONE');
    await user.click(oneLink);

    expect(within(oneLink).getByText('ONE')).toBeInTheDocument();
    expect(navigateFn).toHaveBeenNthCalledWith(1, PATHS.ONE);
  });

  it('TWO 링크를 클릭하면 /two 으로 이동해야 한다.', async () => {
    const { user } = render(<Navbar />);

    const twoLink = screen.getByText('TWO');
    await user.click(twoLink);

    expect(within(twoLink).getByText('TWO')).toBeInTheDocument();
    expect(navigateFn).toHaveBeenNthCalledWith(1, PATHS.TWO);
  });

  it('THREE 링크를 클릭하면 /three 으로 이동해야 한다.', async () => {
    const { user } = render(<Navbar />);

    const threeLink = screen.getByText('THREE');
    await user.click(threeLink);

    expect(within(threeLink).getByText('THREE')).toBeInTheDocument();
    expect(navigateFn).toHaveBeenNthCalledWith(1, PATHS.THREE);
  });
});
