// import GradientBackground from './gradientBackground';

export default function VideoEmbed(properties) {
  const { title, url } = properties;
  return (
    <div className="py-1 bg-gradient-to-r from-red-400 via-pink-400 to-blue-500 rounded max-w-xl mx-auto">
      <div className="pt-1 bg-gray-700">
        <div className="font-bold text-lg text-white">
          <p>{title}</p>
        </div>
        <div className="relative">
          <div className="aspect-ratio-16/9"></div>
          <iframe
            src={url}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute left-0 top-0 w-full h-full object-cover"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
