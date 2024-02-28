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

    return HttpResponse.json('목 핸들러가 정상적으로 데이터를 받았습니다.');
  }),
];

export default testHandler;
