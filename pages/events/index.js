import fs from 'fs';
import EventPreview from 'components/eventPreview';
import matter from 'gray-matter';

export async function getStaticProps() {
  const fileNames = fs.readdirSync('resources/content/events');
  var filemetadata = [];
  for (const index in fileNames) {
    const content = await import(`../../resources/content/events/${fileNames[index]}`);
    const data = matter(content.default);
    data.data.filename = fileNames[index].slice(0, -3);
    filemetadata.push(data.data);
  }

  return {
    props: {
      arr: filemetadata
    }
  };
}

export default function Index(props) {
  return (
    <div className="pt-32 mx-auto text-center content-center">
      <h1 className="text-gray-100 font-bold text-3xl ">
        Events at <span className="text-transparent text-4xl">PR1SM</span>
      </h1>
      <article className="text-lg">
        PR1SM attends and hosts a variety of events throughout the year. Here are some of the most
        important ones. If your looking to join smaller online events visit our Discord.
      </article>
      <div className="grid grid-cols-3 pl-32 pr-32">
        {props.arr.map(function (event, index) {
          console.log(event);
          return (
            <EventPreview
              key={index}
              name={event.title}
              imageSrc={event.image}
              shortDesc={event.descriptions}
              reallife={event.reallife}
            />
          );
        })}
      </div>
    </div>
  );
}
