import { baseInstance } from './api/instance';

function App() {
  const handleClick = async () => {
    const res = await baseInstance.get('/test');

    console.log(res);
  };

  return (
    <>
      <div>hello world</div>
      <button onClick={handleClick}>API call</button>
    </>
  );
}

export default App;
