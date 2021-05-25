import Image from 'next/image';

export default function FooterLink(properties) {
  const { src, name, link } = properties;
  return (
    <a href={link} target="_blank" rel="noreferrer" className="flex flex-row justify-start pt-2">
      <div className="bg-gray-300 rounded-full w-6 h-6 flex justify-center">
        <Image src={src} alt={name} width="14" height="14" />
      </div>
      <p className="text-gray-100 pl-2">{name}</p>
    </a>
  );
}
