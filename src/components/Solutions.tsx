interface SolutionsProps {
  onOpenModal: () => void;
  onOpenWaitlist: () => void;
}

export default function Solutions({ onOpenModal, onOpenWaitlist}: SolutionsProps) {
  return (
    <section id="solutions">
      <div className="container">
        <div className="solutions-header">  
          <h2>Built for exhibitors. Loved by organisers.</h2>
          <p>Two products solving the same problem from both sides of the trade fair.</p>
        </div>
        <div className="solutions-grid">
          <div className="solution-card primary">
            <div className="solution-for">For Exhibitors</div>
            <div className="solution-name">Fingoh Exhibitor</div>
            <div className="solution-tagline">Your unfair advantage at every trade fair</div>
            <ul className="solution-list">
              <li>ICP-matched prospect lists from every show directory</li>
              <li>Pre-show outreach sequences on email and LinkedIn</li>
              <li>Live intent scoring during the show</li>
              <li>Automated post-show follow-up within 2 hours</li>
              <li>Full CRM sync with HubSpot, Salesforce and Pipedrive</li>
              <li>Show ROI dashboard with pipeline attribution</li>
            </ul>
            <button className="btn-primary" style={{ marginTop: 32 }} onClick={onOpenModal}>
              Book Demo
            </button>
          </div>

          <div className="solution-card secondary">
            <div className="coming-badge">⏳ Coming Soon</div>
            <div className="solution-for">For Organisers</div>
            <div className="solution-name">Fingoh Organiser</div>
            <div className="solution-tagline">Help your exhibitors succeed. They come back every year.</div>
            <ul className="solution-list">
              <li>Matchmaking engine for exhibitors and visitors</li>
              <li>Sponsored outreach tools for exhibitor packages</li>
              <li>Post-show analytics dashboard for organisers</li>
              <li>White-label option available</li>
            </ul>
            <button className="waitlist-link" onClick={onOpenWaitlist}>
              Join the waitlist →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}