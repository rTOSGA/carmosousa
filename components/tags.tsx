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
    <div className="flex flex-wrap w-full justify-center p-7 pb-0 text-sm  text-white ">
      {data.map((i) => (
        <li
          className="bg-emerald-900 p-1 px-3 mr-3 mb-1 rounded-full hover:bg-emerald-700 transition-all duration-300 cursor-pointer"
          key={i.name}
        >
          {i.name}
        </li>
      ))}
    </div>
  );
}
