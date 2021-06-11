import HighlightedText from '@components/highlightedText';
import Emoji from '@components/emoji';
import ImageComp from '@components/imageComp';
import TextSection from '@components/textSection';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HomeArticle() {
  return (
    <div className="grid grid-cols-2 gap-10 p-20">
      <TextSection>
        <h2 className="text-transparent font-bold text-3xl text-center">What we do</h2>
        <div className="text-gray-100 text-lg mt-1">
          We play lot&apos;s of different games from mainstream games like{' '}
          <HighlightedText>CSGO</HighlightedText>, <HighlightedText>Call of Duty</HighlightedText>{' '}
          and <HighlightedText>League of Legends</HighlightedText> to old classics like{' '}
          <HighlightedText>Age of Empires 2</HighlightedText>. But don&apos;t worry if these
          aren&apos;t for you we have a wide variety of new and old games.
          <p className="text-gray-100 mt-5">
            Our main language is <Emoji emoji="🇨🇭" a11yDescription="switzerland flag" />
            Swiss-German, however most of us speak{' '}
            <Emoji emoji="🇬🇧" a11yDescription="united kingdom flag" />
            English so feel welcome to join us whatever you feel comfortable speaking.
          </p>
        </div>
      </TextSection>
      <div></div>
      <div></div>
      <TextSection>
        <h2 className="text-transparent font-bold text-3xl text-center">LAN-Partys</h2>
        <p className="text-gray-100 text-lg">We visit LAN-Partys all over switzerland.</p>
      </TextSection>
      <TextSection>
        <h2 className="text-transparent font-bold text-3xl text-center">Socials</h2>
        <p className="text-gray-100  text-lg">
          We are on Instagram, Twitter, Facebook and YouTube. Check them out via the links in the
          footer.
        </p>
      </TextSection>
      <div></div>
      <div></div>
      <TextSection>
        <h3 className="text-3xl font-bold text-transparent text-center">Join our Discord</h3>
        <div className="w-1/2 mx-auto content-center rounded-3xl">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
            <a href="https://discord.pr1sm.gg" target="_blank">
              <Image src="/images/Discord-Logo+Wordmark-Color.png" width="800" height="272" />
            </a>
          </motion.div>
        </div>
      </TextSection>
    </div>
  );
}
