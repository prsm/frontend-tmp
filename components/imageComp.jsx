import Image from 'next/image';

export default function ImageComp(props) {
  return (
    <div className="py-1 rounded mx-auto w-1/2 mt-2 relative h-full w-full">
      <Image
        src={props.src}
        alt={props.alt}
        width={props.width}
        height={props.height}
        layout={props.width ? 'intrinsic' : 'fill'}
        objectFit={props.width ? '' : 'contain'}
      />
    </div>
  );
}
