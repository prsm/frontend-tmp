import GradientBackground from '@components/gradientBackground';
import NavLink from '@components/navLink';
import Image from 'next/image';

export default function Nav() {
  return (
    <div className="bg-gray-800 flex sm:flex-row flex-col justify-center align-center p-4 fixed top-0 w-full z-50 h-auto">
      <div className="sm:mr-8 flex justify-center">
        <Image src="/logo_white.svg" alt="Logo" width="64" height="64" />
      </div>
      <GradientBackground>
        <nav className="flex flex-row justify-between pt-6">
          <NavLink text="Home" href="/" />
          <NavLink text="Events" href="/events" />
          <NavLink text="Blog" href="/blog" />
          <NavLink text="Join PR1SM" href="/entry" />
        </nav>
      </GradientBackground>
    </div>
  );
}
