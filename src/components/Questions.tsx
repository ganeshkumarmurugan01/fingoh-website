export default function Questions() {
  const phases = [
    {
      label: 'Pre-Show',
      className: 'pre',
      questions: [
        'Who from our ICP is attending this show?',
        'Which prospects should we prioritise for outreach?',
        'How do we get meetings booked before we arrive?',
        'What messaging worked at the last show?',
        'Which competitors are also exhibiting?',
      ],
    },
    {
      label: 'During',
      className: 'during',
      questions: [
        'Which booth visitors are actually worth following up with?',
        'Who has visited us more than once today?',
        'What is the intent score of this badge scan?',
        'Which leads should my team prioritise right now?',
        'How do I capture notes without slowing down?',
      ],
    },
    {
      label: 'Post-Show',
      className: 'post',
      questions: [
        'How do I follow up with 200 leads in 48 hours?',
        'Which leads are hot vs cold right now?',
        'What was our ROI from this show?',
        'Which prospects have gone quiet?',
        'How do I sync everything into our CRM?',
      ],
    },
  ];

  return (
    <section id="questions">
      <div className="container">
        <div className="questions-header">
          <h2>The questions every exhibitor asks — and never gets answered fast enough</h2>
          <p>Fingoh answers all of them, automatically, at every stage of the show cycle.</p>
        </div>
        <div className="questions-grid">
          {phases.map((phase, i) => (
            <div key={i} className="q-column">
              <div className={`q-phase ${phase.className}`}>{phase.label}</div>
              {phase.questions.map((q, j) => (
                <div key={j} className="q-item">{q}</div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}