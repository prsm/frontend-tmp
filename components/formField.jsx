export default function FormField({ type, id, placeholder, label }) {
  return (
    <div className="mb-4">
      <label className="block text-gray-200 text-sm font-bold mb-2" htmlFor="firstname">
        {label}
      </label>
      <input
        className="bg-gray-700 appearance-none border-b-2 shadow border-pr1sm-heliotrope-600 w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
        id={id}
        type={type}
        placeholder={placeholder}
      ></input>
    </div>
  );
}
