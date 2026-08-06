'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

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

const EMPTY_FORM = {
  name: '', company: '', email: '', country: '', password: '', terms: false,
};

export default function SignupPage() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [done, setDone] = useState(false);

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

      // GA4 tracking
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'sign_up', { method: 'email' });
      }
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
    <div style={{ minHeight: '100vh', background: '#F7F9FC', display: 'flex', flexDirection: 'column' }}>

      {/* Nav */}
      <div style={{ background: '#fff', borderBottom: '1px solid rgba(0,0,0,0.08)', padding: '16px 0' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/">
            <Image src="/fingoh-logo.png" alt="Fingoh.ai" width={120} height={32} style={{ height: 32, width: 'auto' }} />
          </Link>
          <Link href="/" style={{ fontSize: 14, color: '#5A6A7A', textDecoration: 'none' }}>
            ← Back to home
          </Link>
        </div>
      </div>

      {/* Main */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '48px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, maxWidth: 960, width: '100%', alignItems: 'start' }}>

          {/* Left — value prop */}
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#3B9EE8', marginBottom: 12 }}>
              Free Trial
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 36, fontWeight: 800, color: '#0A1628', marginBottom: 16, letterSpacing: '-0.02em', lineHeight: 1.2 }}>
              Start identifying your best trade fair prospects today
            </h1>
            <p style={{ fontSize: 16, color: '#5A6A7A', lineHeight: 1.7, marginBottom: 36 }}>
              Get started with 1 event, 100 ICP-matched contacts and 10 Deep IEI analyses.
              No credit card required.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 36 }}>
              {[
                { icon: '🎯', title: 'ICP-matched prospect lists', desc: 'Scored and ranked by fit and intent' },
                { icon: '⚡', title: 'Pre-show outreach automation', desc: 'Email and LinkedIn sequences' },
                { icon: '📊', title: 'Live intent scoring', desc: 'Real-time booth visitor signals' },
                { icon: '🔄', title: 'Post-show follow-up engine', desc: 'Automated sequences within 2 hours' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <span style={{ fontSize: 22, flexShrink: 0 }}>{item.icon}</span>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: '#0A1628', marginBottom: 2 }}>{item.title}</div>
                    <div style={{ fontSize: 13, color: '#5A6A7A' }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ padding: '16px 20px', background: 'rgba(0,194,168,0.06)', border: '1px solid rgba(0,194,168,0.2)', borderRadius: 10, fontSize: 13, color: '#5A6A7A', lineHeight: 1.6 }}>
              Already used by exhibitors at <strong style={{ color: '#0A1628' }}>CPHI, PACK EXPO and Pharmapack</strong>.
            </div>
          </div>

          {/* Right — form */}
          <div style={{ background: '#fff', borderRadius: 16, padding: '36px', boxShadow: '0 4px 24px rgba(0,0,0,0.08)', border: '1px solid rgba(0,0,0,0.06)' }}>

            {done ? (
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>📧</div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, color: '#0A1628', marginBottom: 8 }}>
                  Check your inbox
                </h2>
                <p style={{ fontSize: 14, color: '#5A6A7A', lineHeight: 1.6, marginBottom: 24 }}>
                  We've sent a verification email to <strong>{form.email}</strong>.
                  Click the link to activate your account.
                </p>
                <div style={{ background: '#FFF7ED', border: '1px solid #FED7AA', borderRadius: 10, padding: '14px 18px', marginBottom: 20, textAlign: 'left' }}>
                  <p style={{ fontSize: 13, color: '#92400E', margin: '0 0 6px', fontWeight: 700 }}>⚠ Verify your email to activate</p>
                  <ol style={{ fontSize: 13, color: '#92400E', margin: 0, paddingLeft: 18, lineHeight: 1.8 }}>
                    <li>Open the verification email from Fingoh.ai</li>
                    <li>Click <strong>"Confirm your email"</strong></li>
                    <li>You'll be redirected to log in</li>
                  </ol>
                </div>
                <Link href="/" style={{ fontSize: 13, color: '#3B9EE8', fontWeight: 600 }}>
                  ← Back to Fingoh.ai
                </Link>
              </div>
            ) : (
              <>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#3B9EE8', marginBottom: 8 }}>
                  Free Trial
                </div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 800, color: '#0A1628', marginBottom: 4, letterSpacing: '-0.02em' }}>
                  Start your free trial
                </h2>
                <p style={{ fontSize: 13, color: '#5A6A7A', marginBottom: 24 }}>
                  1 event · 100 contacts · 10 Deep IEI analyses. No credit card required.
                </p>

                <form onSubmit={handleSubmit}>
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
                    <select required style={{ ...inp, appearance: 'none' }} value={form.country} onChange={e => set('country', e.target.value)}>
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
                      <Link href="/privacy-policy" target="_blank" style={{ color: '#3B9EE8', textDecoration: 'underline' }}>Terms of Use</Link>
                      {' '}and{' '}
                      <Link href="/privacy-policy" target="_blank" style={{ color: '#3B9EE8', textDecoration: 'underline' }}>Privacy Policy</Link>.
                      Your data is processed in accordance with our{' '}
                      <Link href="/gdpr-notice" target="_blank" style={{ color: '#3B9EE8', textDecoration: 'underline' }}>GDPR Notice</Link>.
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
              </>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ borderTop: '1px solid rgba(0,0,0,0.08)', padding: '24px 0', textAlign: 'center' }}>
        <p style={{ fontSize: 13, color: '#5A6A7A' }}>© 2026 Fingoh.ai · Akiraas Pte. Ltd. · Singapore</p>
      </div>
    </div>
  );
}