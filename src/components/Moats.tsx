export default function Moats() {
  const moats = [
    {
      icon: '🧠',
      name: 'Intent data network',
      desc: 'Every show makes our intent models smarter. The more exhibitors use Fingoh, the better our prospect scoring gets for everyone.',
    },
    {
      icon: '⚡',
      name: 'Speed to follow-up',
      desc: 'Our post-show sequences fire within 2 hours of show close — before your competitors have even landed back home.',
    },
    {
      icon: '🎯',
      name: 'ICP precision',
      desc: 'We don\'t give you the full attendee list. We give you the 50 people you should actually talk to, ranked by fit and intent.',
    },
    {
      icon: '🔄',
      name: 'Full lifecycle coverage',
      desc: 'Pre, during and post — one platform. No stitching together five tools. No data falling through the gaps.',
    },
  ];

  return (
    <section id="moats">
      <div className="container">
        <div className="moats-header">
          <h2>Why exhibitors don&apos;t go back to doing it manually</h2>
          <p>Once you&apos;ve run a show with Fingoh, the old way feels impossible.</p>
        </div>
        <div className="moats-grid">
          {moats.map((moat, i) => (
            <div key={i} className="moat-card fade-up">
              <div className="moat-icon">{moat.icon}</div>
              <div className="moat-name">{moat.name}</div>
              <div className="moat-desc">{moat.desc}</div>
            </div>
          ))}
        </div>
        <div className="flywheel-banner">
          More exhibitors → better intent data →
          <span> smarter prospect scoring</span> → better results →
          <span> more exhibitors</span>
        </div>
      </div>
    </section>
  );
}