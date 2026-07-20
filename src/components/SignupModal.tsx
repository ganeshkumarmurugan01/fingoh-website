'use client';

import { useState } from 'react';

const COUNTRIES = [
  'Afghanistan','Albania','Algeria','Argentina','Australia','Austria','Bahrain','Bangladesh',
  'Belgium','Brazil','Canada','Chile','China','Colombia','Croatia','Czech Republic','Denmark',
  'Egypt','Finland','France','Germany','Ghana','Greece','Hong Kong','Hungary','India',
  'Indonesia','Ireland','Israel','Italy','Japan','Jordan','Kenya','Kuwait','Malaysia',
  'Mexico','Morocco','Netherlands','New Zealand','Nigeria','Norway','Oman','Pakistan',
  'Philippines','Poland','Portugal','Qatar','Romania','Saudi Arabia','Singapore','South Africa',
  'South Korea','Spain','Sri Lanka','Sweden','Switzerland','Taiwan','Thailand','Turkey',
  'UAE','Ukraine','United Kingdom','United States','Vietnam','Other',
];

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SignupModal({ isOpen, onClose }: SignupModalProps) {
  const [form, setForm] = useState({
    name: '', company: '', email: '', country: '', password: '', terms: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [done, setDone] = useState(false);

  if (!isOpen) return null;

  const set = (k: string, v: string | boolean) => setForm(p => ({ ...p, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!form.terms) { setError('Please agree to the Terms of Use to continue.'); return; }
    if (form.password.length < 8) { setError('Password must be at least 8 characters.'); return; }

    setLoading(true);
    try {
      const res = await fetch('https://api.fingoh.ai/api/v1/onboarding/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name:     form.name.trim(),
          company:  form.company.trim(),
          email:    form.email.trim().toLowerCase(),
          country:  form.country,
          password: form.password,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.detail || 'Signup failed. Please try again.');
      setDone(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  const inp: React.CSSProperties = {
    width: '100%', padding: '10px 14px', borderRadius: 8,
    border: '1px solid rgba(0,0,0,0.12)', fontSize: 14,
    fontFamily: 'inherit', outline: 'none', boxSizing: 'border-box',
    background: '#fff', color: '#0A1628',
  };
  const lbl: React.CSSProperties = {
    display: 'block', fontSize: 12, fontWeight: 600,
    color: '#5A6A7A', marginBottom: 6, letterSpacing: '0.02em',
  };

  return (
    <div
      style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }}
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,22,40,0.6)', backdropFilter: 'blur(4px)' }} />
      <div style={{ position: 'relative', background: '#fff', borderRadius: 16, width: '100%', maxWidth: 480, maxHeight: '90vh', overflowY: 'auto', boxShadow: '0 24px 64px rgba(0,0,0,0.2)' }}>

        {/* Header */}
        <div style={{ padding: '28px 32px 0' }}>
          <button onClick={onClose} style={{ position: 'absolute', top: 16, right: 16, background: 'none', border: 'none', fontSize: 20, cursor: 'pointer', color: '#94A3B8', lineHeight: 1 }}>×</button>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#3B9EE8', marginBottom: 8 }}>Free Trial</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 800, color: '#0A1628', margin: '0 0 4px', letterSpacing: '-0.02em' }}>Start your free trial</h2>
          <p style={{ fontSize: 13, color: '#5A6A7A', margin: '0 0 24px' }}>1 event · 100 contacts · 10 Deep IEI analyses. No credit card required.</p>
        </div>

        {done ? (
          <div style={{ padding: '0 32px 32px', textAlign: 'center' }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>🎉</div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 700, color: '#0A1628', margin: '0 0 8px' }}>Account created!</h3>
            <p style={{ fontSize: 14, color: '#5A6A7A', lineHeight: 1.6, margin: '0 0 24px' }}>
              Check your inbox for your welcome email, then log in to your dashboard at <strong>exhibitor.fingoh.ai</strong>
            </p>
            <a href="https://exhibitor.fingoh.ai" style={{ display: 'inline-block', background: '#3B9EE8', color: '#fff', padding: '12px 28px', borderRadius: 8, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>
              Go to Dashboard →
            </a>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ padding: '0 32px 32px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
              <div>
                <label style={lbl}>Full Name *</label>
                <input required style={inp} placeholder="Jane Smith" value={form.name} onChange={e => set('name', e.target.value)} />
              </div>
              <div>
                <label style={lbl}>Company *</label>
                <input required style={inp} placeholder="Acme Corp" value={form.company} onChange={e => set('company', e.target.value)} />
              </div>
            </div>

            <div style={{ marginBottom: 14 }}>
              <label style={lbl}>Work Email *</label>
              <input required type="email" style={inp} placeholder="jane@acmecorp.com" value={form.email} onChange={e => set('email', e.target.value)} />
            </div>

            <div style={{ marginBottom: 14 }}>
              <label style={lbl}>Country *</label>
              <select required style={{ ...inp, appearance: 'none', background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%235A6A7A' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E") no-repeat right 14px center #fff` }} value={form.country} onChange={e => set('country', e.target.value)}>
                <option value="">Select country</option>
                {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>

            <div style={{ marginBottom: 20 }}>
              <label style={lbl}>Password *</label>
              <input required type="password" style={inp} placeholder="Min. 8 characters" value={form.password} onChange={e => set('password', e.target.value)} />
            </div>

            <label style={{ display: 'flex', alignItems: 'flex-start', gap: 10, cursor: 'pointer', marginBottom: 20 }}>
              <input type="checkbox" checked={form.terms} onChange={e => set('terms', e.target.checked)} style={{ marginTop: 2, flexShrink: 0 }} />
              <span style={{ fontSize: 12, color: '#5A6A7A', lineHeight: 1.5 }}>
                I agree to the{' '}
                <a href="/privacy-policy" target="_blank" style={{ color: '#3B9EE8', textDecoration: 'underline' }}>Terms of Use</a>
                {' '}and{' '}
                <a href="/privacy-policy" target="_blank" style={{ color: '#3B9EE8', textDecoration: 'underline' }}>Privacy Policy</a>.
                Your data is processed in accordance with our{' '}
                <a href="/gdpr-notice" target="_blank" style={{ color: '#3B9EE8', textDecoration: 'underline' }}>GDPR Notice</a>.
              </span>
            </label>

            {error && (
              <div style={{ background: '#FEF2F2', border: '1px solid #FECACA', borderRadius: 8, padding: '10px 14px', fontSize: 13, color: '#DC2626', marginBottom: 16 }}>
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              style={{ width: '100%', padding: '13px', background: loading ? '#94A3B8' : '#3B9EE8', color: '#fff', border: 'none', borderRadius: 8, fontSize: 15, fontWeight: 700, cursor: loading ? 'not-allowed' : 'pointer', fontFamily: 'inherit', transition: 'background 0.2s' }}
            >
              {loading ? 'Creating your account…' : 'Start Free Trial →'}
            </button>

            <p style={{ fontSize: 12, color: '#94A3B8', textAlign: 'center', margin: '16px 0 0' }}>
              Already have an account?{' '}
              <a href="https://exhibitor.fingoh.ai" style={{ color: '#3B9EE8', fontWeight: 600 }}>Log in →</a>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
