import React from 'react';
import { Wifi, Eye, ShieldCheck, Database, LayoutDashboard } from 'lucide-react';

function Features() {
  const features = [
    {
      icon: <Wifi size={40} />,
      title: "Long-Range UHF RFID Detection",
      desc: "Industrial-grade antennas detect student identity cards from up to 5-10 meters away. Multiple students can be scanned simultaneously as they walk through the gates."
    },
    {
      icon: <Database size={40} />,
      title: "Real-Time Cloud Sync",
      desc: "Attendance data is sent directly to the cloud database within milliseconds, ensuring data is never lost and always accessible."
    },
    {
      icon: <LayoutDashboard size={40} />,
      title: "Admin Dashboard",
      desc: "A comprehensive control panel allowing administrators to spot trends, generate PDF reports, and view absolute live movement across all campus gates."
    },
    {
      icon: <Eye size={40} />,
      title: "Automated Parent Alerts",
      desc: "Trigger automatic WhatsApp, SMS, or Push Notifications to parents, updating them instantly on arrival and departure."
    }
  ];

  return (
    <div className="page-wrapper">
      <section className="section text-center">
        <div className="container">
          <h1 className="text-h1 mb-2">Platform <span className="text-gradient">Features</span></h1>
          <p className="text-large text-secondary" style={{ maxWidth: '600px', margin: '0 auto 4rem' }}>
            Our phase 1 and phase 2 capabilities combine to form an unbreakable infrastructure.
          </p>

          <div className="grid-2">
            {features.map((f, i) => (
              <div key={i} className="glass-panel" style={{ padding: '2.5rem', textAlign: 'left', display: 'flex', gap: '1.5rem' }}>
                <div style={{ 
                  color: 'var(--accent-cyan)', 
                  flexShrink: 0,
                  background: 'rgba(6, 182, 212, 0.1)',
                  padding: '1rem',
                  borderRadius: '16px',
                  height: 'min-content'
                }}>
                  {f.icon}
                </div>
                <div>
                  <h3 className="text-h4 mb-1">{f.title}</h3>
                  <p className="text-secondary">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-darker">
        <div className="container">
          <div className="glass-panel" style={{ padding: '4rem', background: 'var(--bg-color)', position: 'relative', overflow: 'hidden' }}>
            <div className="bg-glow" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '1000px', height: '1000px' }}></div>
            
            <div className="text-center" style={{ position: 'relative', zIndex: 10 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', background: 'rgba(59, 130, 246, 0.2)', color: 'var(--accent-blue)', borderRadius: '50px', marginBottom: '1rem' }}>
                <ShieldCheck size={18} /> Phase 2 Upcoming
              </div>
              <h2 className="text-h2 mb-2">AI + Security Upgrade</h2>
              <p className="text-large text-secondary mb-6" style={{ maxWidth: '700px', margin: '0 auto' }}>
                We are actively developing an artificial intelligence layer that links high-speed facial recognition with the RFID identity token to prevent duplicate usage entirely.
              </p>
              
              <div className="grid-3 mt-6 text-left">
                {[
                  { title: "Face Verification", desc: "Cameras instantly verify the face of the student carrying the card." },
                  { title: "Anti-Proxy Engine", desc: "If someone carries another student's card, an anomaly is logged immediately." },
                  { title: "Strong Access Control", desc: "Restrict entry through turnstiles or automatic doors based on live matched data." }
                ].map((item, i) => (
                  <div key={i} style={{ borderLeft: '2px solid var(--accent-blue)', paddingLeft: '1.5rem' }}>
                    <h4 className="text-h4 mb-1">{item.title}</h4>
                    <p className="text-secondary text-small">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Features;
