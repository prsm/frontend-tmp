import NavLink from '@components/navLink';
import Image from 'next/image';

export default function Nav() {
  return (
    <div className=" bg-gray-800 flex md:flex-row flex-col justify-center align-center p-4">
      <Image src="/logo_white.svg" alt="Logo" width="64" height="64" />
      <nav className="flex flex-row justify-between pt-6 bg-clip-text bg-gradient-to-r from-red-400 to-pink-400">
        <NavLink text="Home" href="/" />
        <NavLink text="Esport teams" href="/esport" />
        <NavLink text="Entry form" href="/entry-form" />
      </nav>
    </div>
  );
}
