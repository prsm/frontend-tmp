import data from 'pages/events/eventdata/data.json'
import EventPreview from '@components/eventPreview';

export default function Index() {
const events = data.event;
return (
      <div>
        {
          events.map((el, index )=> <EventPreview name={el.name} description={el.description} id={el.id} type={el.type}  key={index} />       )
        }
      </div>
  );
}
