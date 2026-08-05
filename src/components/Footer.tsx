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
       {/* Legal links */}
<div className="footer-legal">
  <Link href="/privacy-policy">Privacy Policy</Link>
  <span style={{ color: 'var(--border)' }}>·</span>
  <Link href="/data-processing-agreement">Data Processing Agreement</Link>
  <span style={{ color: 'var(--border)' }}>·</span>
  <Link href="/gdpr-notice">GDPR Notice</Link>
</div>
      </div>
    </footer>
  );
}