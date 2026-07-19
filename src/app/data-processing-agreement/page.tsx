import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Data Processing Agreement — Fingoh.ai',
};

export default function DPA() {
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
          Data Processing Agreement
        </h1>
        <p style={{ fontSize: 15, color: '#5A6A7A', lineHeight: 1.8, marginBottom: 48 }}>
          This Data Processing Agreement ("DPA") forms part of the Fingoh.ai Terms of Service between
          Fingoh.ai ("Processor") and the subscribing organisation ("Controller").
        </p>

        {[
          {
            title: '1. Definitions',
            content: 'Controller means the exhibiting organisation using Fingoh.ai to manage visitor data. Processor means Fingoh.ai. Personal Data means any information relating to an identified or identifiable natural person processed under this agreement.',
          },
          {
            title: '2. Subject matter & purpose',
            content: 'The Processor shall process Personal Data only for the purpose of providing the Fingoh.ai exhibitor intelligence platform as described in the Terms of Service, and strictly on documented instructions from the Controller.',
          },
          {
            title: '3. Controller obligations',
            content: 'The Controller warrants that it has a valid lawful basis (such as legitimate interest or consent) for collecting and transferring visitor personal data to Fingoh.ai for processing, and that it has provided visitors with appropriate privacy notices.',
          },
          {
            title: '4. Processor obligations',
            content: 'Fingoh.ai shall:',
            bullets: [
              'Process Personal Data only on Controller instructions',
              'Ensure persons authorised to process data are bound by confidentiality',
              'Implement appropriate technical and organisational security measures',
              'Not engage sub-processors without Controller consent',
              'Assist the Controller in responding to data subject rights requests',
              'Delete or return all Personal Data upon termination of services',
            ],
          },
          {
            title: '5. Sub-processors',
            content: 'Fingoh.ai uses the following sub-processors: Supabase (database hosting, AWS Seoul), Anthropic (AI processing, USA), Modal Labs (ML scoring, USA), Vercel (frontend hosting, USA), Railway (backend hosting, USA). Sub-processor details are available on request.',
          },
          {
            title: '6. Security measures',
            content: 'Fingoh.ai implements: TLS encryption in transit, encrypted storage at rest, role-based access control, audit logging of all data access and deletion events, and regular security reviews.',
          },
          {
            title: '7. Data subject rights',
            content: 'The Processor shall notify the Controller of any data subject rights request within 48 hours and shall provide reasonable assistance to enable the Controller to fulfil such requests within statutory timeframes.',
          },
          {
            title: '8. Breach notification',
            content: 'In the event of a personal data breach, Fingoh.ai shall notify the Controller without undue delay and in any case within 72 hours of becoming aware of the breach.',
          },
          {
            title: '9. Governing law',
            content: 'This DPA is governed by the laws of India. For EU data subjects, the parties agree to comply with GDPR requirements and, where required, to execute Standard Contractual Clauses.',
          },
          {
            title: 'Contact',
            content: 'For DPA enquiries: hello@fingoh.ai',
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

      <div style={{ borderTop: '1px solid rgba(0,0,0,0.08)', padding: '24px 0', textAlign: 'center' }}>
        <p style={{ fontSize: 13, color: '#5A6A7A' }}>© 2026 Fingoh.ai · Akiraas Pte. Ltd. · Singapore</p>
      </div>
    </div>
  );
}