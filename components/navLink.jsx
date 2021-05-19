import HighlightedText from '@components/highlightedText';
import Link from 'next/link';

export default function NavLink(properties) {
  const { href, text } = properties;
  return (
    <div className="sm:mr-4">
      <Link href={href}>
        <HighlightedText className="text-lg font-bold cursor-pointer">{text}</HighlightedText>
      </Link>
    </div>
  );
}
