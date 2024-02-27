import { baseInstance } from '@/api/instance';
import { TestType } from '@/types/test';
import { useSuspenseQuery } from '@tanstack/react-query';

const TestComponent = () => {
  const { data } = useSuspenseQuery({
    queryKey: ['test'],
    queryFn: async () => {
      const { data } = await baseInstance.get<TestType[]>('/test');
      return data;
    },
  });

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default TestComponent;
