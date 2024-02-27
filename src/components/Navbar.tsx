import { PATHS } from '@/constants/paths';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <p onClick={() => navigate(PATHS.ONE)}>ONE</p>
      <p onClick={() => navigate(PATHS.TWO)}>TWO</p>
      <p onClick={() => navigate(PATHS.THREE)}>THREE</p>
    </div>
  );
};

export default Navbar;
