export const MOCK_TEST = {
  list: Array.from({ length: 5 }, (_, idx) => ({
    id: idx.toString(),
    name: `모킹된 ${idx} 번 데이터`,
    content: '목 데이터를 성공적으로 가져왔습니다.',
  })),
  detail: (testId: number) => ({
    id: testId.toString(),
    name: `모킹된 ${testId} 번 데이터`,
    content: '목 데이터를 성공적으로 가져왔습니다.',
  }),
} as const;
