export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Connect your show',
      desc: 'Tell Fingoh which trade fair you\'re exhibiting at. We pull the exhibitor directory, floor plan and session data automatically.',
    },
    {
      num: '02',
      title: 'Define your ICP',
      desc: 'Set your ideal customer profile — industry, company size, seniority, geography. Fingoh scores every attendee against it.',
    },
    {
      num: '03',
      title: 'Fingoh does the rest',
      desc: 'Pre-show outreach goes out. Live signals come in during the show. Follow-up sequences fire the moment it ends. You close deals.',
    },
  ];

  return (
    <section id="how">
      <div className="container">
        <div className="how-header">
          <h2>Up and running in under 30 minutes</h2>
          <p>No complex integrations. No data science team required.</p>
        </div>
        <div className="steps-grid">
          {steps.map((step, i) => (
            <div key={i} className="step-card fade-up">
              <div className="step-num">{step.num}</div>
              <div className="step-title">{step.title}</div>
              <div className="step-desc">{step.desc}</div>
            </div>
          ))}
        </div>
        <div className="decay-banner">
          <strong>The 48-hour rule:</strong> Intent decays fast. A prospect who visited your booth
          on Tuesday has forgotten you by Friday. Fingoh ensures your follow-up lands within hours, not days.
        </div>
      </div>
    </section>
  );
}