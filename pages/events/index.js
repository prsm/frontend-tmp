import fs from 'fs';
import EventPreview from 'components/eventPreview';

export async function getStaticProps() {
  const fileNames = fs.readdirSync("resources/content/events");

  for (const index in fileNames) {
    fileNames[index] = fileNames[index].slice(0,-3);
  }

  return {
    props: {
      fileNames
    }
  }
}


export default function Index(props) {
  return (
    <div>
      {props.fileNames.map(function(name, index){
        return <EventPreview key={ index } name={ name } imageSrc="https://schooloflanguages.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq-300x300.jpg" shortDesc="This a description of a blog"/>;
      })}
    </div>
  );
}
