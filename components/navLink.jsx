import HighlightedText from '@components/highlightedText';
import Link from 'next/link';

export default function NavLink(properties) {
  const { href, text } = properties;
  return (
    <div className="sm:mr-4">
      <Link href={href} passHref>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a>
          <HighlightedText className="text-lg font-bold cursor-pointer">{text}</HighlightedText>
        </a>
      </Link>
    </div>
  );
}
