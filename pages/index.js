import Footer from '@components/footer';
import Nav from '@components/Nav';
import Head from 'next/head';

export default function Index() {
  return (
    <div>
      <Head>
        <title>PR1SM</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Nav />
      <main className="p-4 pt-6 bg-gray-700">
        <div className="bg-clip-text bg-gradient-to-r from-red-400 to-pink-400">
          <h1 className="text-white font-extrabold text-2xl ">
            We are <span className="text-transparent text-3xl">PR1SM</span>
          </h1>
          <h2 className="text-transparent font-bold text-lg pt-4">What we do</h2>
          <p className="text-white">
            We play lot&apos;s of different games from mainstream games like{' '}
            <span className="font-bold text-transparent">CSGO</span>,{' '}
            <span className="font-bold text-transparent">Call of Duty</span> and{' '}
            <span className="font-bold text-transparent">League of Legends</span> to old classics
            like <span className=" font-bold text-transparent">Age of Empires 4</span>. But
            don&apos;t worry if these aren&apos;t for you we have a wide variety of new and old
            games.
            <p className="text-white">
              Our main language is{' '}
              <span role="img" aria-label="switzerland flag">
                🇨🇭
              </span>
              Swiss-German, however most of us speak{' '}
              <span role="img" aria-label="switzerland flag">
                🇬🇧
              </span>
              English so feel welcome to join us whatever you feel comfortable speaking.
            </p>
            <p className="text-white">
              We host lot&apos;s of online and real-life events. There are weekly and bi-weekly
              events that are popular. We also host spontaneous events in new game-modes or new
              games. If you want to know more about upcoming events check our discord server. All
              events will appear in our <span className=" font-bold text-transparent">#events</span>{' '}
              channel
            </p>
            <p className="text-white">
              Most of our communication is done over discord,{' '}
              <span className="text-transparent">
                after you accept our rules you will have access to the whole server
              </span>
              , to get started head over to the <span className="text-transparent">#roles</span>{' '}
              channel. Here you can assign yourself game-roles depending on you interests. After
              this text-channels will appear for the roles you have assigned yourself. We also have
              channels for non-gaming topics, like general, tech, memes, anime and many more.
            </p>
            <p className="text-white">
              Dynamic voice channels are now available, where you can hang out with your friends.
              When you join a voice channel a new one will be created there will always be one empty
              however feel free to connect to one and chat with us.
            </p>
            <p className="text-white"></p>
          </p>
          <h2 className="text-transparent font-bold text-lg pt-4">LAN-Partys</h2>
          <p className="text-white">We visit LAN-Partys all over switzerland.</p>
          <h2 className="text-transparent font-bold text-lg pt-4">Socials</h2>
          <p className="text-white">
            We are on Instagram, Twitter, Facebook and YouTube. Check them out via the links in the
            footer.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
