const data = [
  { name: "Flores" },
  { name: "Ramos" },
  { name: "Plantas" },
  { name: "Rosas Vermelhas" },
  { name: "Tulipas Amarelas" },
];

export default function Tags() {
  return (
    <div className="flex flex-wrap w-full justify-center p-7 text-sm  text-white">
      {data.map((i) => (
        <span
          className="bg-emerald-700 p-1 px-3 mr-3 mb-1 rounded-full hover:bg-emerald-500 transition-all duration-300 cursor-pointer"
          key={i.name}
        >
          {i.name}
        </span>
      ))}
    </div>
  );
}
