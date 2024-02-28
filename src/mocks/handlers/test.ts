import { http, HttpResponse, delay } from 'msw';
import { baseURL } from '@/utils/mswUtils';
import { MOCK_TEST } from '../datas/test';
import { API_PATHS } from '@/constants/paths';

const testHandler = [
  http.get(baseURL(API_PATHS.TEST), async () => {
    return HttpResponse.json(MOCK_TEST.list);
  }),

  http.get(baseURL(API_PATHS.TEST_ID), async (req) => {
    return HttpResponse.json(MOCK_TEST.detail(Number(req.params.testId)));
  }),

  http.post(baseURL(API_PATHS.TEST_ID), async () => {
    await delay(300);

    const status: number = 200;

    switch (status) {
      case 200:
        return HttpResponse.json({
          message: '요청 성공',
        });
      case 400:
        return new HttpResponse('에러에러', {
          status: 400,
        });
    }
  }),
];

export default testHandler;
