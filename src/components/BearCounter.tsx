import useBearStore from '@/store/useBearStore';
import React from 'react';

const BearCounter = () => {
  const bears = useBearStore((s) => s.bears);
  const increase = useBearStore((s) => s.increase);

  return (
    <div>
      <h1>곰돌이 카운터</h1>
      <p>{bears}마리</p>
      <button onClick={() => increase(3)}>곰 추가</button>
    </div>
  );
};

export default BearCounter;
