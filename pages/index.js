import Emoji from '@components/emoji';
import Footer from '@components/footer';
import GradientBackground from '@components/gradientBackground';
import HighlightedText from '@components/highlightedText';
import Nav from '@components/nav';
import VideoEmbed from '@components/videoEmbed';
import Head from 'next/head';

export default function Index() {
  return (
    <div>
      <Head>
        <title>PR1SM</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Nav />
      <main className="p-4 pt-6 sm:p-10 sm:py-12 md:px-32 md:py-10 bg-gray-700">
        <GradientBackground className="bg-clip-text bg-gradient-to-r from-red-400 to-pink-400">
          <h1 className="text-gray-100 font-extrabold text-3xl ">
            We are <span className="text-transparent text-4xl">PR1SM</span>
          </h1>
          <h2 className="text-transparent font-bold text-xl pt-4">What we do</h2>
          <p className="text-gray-100">
            We play lot&apos;s of different games from mainstream games like{' '}
            <HighlightedText>CSGO</HighlightedText>, <HighlightedText>Call of Duty</HighlightedText>{' '}
            and <HighlightedText>League of Legends</HighlightedText> to old classics like{' '}
            <HighlightedText>Age of Empires 2</HighlightedText>. But don&apos;t worry if these
            aren&apos;t for you we have a wide variety of new and old games.
            <p className="text-gray-100">
              Our main language is <Emoji emoji="🇨🇭" a11yDescription="switzerland flag" />
              Swiss-German, however most of us speak{' '}
              <Emoji emoji="🇬🇧" a11yDescription="united kingdom flag" />
              English so feel welcome to join us whatever you feel comfortable speaking.
            </p>
            <p className="text-gray-100">
              We host lot&apos;s of online and real-life events. There are weekly and bi-weekly
              events that are popular. We also host spontaneous events in new game-modes or new
              games. If you want to know more about upcoming events check our discord server. All
              events will appear in our <span className=" font-bold text-transparent">#events</span>{' '}
              channel
            </p>
            <p className="text-gray-100">
              Most of our communication is done over discord,{' '}
              <span className="text-transparent">
                after you accept our rules you will have access to the whole server
              </span>
              , to get started head over to the <span className="text-transparent">#roles</span>{' '}
              channel. Here you can assign yourself game-roles depending on you interests. After
              this text-channels will appear for the roles you have assigned yourself. We also have
              channels for non-gaming topics, like general, tech, memes, anime and many more.
            </p>
            <p className="text-gray-100">
              Dynamic voice channels are now available, where you can hang out with your friends.
              When you join a voice channel a new one will be created there will always be one empty
              however feel free to connect to one and chat with us.
            </p>
            <p className="text-gray-100"></p>
          </p>
          <h2 className="text-transparent font-bold text-xl pt-4">LAN-Partys</h2>
          <p className="text-gray-100">We visit LAN-Partys all over switzerland.</p>
          <h2 className="text-transparent font-bold text-xl pt-4">Socials</h2>
          <p className="text-gray-100 mb-4 sm:mb-8 md:mb-16">
            We are on Instagram, Twitter, Facebook and YouTube. Check them out via the links in the
            footer.
          </p>
          <VideoEmbed
            title="ISLE OF LAN 2020"
            url="https://www.youtube-nocookie.com/embed/2FNdp4lEtSw"
          />
        </GradientBackground>
      </main>
      <Footer />
    </div>
  );
}
