import Image from 'next/image';
import HomeArticle from '@components/HomeArticle';
import Landing from '@components/Landing';
import { motion } from 'framer-motion';
import YoutubeEmbeds from '@components/YoutubeEmbeds';
import ScrollAnimation from 'react-animate-on-scroll';
import { SpringConfig } from 'react-spring';
export default function Index() {
  return (
    <div>
      <Landing />
      <HomeArticle />
      <YoutubeEmbeds />
    </div>
  );
}
