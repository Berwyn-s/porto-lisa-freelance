import { Link } from 'react-router-dom';
import berijalanLogo from './../assets/berijalan_logo.png';

function Navbar() {
  return (
  <nav className='bg-white text-black py-4 px-9 border-b-[0.05px] border-gray-300'>
    <div className="flex items-center justify-between">
      <img className='self-start h-10' src={berijalanLogo} alt="Logo" />
      <ul className='flex flex-1 justify-end gap-20 text-md font-montserrat pr-80'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/career">Karir</Link></li>
        <li><Link to="/about">Tentang Kami</Link></li>
      </ul>
    </div>
  </nav>
  );
}

export default Navbar;