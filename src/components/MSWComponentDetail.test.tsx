import { render, screen } from '@/utils/testing-library';
import MSWComponentDetail from './MSWComponentDetail';
import { server } from '@/mocks/server';
import { HttpResponse, http } from 'msw';
import { baseURL } from '@/utils/mswUtils';
import { API_PATHS } from '@/constants/paths';

describe('MSWComponentDetail', () => {
  beforeEach(() => {
    global.console = { ...global.console, error: vi.fn() };
  });

  it('7번 데이터가 정상적으로 렌더링되어야 합니다.', async () => {
    render(<MSWComponentDetail testId={7} />);

    expect(await screen.findByText('모킹된 7 번 데이터')).toBeInTheDocument();
  });

  it('버튼 클릭 시 에러 핸들링을 잘 해야합니다', async () => {
    server.use(
      http.post(baseURL(API_PATHS.TEST_ID), () => {
        return new HttpResponse('에러에러', {
          status: 400,
        });
      })
    );

    const { user } = render(<MSWComponentDetail testId={7} />);
    const button = await screen.findByText('submit 하기');
    user.click(button);

    expect(await screen.findByText('에러에러')).toBeInTheDocument();
  });

  it('5번 데이터가 정상적으로 렌더링되어야 합니다.', async () => {
    render(<MSWComponentDetail testId={5} />);

    expect(await screen.findByText('모킹된 5 번 데이터')).toBeInTheDocument();
  });
});
