export default function Emoji(properties) {
  const { emoji, a11yDescription } = properties;
  return (
    <span role="img" aria-label={a11yDescription}>
      {emoji}
    </span>
  );
}
