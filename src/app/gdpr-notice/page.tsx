
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GDPR Compliance Notice — Fingoh.ai',
};

export default function GDPRNotice() {
  return (
    <div style={{ minHeight: '100vh', background: '#F7F9FC' }}>
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

      <div className="container" style={{ maxWidth: 760, padding: '64px 24px' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 36, fontWeight: 700, color: '#0A1628', marginBottom: 16, letterSpacing: '-0.02em' }}>
          GDPR Compliance Notice
        </h1>
        <p style={{ fontSize: 15, color: '#5A6A7A', lineHeight: 1.8, marginBottom: 48 }}>
          Fingoh.ai is designed with data protection by design and by default. As a data processor
          under GDPR Article 28, we support our customers (data controllers) in meeting their
          obligations under the General Data Protection Regulation (EU) 2016/679 and equivalent
          national laws.
        </p>

        {[
          {
            title: 'Lawful basis for processing',
            content: 'Exhibitors using Fingoh.ai are responsible for establishing a lawful basis for processing visitor personal data. Common lawful bases include legitimate interest (Article 6(1)(f)) for B2B trade fair contexts, or consent (Article 6(1)(a)) where obtained through registration forms.',
          },
          {
            title: 'Data subject rights we support',
            content: '',
            bullets: [
              'Right of access (Art. 15) — Exhibitors can export all data for a visitor via CSV export',
              'Right to erasure (Art. 17) — Exhibitors can permanently delete all data for a visitor via Profile Settings → GDPR / Data Erasure',
              'Right to rectification (Art. 16) — Contact records can be edited via the visitor list',
              'Right to data portability (Art. 20) — All contact data is exportable as CSV at any time',
            ],
          },
          {
            title: 'International transfers',
            content: 'Data is currently stored in AWS Seoul (ap-northeast-2). For EU-based data subjects, transfers are conducted in accordance with applicable transfer mechanisms. Please contact us if you require Standard Contractual Clauses (SCCs) to be executed.',
          },
          {
            title: 'Data retention',
            content: 'Personal data is retained for up to 24 months after the event end date. This retention period supports historical scoring models that improve lead quality for future editions. Exhibitors may delete specific visitor records at any time using the erasure feature.',
          },
          {
            title: 'Data Protection Officer',
            content: 'For GDPR-related enquiries or to request SCCs, contact us at hello@fingoh.ai',
          },
        ].map((section, i) => (
          <div key={i} style={{ marginBottom: 40 }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 700, color: '#0A1628', marginBottom: 12 }}>
              {section.title}
            </h2>
            {section.content && (
              <p style={{ fontSize: 15, color: '#5A6A7A', lineHeight: 1.8 }}>{section.content}</p>
            )}
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

      <div style={{ borderTop: '1px solid rgba(0,0,0,0.08)', padding: '24px 0', textAlign: 'center' }}>
        <p style={{ fontSize: 13, color: '#5A6A7A' }}>© 2026 Fingoh.ai · Akiraas Pte. Ltd. · Singapore</p>
      </div>
    </div>
  );
}