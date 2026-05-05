import './Episodes.css';

const EPISODES = [
  {
    num: 1,
    title: 'Bart Gets an F',
    season: 'Season 2, Episode 1 (1990)',
    thumb: 'https://static.wikia.nocookie.net/simpsons/images/7/72/Bart_Gets_an_F_title_card.png',
    embed: 'https://www.youtube.com/embed/Wv9mjg19-gE',
    desc: 'Bart fails his history test and faces being held back a grade. Under enormous pressure, he experiences an emotional breakthrough that sheds light on the immense mental health burden modern students carry a conversation that would only become mainstream decades later.',
  },
  {
    num: 2,
    title: 'Homer vs. Patty and Selma',
    season: 'Season 6, Episode 17 (1995)',
    thumb: 'https://static.wikia.nocookie.net/simpsons/images/3/3e/Homer_vs_Patty_and_Selma.png',
    embed: 'https://www.youtube.com/embed/xqBoYDzombw',
    desc: 'Homer borrows money from Marge\'s sisters and ends up working as their limo driver. The episode eerily mirrors the modern gig economy and rideshare culture years before Uber and Lyft even existed.',
  },
  {
    num: 3,
    title: 'Lisa\'s Wedding',
    season: 'Season 6, Episode 19 (1995)',
    thumb: 'https://static.wikia.nocookie.net/simpsons/images/9/9a/Lisa%27s_Wedding.png',
    embed: 'https://www.youtube.com/embed/L8cT_kYu_Mw',
    desc: 'Set in 2010, this episode shows smartwatches, video calls and hand-held computers technologies that were only science fiction in 1995 but became everyday reality by the 2010s.',
  },
  {
    num: 4,
    title: 'Bart to the Future',
    season: 'Season 11, Episode 17 (2000)',
    thumb: 'https://static.wikia.nocookie.net/simpsons/images/1/1b/Bart_to_the_Future.png',
    embed: 'https://www.youtube.com/embed/NMn6X0Ix0A0',
    desc: 'A future vision shows Lisa as U.S. President inheriting a national debt crisis left by the previous administration, a scenario that drew eerie comparisons to real political events 16 years later.',
  },
  {
    num: 5,
    title: 'When You Dish Upon a Star',
    season: 'Season 10, Episode 5 (1998)',
    thumb: 'https://static.wikia.nocookie.net/simpsons/images/5/52/When_You_Dish_Upon_a_Star.png',
    embed: 'https://www.youtube.com/embed/qx7P7QJrmW0?list=PL7bilu_E9krB640OWw0xv57dgDp31te4p',
    desc: 'The episode features a logo reading "20th Century Fox A Division of Walt Disney Co.", a joke that accurately predicted Disney\'s acquisition of Fox, which was completed in 2019.',
  },
  {
    num: 6,
    title: 'Homer the Whopper',
    season: 'Season 21, Episode 1 (2009)',
    thumb: 'https://static.wikia.nocookie.net/simpsons/images/a/a0/Homer_the_Whopper.png',
    embed: 'https://www.youtube.com/embed/P2V37YZ8gLY',
    desc: 'Homer is cast as a superhero in a major film, mirroring the superhero movie boom that exploded through the 2010s and how unlikely everyday people became the faces of franchises.',
  },
  {
    num: 7,
    title: 'The Wizard of Evergreen Terrace',
    season: 'Season 10, Episode 2 (1998)',
    thumb: 'https://static.wikia.nocookie.net/simpsons/images/5/5e/The_Wizard_of_Evergreen_Terrace.png',
    embed: 'https://www.youtube.com/embed/otYBxU4h8Ls',
    desc: 'Homer writes a mass-to-energy formula on a chalkboard that later turned out to be mathematically accurate when checked by scientists drawing comparisons to real physics equations.',
  },
  {
    num: 8,
    title: 'Marge in Chains',
    season: 'Season 4, Episode 21 (1993)',
    thumb: 'https://static.wikia.nocookie.net/simpsons/images/a/ae/Marge_in_Chains.png',
    embed: 'https://www.youtube.com/embed/aU1Nf7rEf-k',
    desc: 'Springfield is gripped by a flu virus that originated in Japan called the "Osaka Flu" mirroring the global pandemic trajectory that would eventually become a lived reality worldwide.',
  },
  {
    num: 9,
    title: 'Elementary School Musical',
    season: 'Season 22, Episode 1 (2010)',
    thumb: 'https://static.wikia.nocookie.net/simpsons/images/6/62/Elementary_School_Musical.png',
    embed: 'https://www.youtube.com/embed/w7ZnuVWRGFg',
    desc: 'Lady Gaga is predicted to perform at a major sporting event in a flashy, theatrical halftime show, this came true at the 2017 Super Bowl, featuring Gaga\'s now-legendary performance.',
  },
  {
    num: 10,
    title: 'Bart\'s Dog Gets an F',
    season: 'Season 2, Episode 16 (1991)',
    thumb: 'https://static.wikia.nocookie.net/simpsons/images/4/4f/Bart%27s_Dog_Gets_an_F.png',
    embed: 'https://www.youtube.com/embed/2RqmuLWKmYc',
    desc: 'Santa\'s Little Helper is sent to obedience school, presaging the massive modern industry of premium pet training, pet psychology and luxury pet services that exploded in the 2010s.',
  },
];

export default function Episodes() {
  return (
    <div className="page-wrapper episodes-page">
      <h1 className="section-title">Prediction Episodes</h1>
      <p className="episodes-intro">
        Ten episodes that hid clues about the future inside their storylines.
        Watch each one, then head to Predictions to see how they came true.
      </p>
      <div className="ep-list">
        {EPISODES.map((ep, i) => (
          <div className="ep-row fade-up" key={ep.num} style={{ animationDelay: `${i * 0.07}s` }}>
            <div className="ep-num-badge">{String(ep.num).padStart(2, '0')}</div>
            <div className="ep-content">
              <div className="ep-header">
                <div>
                  <h3 className="ep-title">{ep.title}</h3>
                  <span className="ep-season">{ep.season}</span>
                </div>
              </div>
              <div className="ep-video-wrap">
                <iframe
                  src={ep.embed}
                  title={ep.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="ep-desc">{ep.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}