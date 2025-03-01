import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { assets } from '../../../assets/assets';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState("");

  useEffect(() => {
    if (location.hash === "#explore-menu") {
      const section = document.getElementById("explore-menu");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
      setActiveMenu("menu"); // Set active to "menu"
    } else {
      setActiveMenu(location.pathname); // Default to pathname
    }
  }, [location]);

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt='' className='logo' /></Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={() => setActiveMenu('/')} className={activeMenu === '/' ? "active" : ""}>Trang chủ</Link>
        <a href="/#explore-menu" className={activeMenu === 'menu' ? "active" : ""}>Sản phẩm</a>
        <Link to='/about' onClick={() => setActiveMenu('/about')} className={activeMenu === '/about' ? "active" : ""}>Dự án</Link>
        <Link to='/contact' onClick={() => setActiveMenu('/contact')} className={activeMenu === '/contact' ? "active" : ""}>Liên hệ</Link>
      </ul>
      <div className="navbar-right" />
    </div>
  );
};

export default Navbar;