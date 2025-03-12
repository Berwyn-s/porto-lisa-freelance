import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <Navbar />
      <main className='px-20 py-10 bg-white text-black'>
        <Outlet />
      </main>
      <footer>© 2025 Your Website</footer>
    </div>
  );
}

export default Layout;