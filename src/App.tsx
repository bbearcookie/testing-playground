import { Suspense } from 'react';
import { baseInstance } from './api/instance';
import MSWComponent from './components/MSWComponent';
import SimpleComponent from './components/SimpleComponent';
import BearCounter from './components/BearCounter';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import MSWComponentDetail from './components/MSWComponentDetail';

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
        <MSWComponent />
        <hr />
        <MSWComponentDetail testId={10} />
      </Suspense>
      <SimpleComponent />
      <BearCounter />
      <Navbar />
      <hr />
      <Outlet />
    </>
  );
}

export default App;
