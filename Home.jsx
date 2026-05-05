import './Home.css';

const CHARS = [
  { name: 'Homer Simpson',   role: 'The lovable, donut-obsessed father',  img: 'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png' },
  { name: 'Marge Simpson',   role: 'The patient, blue-haired matriarch',  img: 'https://upload.wikimedia.org/wikipedia/en/0/0b/Marge_Simpson.png' },
  { name: 'Bart Simpson',    role: 'The mischievous, skateboarding son',   img: 'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png' },
  { name: 'Lisa Simpson',    role: 'The intellectual, saxophone-playing daughter', img: 'https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png' },
  { name: 'Maggie Simpson',  role: 'The silent, always-watching baby',     img: 'https://upload.wikimedia.org/wikipedia/en/9/9d/Maggie_Simpson.png' },
  { name: 'Mr. Burns',       role: 'The sinister, all-powerful billionaire', img: 'https://upload.wikimedia.org/wikipedia/en/5/56/Mr_Burns.png' },
];

export default function Home() {
  return (
    <main className="home-page">

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-text fade-up">
          <h1 className="hero-title">The Simpsons<br/>Predicted It.</h1>
          <p className="hero-sub">
            Since 1989, The Simpsons has quietly slipped prophecies into its episodes.
            SimPredictions decodes those hidden signals and shows you the moments
            that came true in the real world.
          </p>
          <div className="hero-btns">
            <a href="/episodes"    className="btn btn-primary">Browse Episodes</a>
            <a href="/predictions" className="btn btn-outline">See Predictions</a>
          </div>
        </div>
        <div className="hero-img-wrap fade-up">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/The_Simpsons_yellow_logo.svg/1280px-The_Simpsons_yellow_logo.svg.png"
            alt="The Simpsons"
            className="hero-logo"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png"
            alt="Homer"
            className="hero-homer"
          />
        </div>
      </section>

      {/* ── ABOUT THE SHOW ── */}
      <section className="about-section page-wrapper">
        <h2 className="section-title">What Is The Simpsons?</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              The Simpsons is an American animated sitcom created by Matt Groening, 
              premiering on Fox in 1989. It follows the dysfunctional Simpson family 
              living in the fictional town of Springfield. With over 35 seasons, it is 
              the longest-running American animated series and primetime scripted 
              television series in history.
            </p>
            <p style={{ marginTop: '1rem' }}>
              The show blends sharp satire, slapstick humor and surprisingly deep 
              social commentary often poking fun at American culture, politics, 
              technology and everyday life.
            </p>
          </div>
          <div className="about-img-stack">
            <img src="https://www.looper.com/img/gallery/what-the-cast-of-the-simpsons-looks-like-in-real-life/intro-1740077063.jpg" alt="Cast" className="about-img bot" />
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO ── */}
      <section className="what-we-do">
        <div className="page-wrapper">
          <h2 className="section-title">What SimPredictions Does</h2>
          <div className="wwd-grid">
            {[
              { icon: '/img/eye.svg', heading: 'Episode Analysis',  body: 'We break down key episodes frame by frame, identifying signs, symbols and storylines that mirror future events.' },
              { icon: '/img/clock.svg', heading: 'Real-World Matches', body: 'Each prediction is matched against a dated real-world event with documented proof no guesswork, only evidence.' },
              { icon: '/img/graph.svg', heading: 'Pattern Tracking',  body: 'We track recurring themes across seasons to map the deeper pattern hidden inside this iconic cartoon.' },
            ].map((item, i) => (
              <div className="wwd-card fade-up" key={i} style={{ animationDelay: `${i * 0.15}s` }}>
                <div className="wwd-icon">{['?', 'T', 'P'][i]}</div>
                <h3>{item.heading}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CHARACTERS ── */}
      <section className="chars-section page-wrapper">
        <h2 className="section-title">Meet the Characters</h2>
        <div className="chars-grid">
          {CHARS.map((c, i) => (
            <div className="char-card fade-up" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
              <img src={c.img} alt={c.name} className="char-img" />
              <h4>{c.name}</h4>
              <p>{c.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── BANNER ── */}
      <section className="banner-section">
        <img
          src="https://m.media-amazon.com/images/I/91JiLf9vEBL._AC_SL1500_.jpg"
          alt="Simpsons Family Banner"
          className="banner-img"
        />
        <div className="banner-overlay">
          <h2>35 Years. Hundreds of Predictions.</h2>
          <a href="/predictions" className="btn btn-primary">Explore Now</a>
        </div>
      </section>

    </main>
  );
}