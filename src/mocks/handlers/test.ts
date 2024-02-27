import { http, HttpResponse, delay } from 'msw';
import { baseURL } from '@/utils/mswUtils';

const testHandler = [
  http.get(baseURL('/test'), async () => {
    await delay(300);

    const result = Array.from({ length: 5 }, (_, idx) => ({
      id: idx.toString(),
      name: `모킹된 ${idx} 번 데이터`,
      content: '목 데이터를 성공적으로 가져왔습니다.',
    }));

    return HttpResponse.json(result);
  }),

  http.get(baseURL('/test/:testId'), async (req) => {
    await delay(300);

    const result = {
      id: req.params.testId as string,
      name: `모킹된 ${req.params.testId} 번 데이터`,
      content: '목 데이터를 성공적으로 가져왔습니다.',
    };

    return HttpResponse.json(result);
  }),

  http.post(baseURL('/test'), async () => {
    await delay(300);

    return HttpResponse.json('목 핸들러가 정상적으로 데이터를 받았습니다.');
  }),
];

export default testHandler;
