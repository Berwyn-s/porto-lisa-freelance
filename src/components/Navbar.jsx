import { Link } from 'react-router-dom';

function Navbar() {
  return (
  <nav className='bg-white text-black py-4 px-9'>
    <div className="flex items-center justify-between">
      <img className='self-start h-10' src="src/assets/berijalan_logo.png" alt="Logo" />
      <ul className='flex flex-1 justify-center gap-3 font-montserrat '>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/service-detail">Produk & Layanan</Link></li>
        <li><Link to="/about">Tentang Kami</Link></li>
      </ul>
    </div>
  </nav>
  );
}

export default Navbar;