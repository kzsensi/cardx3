import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header>
      {/* Top Banner */}
      <div className="header-top">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to="/">
            <h1 style={{ margin: 0, fontSize: '24px', color: '#000' }}>CARD-X<span style={{ color: 'var(--accent-color)', fontSize: '14px', display: 'block', fontWeight: 'normal' }}>Student Attendance System</span></h1>
          </Link>
          
          <div className="social-icons" style={{ display: 'flex', gap: '10px' }}>
            <a href="#">FB</a>
            <a href="#">TW</a>
            <a href="#">YT</a>
            <a href="#">IG</a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="nav-bar">
        <div className="container">
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/rfid-attendance">School Solutions</Link></li>
            <li><Link to="/gps-solutions">GPS Solutions</Link></li>
            <li><Link to="/enterprise-solutions">Enterprise Solutions</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
            <li><Link to="/purchase-online">Purchase Online</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
