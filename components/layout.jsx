import CustomHead from '@components/customHead';
import Footer from '@components/footer';
import Nav from '@components/nav';
import GradientBackground from '@components/gradientBackground';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen">
      <CustomHead />
      <Nav />
      <main className="bg-gray-700 text-gray-100 ">
        <GradientBackground className="bg-clip-text bg-gradient-to-r from-red-400 to-pink-400">
          {children}
        </GradientBackground>
      </main>
      <Footer />
    </div>
  );
}
