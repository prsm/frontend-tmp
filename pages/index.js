import VideoEmbed from '@components/videoEmbed';
import ImageComp from '@components/imageComp';
import HomeArticle from '@components/HomeArticle';

export default function Index() {
  return (
    <div className="">
      <h1 className="text-gray-100 font-bold text-3xl text-center">
        Welcome to <span className="text-transparent text-4xl">PR1SM</span>
      </h1>

      <HomeArticle className="w-1/2" />

      <h1 className="text-gray-100 font-bold text-3xl text-center">
        Join our <span className="text-transparent text-4xl">Discord</span>
      </h1>

      <div className="content-center mx-auto w-1/2 mt-5">
        <VideoEmbed
          url="https://discord.com/widget?id=274249720736514048&theme=dark"
          className="mx-auto content-center"
        />
      </div>

      <h1 className="text-gray-100 font-bold text-3xl text-center mt-5">
        Videos from our <span className="text-transparent text-4xl">Youtube</span>
      </h1>
      <div className="flex flex-row py-1 bg-gradient-to-r from-red-400 via-pink-400 to-blue-500 rounded mt-5 w-3/4 content-center mx-auto">
        <VideoEmbed url="https://www.youtube.com/embed/wHw2NzauyuY" />
        <div className="w-5 bg-gray-700"></div>
        <VideoEmbed url="https://www.youtube.com/embed/2FNdp4lEtSw" />
      </div>
    </div>
  );
}
