export default function Problem() {
  const cards = [
    {
      number: 'Most',
      label: 'Prospects sitting idle in your Excel & CRM lists',
      desc: 'You collected hundreds of leads at your last show. They\'re sitting in a spreadsheet right now, untouched.',
    },
    {
      number: 'Zero',
      label: 'Organiser dependency needed',
      desc: 'You don\'t need to wait for the organiser to share the attendee list. Fingoh works independently.',
    },
    {
      number: '48h+',
      label: 'Delay before first follow-up',
      desc: 'By the time your team follows up, the prospect has already met 12 other vendors and forgotten your name.',
    },
    {
      number: '1 in 10',
      label: 'Booth visitors actually convert',
      desc: 'The other 9 walked away with your brochure and nothing else. Intent signals change that ratio.',
    },
  ];

  return (
    <section id="problem">
      <div className="container">
        <h2 className="problem-headline fade-up delay-1">
          Every year, exhibitors leave their most powerful sales asset sitting idle — leads and
          prospects buried in Excel sheets and CRM lists, never acted on at the right moment.
        </h2>
        <div className="pain-grid">
          {cards.map((card, i) => (
            <div key={i} className={`pain-card fade-up delay-${i}`}>
              <div className="pain-number">{card.number}</div>
              <div className="pain-label">{card.label}</div>
              <div className="pain-desc">{card.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}