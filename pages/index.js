import VideoEmbed from '@components/videoEmbed';
import GradientBackground from '@components/gradientBackground';

export default function Index() {
  return (
    <div>
        <h1 className="text-gray-100 font-extrabold text-3xl text-center">
        Welcome to <span className="text-transparent text-4xl">PR1SM</span>
        </h1>
      <br/>
        <VideoEmbed
          title="ISLE OF LAN 2020"
          url="https://www.youtube-nocookie.com/embed/2FNdp4lEtSw"
        />

    </div>
  );
}
