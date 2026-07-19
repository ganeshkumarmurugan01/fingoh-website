import Image from 'next/image';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-inner">
          <div className="footer-logo">
            <Image src="/fingoh-logo.png" alt="Fingoh" width={120} height={32} style={{ height: 32, width: 'auto' }} />
          </div>
          <ul className="footer-links">
            <li><a href="#platform">Platform</a></li>
            <li><a href="#how">How it works</a></li>
            <li><a href="#solutions">Solutions</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="mailto:hello@fingoh.ai">hello@fingoh.ai</a></li>
          </ul>
          <div className="footer-copy">© 2026 Fingoh.ai is a product of Akiraas Pte. Ltd. · Singapore</div>
        </div>
      </div>
    </footer>
  );
}