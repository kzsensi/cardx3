import React from 'react';
import { User, Activity, Database, Smartphone } from 'lucide-react';

function HowItWorks() {
  const steps = [
    {
      icon: <User size={32} />,
      title: "1. Approach the Gate",
      desc: "Student simply carries their passive UHF RFID ID card in their pocket or bag. No need to take it out."
    },
    {
      icon: <Activity size={32} />,
      title: "2. Walk-Through Detection",
      desc: "The overhead/side-mounted UHF RFID antennas instantly detect the unique ID automatically as they pass."
    },
    {
      icon: <Database size={32} />,
      title: "3. Data Synchronization",
      desc: "The IoT controller processes the signal and sends the timestamped entry immediately to the secure cloud."
    },
    {
      icon: <Smartphone size={32} />,
      title: "4. Attendance & Notification",
      desc: "Attendance is logged on the dashboard and the parent receives a real-time notification on their device."
    }
  ];

  return (
    <div className="page-wrapper pt-12">
      <section className="section text-center">
        <div className="container">
          <div style={{ display: 'inline-block', background: 'rgba(255, 255, 255, 0.05)', padding: '0.5rem 1.5rem', borderRadius: '50px', marginBottom: '1.5rem', border: '1px solid var(--border-color)' }}>
            <span className="text-secondary font-display font-medium">Processing time: </span>
            <span style={{ color: 'var(--accent-cyan)', fontWeight: 'bold' }}>&lt; 1 Second</span>
          </div>
          
          <h1 className="text-h1 mb-2">How it <span className="text-gradient">works</span></h1>
          <p className="text-large text-secondary" style={{ maxWidth: '600px', margin: '0 auto 4rem' }}>
            A flawless, completely invisible experience for the student. Here is the step-by-step technical breakdown.
          </p>

          <div className="grid-4" style={{ position: 'relative' }}>
            {/* Desktop connecting line */}
            <div className="connecting-line" style={{ 
              position: 'absolute', 
              top: '50px', 
              left: '10%', 
              right: '10%', 
              height: '2px', 
              background: 'linear-gradient(90deg, transparent, var(--accent-cyan), transparent)',
              zIndex: 0,
              opacity: 0.5
            }}></div>
            
            <style>{`
              @media (max-width: 900px) { .connecting-line { display: none; } }
            `}</style>

            {steps.map((step, i) => (
              <div key={i} style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ 
                  width: '100px', height: '100px', 
                  borderRadius: '50%', 
                  background: 'var(--bg-color)',
                  border: '2px solid var(--accent-cyan)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '1.5rem',
                  boxShadow: '0 0 20px rgba(6, 182, 212, 0.2)',
                  color: '#fff'
                }}>
                  {step.icon}
                </div>
                <h3 className="text-h4 mb-1">{step.title}</h3>
                <p className="text-secondary text-small">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-darker">
        <div className="container">
          <div className="glass-panel" style={{ padding: '3rem' }}>
            <h2 className="text-h2 text-center mb-6">Hardware Architecture</h2>
            <div className="grid-2">
              <div>
                <h4 className="text-h4 mb-1" style={{ color: 'var(--accent-blue)' }}>UHF RFID Reader & Antennas</h4>
                <p className="text-secondary mb-4">Industrial-grade hardware designed to read multiple passive tags simultaneously up to 10 meters away, regardless of interference.</p>
                
                <h4 className="text-h4 mb-1" style={{ color: 'var(--accent-blue)' }}>Passive UHF ID Cards</h4>
                <p className="text-secondary">Battery-less, durable student ID cards that harness power from the reader's signal to bounce back their unique encrypted code.</p>
              </div>
              <div>
                <h4 className="text-h4 mb-1" style={{ color: 'var(--accent-blue)' }}>IoT Controller</h4>
                <p className="text-secondary mb-4">A locally installed microcontroller that processes raw antenna data instantly and ensures secure delivery to the cloud over Wi-Fi/4G.</p>
                
                <h4 className="text-h4 mb-1" style={{ color: 'var(--accent-blue)' }}>Cloud & Dashboard</h4>
                <p className="text-secondary">Highly scalable backend infrastructure that stores attendance records securely and fires off SMS/WhatsApp notifications via fast APIs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HowItWorks;
