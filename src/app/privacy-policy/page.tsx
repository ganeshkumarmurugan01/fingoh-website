import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — Fingoh.ai',
};

export default function PrivacyPolicy() {
  return (
    <div style={{ minHeight: '100vh', background: '#F7F9FC' }}>
      {/* Nav bar */}
      <div style={{ background: '#fff', borderBottom: '1px solid rgba(0,0,0,0.08)', padding: '16px 0' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div className="nav-logo">
            <Image src="/fingoh-logo.png" alt="Fingoh" width={120} height={32} style={{ height: 32, width: 'auto' }} />
          </div>

          <Link href="/" style={{ fontSize: 14, color: '#5A6A7A', textDecoration: 'none' }}>
            ← Back to home
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="container" style={{ maxWidth: 760, padding: '64px 24px' }}>
        <div style={{ marginBottom: 8, fontSize: 13, color: '#5A6A7A' }}>Last updated: 20 July 2026</div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 36, fontWeight: 700, color: '#0A1628', marginBottom: 48, letterSpacing: '-0.02em' }}>
          Privacy Policy
        </h1>

        {[
          {
            title: '1. Who we are',
            content: 'Fingoh ("we", "us", "our") provides an AI-powered exhibitor intelligence platform that helps trade fair exhibitors identify, score, and engage with qualified visitors. Our platform is operated as a B2B SaaS service.',
          },
          {
            title: '2. Data we process',
            content: 'As a data processor, we process visitor data on behalf of our customers (exhibitors), who are the data controllers. This includes:',
            bullets: [
              'Visitor names, email addresses, job titles, company names and contact details',
              'Event attendance signals and behavioural data logged during the exhibition',
              'Meeting requests and conversation notes captured by exhibitor staff',
              'AI-generated intent scores and lead classifications',
            ],
          },
          {
            title: '3. How we use your data',
            content: 'Visitor data is used exclusively to provide the Fingoh.ai service to the exhibitor who collected it. We do not sell, share, or use visitor data for any purpose beyond delivering the contracted service.',
          },
          {
            title: '4. Data storage & security',
            content: 'All data is stored in a secured database hosted on Supabase (AWS ap-northeast-2, Seoul). Data in transit is encrypted via TLS. Access is restricted by role-based authentication.',
          },
          {
            title: '5. Data retention',
            content: 'Visitor contact data is retained for up to 24 months after the event end date to support cross-edition scoring models. After this period, personal data is anonymised or deleted. Exhibitors may request earlier deletion via the GDPR erasure feature in their account settings.',
          },
          {
            title: '6. Your rights',
            content: 'If you are a visitor whose data has been collected by an exhibitor using Fingoh.ai, you may contact that exhibitor to exercise your rights under applicable data protection law, including the right to access, rectify, or erase your personal data.',
          },
          {
            title: '7. Contact',
            content: 'For privacy enquiries, contact us at hello@fingoh.ai',
          },
        ].map((section, i) => (
          <div key={i} style={{ marginBottom: 40 }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 700, color: '#0A1628', marginBottom: 12 }}>
              {section.title}
            </h2>
            <p style={{ fontSize: 15, color: '#5A6A7A', lineHeight: 1.8 }}>{section.content}</p>
            {section.bullets && (
              <ul style={{ marginTop: 12, paddingLeft: 20 }}>
                {section.bullets.map((b, j) => (
                  <li key={j} style={{ fontSize: 15, color: '#5A6A7A', lineHeight: 1.8, marginBottom: 6 }}>{b}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div style={{ borderTop: '1px solid rgba(0,0,0,0.08)', padding: '24px 0', textAlign: 'center' }}>
        <p style={{ fontSize: 13, color: '#5A6A7A' }}>© 2026 Fingoh.ai · Akiraas Pte. Ltd. · Singapore</p>
      </div>
    </div>
  );
}