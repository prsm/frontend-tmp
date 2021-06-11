import ImageComp from '@components/imageComp';

export default function blogPreview(props) {
  return (
    <a href={'/blog/' + props.filename}>
      <div className="max-w-md py-4 px-8 bg-gray-800 shadow-lg rounded-lg my-20 ml-10 ">
        <div className="flex justify-center md:justify-end -mt-16">
          <img
            className="w-20 h-20 object-cover rounded-full border-2 2xl:border-pr1sm-heliotrope-700"
            src={props.imageSrc}
          ></img>
        </div>
        <div>
          <h2 className="text-gray-200 text-3xl font-semibold">{props.name.replace(/_/g, ' ')}</h2>
          <p className="mt-2 text-gray-100">{props.shortDesc}</p>
          {props.image ? (
            <ImageComp src={'/images/blog/' + props.image} alt="Image" width="300" height="300" />
          ) : (
            <div></div>
          )}
        </div>
        <div className="flex justify-end mt-4">
          <span href="" className="text-xl font-medium text-gray-100">
            {props.author}
          </span>
        </div>
      </div>
    </a>
  );
}
