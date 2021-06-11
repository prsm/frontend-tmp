import VideoEmbed from '@components/videoEmbed';
import { defaults } from 'autoprefixer';
import GradientBackground from '@components/gradientBackground';

export default function YoutubeEmbeds() {
  return (
    <div>
      <GradientBackground>
        <h1 className="text-gray-100 font-bold text-3xl text-center mt-5">
          Videos from our <span className="text-transparent text-4xl">Youtube</span>
        </h1>
      </GradientBackground>
      <div className="flex flex-row py-1 bg-gradient-to-r from-red-400 via-pink-400 to-blue-500 rounded mt-5 w-3/4 content-center mx-auto ">
        <VideoEmbed url="https://www.youtube.com/embed/wHw2NzauyuY" />
        <div className="w-5 bg-gray-700"></div>
        <VideoEmbed url="https://www.youtube.com/embed/2FNdp4lEtSw" />
      </div>
    </div>
  );
}
