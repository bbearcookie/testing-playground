import React, { useState } from 'react';

const SimpleComponent = () => {
  const [text, setText] = useState('간단한 컴포넌트');

  return (
    <div>
      <p>{text}</p>
      <button onClick={() => setText('변경된 컴포넌트')}>바꾸기</button>
    </div>
  );
};

export default SimpleComponent;
