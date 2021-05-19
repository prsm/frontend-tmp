

export default function EventPreview({ name, id, description, type }){


  return(
    <div>
      <div className="mt-10 py-1 bg-gradient-to-r from-red-400 via-pink-400 to-blue-500 rounded max-w-xl mx-auto">
        <div className="pt-1 bg-gray-700">
          <div className="font-bold text-lg text-white">
            <p>{name}</p>
          </div>
          <div className="relative">
            <h1>{name}</h1>
            <p>{description}</p>
            <p>{id}</p>
            <p>{type}</p>
          </div>
        </div>
      </div>
    </div>
  );
}