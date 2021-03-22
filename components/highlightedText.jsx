export default function HighlightedText(properties) {
  const { children } = properties;
  return <span className=" font-bold text-transparent">{children}</span>;
}
