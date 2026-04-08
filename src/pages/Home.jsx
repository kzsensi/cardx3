import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ArrowRight, Quote, ScanFace, Smartphone, Focus, LayoutGrid, Server, Headset } from 'lucide-react';

function Home() {
  return (
    <div>
      {/* Banner Carousel - Reverted to top */}
      <section style={{ marginBottom: '60px' }}>
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: true }}
          loop={true}
          style={{ height: '500px', width: '100%', backgroundColor: '#eee' }}
        >
          <SwiperSlide style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#e0f2fe' }}>
            <h2>RFID Student Attendance System Banner</h2>
          </SwiperSlide>
          <SwiperSlide style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#dbeafe' }}>
            <h2>School Management Software With Mobile App</h2>
          </SwiperSlide>
          <SwiperSlide style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f0fdf4' }}>
            <h2>UHF Attendance System</h2>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* Our Services Section - 6 Features in Original "Card" Style */}
      <section className="section">
        <div className="container">
          <h2 className="text-center" style={{ fontSize: '32px', marginBottom: '40px' }}>Our Services</h2>
          
          <div className="grid-3" style={{ rowGap: '50px' }}>
            
            {/* Service 1 */}
            <div className="card">
              <div style={{ height: '220px', background: '#f5f5f5', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', overflow: 'hidden' }}>
                <img src="/hero_vector.png" alt="Smart Attendance" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h2 style={{ fontSize: '20px' }}>Smart Attendance Tracking</h2>
              <p style={{ textAlign: 'left', color: '#555', fontSize: '14px', marginBottom: '20px' }}>
                Automatically records attendance using UHF-RFID technology. Students just walk through without tapping or standing in long queues.
              </p>
              <button className="btn">Explore more <ArrowRight size={16} /></button>
            </div>

            {/* Service 2 */}
            <div className="card">
              <div style={{ height: '220px', background: '#f5f5f5', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px' }}>
                <ScanFace size={60} color="#ccc" />
              </div>
              <h2 style={{ fontSize: '20px' }}>Face Recognition for 2FA</h2>
              <p style={{ textAlign: 'left', color: '#555', fontSize: '14px', marginBottom: '20px' }}>
                Adds an extra layer of verification! Automatically match detected RFID tags with facial recognition to prevent proxy attendance.
              </p>
              <button className="btn">Explore more <ArrowRight size={16} /></button>
            </div>

            {/* Service 3 */}
            <div className="card">
              <div style={{ height: '220px', background: '#f5f5f5', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px' }}>
                 <Smartphone size={60} color="#ccc" />
              </div>
              <h2 style={{ fontSize: '20px' }}>Real-Time Updates</h2>
              <p style={{ textAlign: 'left', color: '#555', fontSize: '14px', marginBottom: '20px' }}>
                Delivers instant activity updates to the administrative dashboard and triggers push notifications or SMS to connected users.
              </p>
              <button className="btn">Explore more <ArrowRight size={16} /></button>
            </div>

            {/* Service 4 */}
            <div className="card">
              <div style={{ height: '220px', background: '#f5f5f5', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px' }}>
                 <LayoutGrid size={60} color="#ccc" />
              </div>
              <h2 style={{ fontSize: '20px' }}>Parent Dashboard</h2>
              <p style={{ textAlign: 'left', color: '#555', fontSize: '14px', marginBottom: '20px' }}>
                A specialized portal that provides parents with live attendance status, campus notifications, and relevant event updates instantly.
              </p>
              <button className="btn">Explore more <ArrowRight size={16} /></button>
            </div>

            {/* Service 5 */}
            <div className="card">
              <div style={{ height: '220px', background: '#f5f5f5', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', overflow: 'hidden' }}>
                <img src="/erp_vector.png" alt="School ERP Dashboard" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h2 style={{ fontSize: '20px' }}>School ERP Dashboard</h2>
              <p style={{ textAlign: 'left', color: '#555', fontSize: '14px', marginBottom: '20px' }}>
                Offers centralized administrator control for attendance, student records, granular reporting, and live system monitoring.
              </p>
              <button className="btn">Explore more <ArrowRight size={16} /></button>
            </div>

            {/* Service 6 */}
            <div className="card">
              <div style={{ height: '220px', background: '#f5f5f5', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px' }}>
                 <Headset size={60} color="#ccc" />
              </div>
              <h2 style={{ fontSize: '20px' }}>AI Calling Agent</h2>
              <p style={{ textAlign: 'left', color: '#555', fontSize: '14px', marginBottom: '20px' }}>
                Automated intelligent calling support designed for seamlessly communicating pending fees and flagging low attendance to parents.
              </p>
              <button className="btn">Explore more <ArrowRight size={16} /></button>
            </div>

          </div>
        </div>
      </section>

      <section className="section" style={{ borderTop: '1px solid #eaeaea', borderBottom: '1px solid #eaeaea' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '30px' }}>
            <h4>Our Implementation</h4>
            <div style={{ width: '100%', height: '1px', background: '#ccc', margin: '20px 0' }}></div>
          </div>
          
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div>
               <div style={{ height: '350px', background: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '12px' }}>
                <span style={{ color: '#999' }}>System Implementation Image</span>
               </div>
            </div>
            <div>
              <h2 style={{ fontSize: '24px', lineHeight: '1.4' }}>How RFID, Management Software & GPS Tracker work together for School?</h2>
              <p style={{ color: '#555', fontSize: '15px', marginBottom: '15px' }}>
                Schools are always looking for a one-stop solution for everything because it's painful for admin & parents to download multiple apps. We are providing the above-mentioned solution under one platform. Now We are going to describe in this article How RFID, Management Software & GPS Tracker work together.
              </p>
              <p style={{ color: '#555', fontSize: '15px' }}>
                The admin & parents are very much focused on student's safety & security... We just trying to solve these types of problems with the help of RFID System, GPS tracker, and CCTV camera. Now please take a look at how it works step by step.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ color: '#555', fontSize: '15px', lineHeight: '1.8' }}>
            <p><strong>Step 1 Installation:</strong> After making a survey of the campus, we will install some RFID readers in the main gate for detecting the chip.</p>
            <p><strong>Step 2 Software Integration:</strong> Our software is completely online so no need for any installation...</p>
            <p><strong>Step 3 Chip implement:</strong> We will attach the RFID chip in the shirt, shoe, or inside the ID cards.</p>
            <p><strong>Step 4 collaboration:</strong> According to the data we collaborate the chip with the antenna.</p>
            <p><strong>Step 5 Alarm Integration:</strong> As per the campus admin's direction we fix some alarm systems.</p>
            <p><strong>Step 6 SMS:</strong> Management chooses a 6 Character SMS Sender ID for sending the SMS notification.</p>
            <p><strong>Step 7 Mobile App:</strong> We will make a mobile app in the name of the institute and published it on the play store & iOS store.</p>
            <p><strong>Step 8 Training:</strong> The last step is we give the proper training to the team for how to operate the entire system.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section" style={{ background: '#f9f9f9' }}>
        <div className="container">
          <h3 className="text-center" style={{ marginBottom: '10px' }}>TESTIMONIAL</h3>
          <p className="text-center" style={{ color: '#555', marginBottom: '40px' }}>Below are the few goods worked done by us and that's why we are pleased with it.</p>
          
          <div className="grid-3">
            <div className="testimonial-card">
              <Quote size={24} color="#ccc" style={{ marginBottom: '15px' }} />
              <p style={{ fontSize: '14px', color: '#555', fontStyle: 'italic' }}>
                "Hi, I'm Ritika from DPS Ajmer from 7th Std. My school gives me an ID card. Now my parents get a moment SMS notification once I reach the varsity or once I leave the varsity premises."
              </p>
              <div className="testimonial-client">
                <div style={{ width: '50px', height: '50px', background: '#ddd', borderRadius: '50%' }}></div>
                <div>
                  <strong>Ritika</strong>
                  <div style={{ fontSize: '12px', color: '#777' }}>Student of DPS</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <Quote size={24} color="#ccc" style={{ marginBottom: '15px' }} />
              <p style={{ fontSize: '14px', color: '#555', fontStyle: 'italic' }}>
                "Big thanks because of CARD-X team from simplifying the attendance. Now we just take a glance of the whole classroom's attending record during a single click."
              </p>
              <div className="testimonial-client">
                <div style={{ width: '50px', height: '50px', background: '#ddd', borderRadius: '50%' }}></div>
                <div>
                  <strong>Ms. Nidhi</strong>
                  <div style={{ fontSize: '12px', color: '#777' }}>Teacher, Blue bells</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <Quote size={24} color="#ccc" style={{ marginBottom: '15px' }} />
              <p style={{ fontSize: '14px', color: '#555', fontStyle: 'italic' }}>
                "Before installing the RFID System on our campus, I used to be spending much time to see the attendance report of the whole staff. Now I can track the presence report from any remote location."
              </p>
              <div className="testimonial-client">
                <div style={{ width: '50px', height: '50px', background: '#ddd', borderRadius: '50%' }}></div>
                <div>
                  <strong>Ms. Ragini</strong>
                  <div style={{ fontSize: '12px', color: '#777' }}>Principal of Shemford</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
