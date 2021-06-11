import GradientBackground from '@components/gradientBackground';
import ScrollAnimation from 'react-animate-on-scroll';

export default function TextSection({ children }) {
  return (
    <ScrollAnimation animateIn="fadeIn">
      <div className="bg-gray-800 rounded-2xl p-10">
        <GradientBackground className="bg-clip-text bg-gradient-to-r from-red-400 to-pink-400">
          {children}
        </GradientBackground>
      </div>
    </ScrollAnimation>
  );
}
