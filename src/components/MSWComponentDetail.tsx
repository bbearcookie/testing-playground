import { baseInstance } from '@/api/instance';
import { TestType } from '@/types/test';
import { useMutation, useSuspenseQuery } from '@tanstack/react-query';
import { isAxiosError } from 'axios';

interface MSWComponentDetailProps {
  testId: number;
}

const MSWComponentDetail = ({ testId }: MSWComponentDetailProps) => {
  const { data } = useSuspenseQuery({
    queryKey: ['test', testId],
    queryFn: async () => {
      const { data } = await baseInstance.get<TestType>(`/test/${testId}`);
      return data;
    },
  });

  const { mutate, error } = useMutation({
    mutationFn: async () => {
      const { data } = await baseInstance.post(`/test/${testId}`);
      return data;
    },
  });

  const handleSubmit = () => {
    mutate();
  };

  return (
    <li data-testid="content-card">
      <h2>{data.name}</h2>
      <p>{data.content}</p>
      <button onClick={handleSubmit}>submit 하기</button>
      {isAxiosError(error) && <p>{error.response?.data || error.message}</p>}
    </li>
  );
};

export default MSWComponentDetail;
