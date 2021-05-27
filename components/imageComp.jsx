import Image from 'next/image';

export default function ImageComp(props) {
  return (
    <div className="py-1 rounded mx-auto w-1/2 mt-4 relative h-96 ">
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
