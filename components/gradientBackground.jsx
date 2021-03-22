export default function GradientBackground(properties) {
  const { children } = properties;
  return (
    <div className="bg-clip-text bg-gradient-to-r from-red-400 via-pink-400 to-blue-500">
      {children}
    </div>
  );
}
