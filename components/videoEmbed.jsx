// import GradientBackground from './gradientBackground';

export default function VideoEmbed(properties) {
  const { title, url } = properties;
  return (
    <div className="w-1/2">
      <div className="pt-1 bg-gray-700">
        <div className="font-bold text-lg text-white">
          <p>{title}</p>
        </div>
        <div className="relative">
          <iframe
            src={url}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-80"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
