import VideoEmbed from '@components/videoEmbed';
import GradientBackground from '@components/gradientBackground';

export default function Index() {
  return (
    <div>
        <h1 className="text-gray-100 font-bold text-3xl text-center">
        Welcome to <span className="text-transparent text-4xl">PR1SM</span>
        </h1>


      <VideoEmbed url="https://discord.com/widget?id=274249720736514048&theme=dark"></VideoEmbed>

      <VideoEmbed url="https://www.youtube.com/embed/wHw2NzauyuY" />

      <div className="py-1 bg-gradient-to-r from-red-400 via-pink-400 to-blue-500 rounded max-w-xl mx-auto">
      <a className="twitter-timeline" data-lang="en" data-dnt="true" data-height="1000"  data-theme="dark"
         href="https://twitter.com/pr1sm_gg?ref_src=twsrc%5Etfw">Tweets by TwitterDev</a>
      <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
      </div>

    </div>
  );
}
