import EntryForm from './EntryForm';
import Form from './Form';

export default function Index() {
  return (
    <div>
      <h1 className="text-gray-100 font-bold text-3xl text-center pt-32">
        Join <span className="text-transparent text-4xl">PR1SM</span>
      </h1>

      <EntryForm />
    </div>
  );
}
