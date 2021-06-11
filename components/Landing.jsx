import { ArrowDownIcon } from '@heroicons/react/outline';
import TextSection from '@components/textSection';
import GradientBackground from '@components/gradientBackground';

export default function Landing() {
  return (
    <div className="h-screen bg-main-image pt-56">
      <div className="glass w-1/2 bg-white backdrop-filter backdrop-blur-lg bg-opacity-40 border border-gray-200 border-opacity-50 text-center h-96 rounded-3xl m-auto content-center ">
        <h1 className="text-gray-900 font-bold text-7xl text-center pt-10">
          Welcome to <br />
          <GradientBackground className="bg-clip-text bg-gradient-to-r from-red-400 to-pink-400">
            <span className="text-transparent text-9xl">PR1SM</span>
          </GradientBackground>
        </h1>
        <article className="text-4xl">
          PR1SM is a gaming community located in Basel, Switzerland
        </article>
      </div>
      <div className="absolute z-10 bottom-0 w-full">
        <ArrowDownIcon className="h-10 w-10 mx-auto animate-bounce opacity-60" />
      </div>
    </div>
  );
}
