import { CalendarIcon, GlobeAltIcon, UserGroupIcon } from '@heroicons/react/outline';
import ImageComp from '@components/imageComp';

export default function EventPreview(props) {
  return (
    <a href={'/events/' + props.name}>
      <div className="max-w-md py-4 px-8 bg-gray-800 shadow-lg rounded-lg my-20 ">
        <div>
          <h2 className="text-gray-200 text-3xl font-semibold">
            <CalendarIcon className=" w-8 h-8 inline-block" /> {props.name}
          </h2>
          <p className="mt-2 text-gray-100">{props.shortDesc}</p>
          {props.imageSrc ? (
            <ImageComp src={'/images/events/' + props.imageSrc} alt="Event Image"></ImageComp>
          ) : (
            ''
          )}

          {props.reallife ? (
            <div>
              <UserGroupIcon className="w-5 h-5 inline-block" />
              <span className="ml-2">Real life Event</span>
            </div>
          ) : (
            <div>
              <GlobeAltIcon className="w-5 h-5 inline-block" />
              <span className="ml-2">Online Event</span>
            </div>
          )}
        </div>
        <div className="flex justify-end mt-4">
          <a href="" className="text-xl font-medium text-gray-100">
            {props.author}
          </a>
        </div>
      </div>
    </a>
  );
}
