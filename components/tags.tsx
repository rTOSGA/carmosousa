const data = [
  { name: "Ramos" },
  { name: "Plantas" },
  { name: "Rosas Vermelhas" },
  { name: "Tulipas Amarelas" },
  { name: "Decoração" },
  { name: "Jarra" },
  { name: "Novidades" },
];

export default function Tags() {
  return (
    <div className="flex flex-wrap w-full justify-center p-7 text-sm  text-white">
      {data.map((i) => (
        <span
          className="bg-indigo-700 p-1 px-3 mr-3 mb-1 rounded-full hover:bg-indigo-500 transition-all duration-300 cursor-pointer"
          key={i.name}
        >
          {i.name}
        </span>
      ))}
    </div>
  );
}
