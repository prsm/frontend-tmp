import VideoEmbed from '@components/videoEmbed';
import ImageComp from '@components/imageComp';
import Image from 'next/image';
import HomeArticle from '@components/HomeArticle';
import { ArrowDownIcon } from '@heroicons/react/outline';

export default function Index() {
  return (
    <div>
      <div className="h-screen bg-main-image pt-56">
        <div className="glass w-1/2 bg-white backdrop-filter backdrop-blur-md bg-opacity-25 border border-gray-200 border-opacity-50 text-center h-96 rounded-3xl m-auto content-center ">
          <h1 className="text-gray-900 font-bold text-7xl text-center pt-10">
            Welcome to <br />
            <span className=" text-9xl">PR1SM</span>
          </h1>
          <article className="text-4xl">
            PR1SM is a gaming community located in Basel, Switzerland
          </article>
        </div>
        <div className="absolute z-10 bottom-0 w-full">
          <ArrowDownIcon className="h-10 w-10 mx-auto animate-bounce opacity-60" />
        </div>
      </div>

      <div className="w-1/2 mx-auto bg">
        <HomeArticle className="w-1/2 fixed bottom-0 " />
      </div>

      <div className="w-1/3 mx-auto content-center bg-gray-600 rounded-3xl">
        <Image src="/images/Discord-Logo+Wordmark-Color.png" width="800" height="272" />
      </div>
      <h1 className="text-gray-100 font-bold text-3xl text-center mt-5">
        Videos from our <span className="text-transparent text-4xl">Youtube</span>
      </h1>
      <div className="flex flex-row py-1 bg-gradient-to-r from-red-400 via-pink-400 to-blue-500 rounded mt-5 w-3/4 content-center mx-auto">
        <VideoEmbed url="https://www.youtube.com/embed/wHw2NzauyuY" />
        <div className="w-5 bg-gray-700"></div>
        <VideoEmbed url="https://www.youtube.com/embed/2FNdp4lEtSw" />
      </div>
      <style jsx>{`
        .glass {
          backdrop-filter: blur(20px);
        }
      `}</style>
    </div>
  );
}
