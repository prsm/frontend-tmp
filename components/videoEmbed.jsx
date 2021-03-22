// import GradientBackground from './gradientBackground';

export default function VideoEmbed(properties) {
  const { title } = properties;
  return (
    <div className="py-1 bg-gradient-to-r from-red-400 via-pink-400 to-blue-500 rounded mt-4">
      <div className=" pt-2 bg-gray-700">
        <div className="px-2 font-extrabold text-xl text-white mb-1">
          <p>{title}</p>
        </div>
        <div>
          <iframe
            src="https://www.youtube-nocookie.com/embed/2FNdp4lEtSw"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
