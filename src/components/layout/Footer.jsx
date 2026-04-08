import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer style={{ background: '#f8f8f8', padding: '60px 0 20px', borderTop: '1px solid #eaeaea', marginTop: '40px' }}>
      <div className="container">
        <div className="grid-4" style={{ marginBottom: '40px' }}>
          
          {/* About Section */}
          <div>
            <h3 style={{ fontSize: '18px', marginBottom: '20px' }}>About CARD-X</h3>
            <div style={{ width: '50px', height: '2px', background: 'var(--accent-color)', marginBottom: '20px' }}></div>
            <p style={{ color: '#555', fontSize: '14px' }}>
              CARD-X is a product of our enterprise. Created to revolutionize the way schools, colleges and educational institutes manage their student attendance reporting through RFID.
            </p>
            <Link to="/about-us" className="btn" style={{ marginTop: '20px', padding: '8px 16px' }}>More Details</Link>
          </div>

          {/* Popular Links */}
          <div>
            <h3 style={{ fontSize: '18px', marginBottom: '20px' }}>Popular Links</h3>
            <div style={{ width: '50px', height: '2px', background: 'var(--accent-color)', marginBottom: '20px' }}></div>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '10px' }}><Link to="/" style={{ color: '#555', fontSize: '14px' }}>Home</Link></li>
              <li style={{ marginBottom: '10px' }}><Link to="/rfid-attendance" style={{ color: '#555', fontSize: '14px' }}>Rfid Attendance</Link></li>
              <li style={{ marginBottom: '10px' }}><Link to="/school-software" style={{ color: '#555', fontSize: '14px' }}>School Software</Link></li>
              <li style={{ marginBottom: '10px' }}><Link to="/mobile-app" style={{ color: '#555', fontSize: '14px' }}>Mobile App</Link></li>
              <li style={{ marginBottom: '10px' }}><Link to="/privacy-policy" style={{ color: '#555', fontSize: '14px' }}>Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 style={{ fontSize: '18px', marginBottom: '20px' }}>Newsletter</h3>
            <div style={{ width: '50px', height: '2px', background: 'var(--accent-color)', marginBottom: '20px' }}></div>
            <p style={{ color: '#555', fontSize: '14px', marginBottom: '15px' }}>
              Please drop your mail id to get regular updates from us, you can unsubscribe at any time.
            </p>
            <form style={{ display: 'flex', gap: '5px' }}>
              <input type="email" placeholder="yourmail@domain.com" style={{ padding: '10px', width: '100%', border: '1px solid #ccc', borderRadius: '3px' }} />
              <button type="submit" className="btn" style={{ padding: '10px 15px' }}>Subscribe</button>
            </form>
          </div>

          {/* Social Icons */}
          <div>
            <h3 style={{ fontSize: '18px', marginBottom: '20px' }}>Get Connected</h3>
            <div style={{ width: '50px', height: '2px', background: 'var(--accent-color)', marginBottom: '20px' }}></div>
            <div className="social-icons" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <a href="#">FB</a>
              <a href="#">TW</a>
              <a href="#">YT</a>
              <a href="#">IG</a>
              <a href="#">IN</a>
            </div>
          </div>

        </div>

        <div style={{ textAlign: 'center', borderTop: '1px solid #ddd', paddingTop: '20px' }}>
          <p style={{ color: '#777', fontSize: '13px' }}>Copyright CARD-X © {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
