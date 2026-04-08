import React from 'react';
import { Check } from 'lucide-react';
import Button from '../components/ui/Button';

function Pricing() {
  return (
    <div className="page-wrapper pt-12">
      <section className="section text-center">
        <div className="container">
          <h1 className="text-h1 mb-2">Simple, transparent <span className="text-gradient">pricing</span></h1>
          <p className="text-large text-secondary" style={{ maxWidth: '600px', margin: '0 auto 4rem' }}>
            No hidden fees. A predictable recurring revenue model based directly on student enrollment. Hardware installation quoted separately upon campus survey.
          </p>

          <div className="grid-2" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'left' }}>
            {/* Standard Tier */}
            <div className="glass-panel" style={{ padding: '3rem', position: 'relative' }}>
               <h3 className="text-h3 mb-1">Standard Core</h3>
               <p className="text-secondary mb-4">Perfect for establishing automated attendance infrastructure.</p>
               <div style={{ marginBottom: '2rem' }}>
                 <span className="text-h2">₹50</span>
                 <span className="text-secondary"> / student / quarter</span>
               </div>
               <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
                 {[
                   'UHF RFID walking detection',
                   'Real-time admin dashboard',
                   'Automated attendance marking',
                   'Parent SMS/App notification',
                   'Basic reporting & analytics'
                 ].map((feature, i) => (
                   <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-secondary)' }}>
                     <Check size={18} color="var(--accent-cyan)" /> {feature}
                   </li>
                 ))}
               </ul>
               <Button variant="outline" style={{ width: '100%' }}>Request Quote</Button>
            </div>

            {/* Premium Tier */}
            <div className="glass-panel" style={{ padding: '3rem', background: 'rgba(6, 182, 212, 0.05)', border: '1px solid var(--accent-cyan)', position: 'relative', transform: 'scale(1.05)' }}>
               <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translate(-50%, -50%)', background: 'var(--accent-gradient)', padding: '0.25rem 1rem', borderRadius: '50px', fontSize: '0.875rem', fontWeight: 600 }}>
                 Most Popular
               </div>
               <h3 className="text-h3 mb-1">AI Premium Upgrade</h3>
               <p className="text-secondary mb-4">Complete security ecosystem with facial anti-proxy verification.</p>
               <div style={{ marginBottom: '2rem' }}>
                 <span className="text-h2">₹75</span>
                 <span className="text-secondary"> / student / month</span>
               </div>
               <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
                 {[
                   'Everything in Standard Core',
                   'AI Face Verification',
                   'Duplicate / Proxy Prevention',
                   'Strong physical access control',
                   'Priority 24/7 technical support'
                 ].map((feature, i) => (
                   <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#fff' }}>
                     <Check size={18} color="var(--accent-blue)" /> {feature}
                   </li>
                 ))}
               </ul>
               <Button variant="primary" style={{ width: '100%' }}>Request Quote</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Pricing;
