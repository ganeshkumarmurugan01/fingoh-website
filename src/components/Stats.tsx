export default function Stats() {
  const stats = [
    { number: '73%', label: 'of exhibitors say poor lead quality is their #1 problem' },
    { number: '48h', label: 'average delay before first post-show follow-up' },
    { number: '6×', label: 'higher conversion when outreach happens before the show' },
    { number: '91%', label: 'of booth visitors are never contacted again' },
  ];

  return (
    <section id="stats">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, i) => (
            <div key={i} className="stat-item">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}