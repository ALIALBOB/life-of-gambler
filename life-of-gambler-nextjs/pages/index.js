import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Life of Gambler</title>
        <link rel="icon" href="/assets/fav.png" />
      </Head>
      <main className="bat-cursor">
        {[
          { title: '💭 Dreaming of Pump', img: 'dream.png' },
          { title: '📉 Losing Again', img: 'loss.png' },
          { title: '🔁 Back For More', img: 'return.png' },
          { title: '🚽 Degen Moments', img: 'degen.png' },
          { title: '🌧️ Sad in the Park', img: 'park.png' }
        ].map((section, i) => (
          <section key={i} style={{
            height: '100vh',
            background: i % 2 === 0 ? '#1a1a1a' : '#2a2a2a',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '2rem'
          }}>
            <h1>{section.title}</h1>
            <img src={`/assets/${section.img}`} alt={section.title} style={{ maxWidth: '80%' }} />
          </section>
        ))}
        <footer style={{ padding: '2rem', textAlign: 'center' }}>
          <p>Made by true degens. Not financial advice.</p>
          <a href="https://x.com/meinymoo64258" target="_blank" style={{ color: '#00ffd5' }}>Follow on Twitter</a>
        </footer>
      </main>
      <style jsx global>{`
        .bat-cursor {
          cursor: url('/assets/bat.png'), auto;
        }
      `}</style>
    </>
  );
}