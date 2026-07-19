export default function Platform() {
  const modules = [
    {
      number: '01 — PRE-SHOW',
      name: 'Prospect Intelligence',
      question: 'Who should you be talking to before the show even starts?',
      desc: 'Fingoh scans the exhibitor directory, cross-references your ICP, and surfaces the prospects most likely to convert — weeks before the event.',
      signals: ['Company size match', 'Industry fit', 'Past event attendance', 'LinkedIn signals'],
    },
    {
      number: '02 — PRE-SHOW',
      name: 'Outreach Automation',
      question: 'How do you get meetings booked before you even arrive?',
      desc: 'Personalised outreach sequences sent on your behalf — email and LinkedIn — so your calendar is full before you land.',
      signals: ['Personalised templates', 'Multi-touch sequences', 'Meeting scheduler', 'CRM sync'],
    },
    {
      number: '03 — DURING',
      name: 'Live Booth Intelligence',
      question: 'Which visitors showing up at your booth are worth prioritising right now?',
      desc: 'Real-time intent signals from booth scans, badge data and engagement patterns. Know who to follow up with before the day ends.',
      signals: ['Badge scan scoring', 'Dwell time signals', 'Conversation notes', 'Hot lead alerts'],
    },
    {
      number: '04 — POST-SHOW',
      name: 'Follow-up Engine',
      question: 'How do you follow up with 200 leads in 48 hours without dropping the ball?',
      desc: 'Automated, personalised follow-up sequences triggered the moment the show ends. Tiered by intent score so your best leads hear from you first.',
      signals: ['Intent-ranked leads', 'Auto-sequences', 'Slack alerts', 'Pipeline reporting'],
    },
  ];

  return (
    <section id="platform">
      <div className="container">
        <div className="platform-header">
          <h2>One platform. The entire trade fair lifecycle.</h2>
          <p>From prospect identification weeks before the show to automated follow-up the moment it ends.</p>
        </div>
        <div className="modules-grid">
          {modules.map((mod, i) => (
            <div key={i} className="module-card fade-up">
              <div className="module-number">{mod.number}</div>
              <div className="module-name">{mod.name}</div>
              <div className="module-question">{mod.question}</div>
              <div className="module-desc">{mod.desc}</div>
              <div className="module-signals">
                {mod.signals.map((s, j) => (
                  <span key={j} className="signal-tag">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}