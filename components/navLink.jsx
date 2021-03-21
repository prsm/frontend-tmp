import Link from 'next/link';

export default function NavLink(properties) {
  const { href, text } = properties;
  return (
    <div>
      <Link href={href}>
        <p className="text-transparent text-lg font-bold cursor-pointer">{text}</p>
      </Link>
    </div>
  );
}
