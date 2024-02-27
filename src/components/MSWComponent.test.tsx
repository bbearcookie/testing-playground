import { render, screen, within } from '@/utils/testing-library';
import MSWComponent from './MSWComponent';

describe('MSWComponent', () => {
  it('화면에 API 응답이 보여야 한다', async () => {
    render(<MSWComponent />);

    const contents = await screen.findAllByTestId('content-card');

    expect(contents).toHaveLength(5);

    contents.forEach((content, index) => {
      expect(
        within(content).getByText(`모킹된 ${index} 번 데이터`)
      ).toBeInTheDocument();
      expect(
        within(content).getByText('목 데이터를 성공적으로 가져왔습니다.')
      ).toBeInTheDocument();
    });
  });
});
