import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-inner">
          <div className="footer-logo">
            <Image src="/fingoh-logo.png" alt="Fingoh.ai" width={120} height={32} style={{ height: 32, width: 'auto' }} />
          </div>
          <ul className="footer-links">
            <li><a href="#platform">Platform</a></li>
            <li><a href="#how">How it works</a></li>
            <li><a href="#solutions">Solutions</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="mailto:hello@fingoh.ai">hello@fingoh.ai</a></li>
          </ul>
          <div className="footer-copy">© 2026 Fingoh.ai · Akiraas Pte. Ltd. · Singapore</div>
        </div>

        {/* Legal links */}
        <div style={{
          borderTop: '1px solid rgba(0,0,0,0.06)',
          marginTop: 24,
          paddingTop: 20,
          display: 'flex',
          gap: 24,
          justifyContent: 'center',
        }}>
          <Link href="/privacy-policy" style={{ fontSize: 12, color: 'var(--slate-dark)', transition: 'color 0.2s' }}>
            Privacy Policy
          </Link>
          <Link href="/data-processing-agreement" style={{ fontSize: 12, color: 'var(--slate-dark)', transition: 'color 0.2s' }}>
            Data Processing Agreement
          </Link>
          <Link href="/gdpr-notice" style={{ fontSize: 12, color: 'var(--slate-dark)', transition: 'color 0.2s' }}>
            GDPR Notice
          </Link>
        </div>
      </div>
    </footer>
  );
}