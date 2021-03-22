import GradientBackground from '@components/gradientBackground';
import NavLink from '@components/navLink';
import Image from 'next/image';

export default function Nav() {
  return (
    <div className=" bg-gray-800 flex sm:flex-row flex-col justify-center align-center p-4">
      <div className="sm:mr-8 flex justify-center">
        <Image src="/logo_white.svg" alt="Logo" width="64" height="64" />
      </div>
      <GradientBackground>
        <nav className="flex flex-row justify-between pt-6">
          <NavLink text="Home" href="/" />
          <NavLink text="Esport teams" href="/esport" />
          <NavLink text="Entry form" href="/entry-form" />
        </nav>
      </GradientBackground>
    </div>
  );
}
