import { Suspense } from 'react';
import { baseInstance } from './api/instance';
import TestComponent from './components/TestComponent';
import SimpleComponent from './components/SimpleComponent';

function App() {
  const handleClick = async () => {
    const res = await baseInstance.get('/test');

    console.log(res);
  };

  return (
    <>
      <div>hello world</div>
      <button onClick={handleClick}>API call</button>
      <Suspense fallback={<>로딩중...</>}>
        <TestComponent />
      </Suspense>
      <SimpleComponent />
    </>
  );
}

export default App;
