import { CalendarIcon, TrashIcon } from "@heroicons/react/24/outline";

export default function PostalDate() {
  return (
    <div className="flex flex-col w-full justify-center max-w-7xl  mt-12">
        <h1 className="text-3xl font-semibold text-emerald-900">
          Todos os ramos da tua florista online
        </h1>
    <div className="flex w-full items-center justify-center max-w-7xl h-24 mt-5 bg-purple-700 rounded-xl  space-x-5">
      <h1 className="text-white text-sm font-semibold">
        Para onde e quando queres?
      </h1>
      <input
        type="text"
        name="price"
        id="price"
        className="block w-1/3 h-12 p-3 rounded-lg font-semibold outline-0 text-sm"
        placeholder="Código postal"
      />
      <CalendarIcon className="h-8 w-8 text-lime-300 cursor-pointer"></CalendarIcon>
      <input
        type="text"
        name="price"
        id="price"
        className="block w-1/5 h-12  p-3 rounded-lg font-semibold outline-0 text-sm"
        placeholder="Data"
      >
        
      </input>
      <button className=" p-3 bg-lime-300 text-emerald-900 font-medium tracking-tight rounded-full hover:bg-lime-200 transition-all duration-300">
        Verificar disponibilidade
      </button>
      <TrashIcon className=" h-8 w-8 text-lime-300 cursor-pointer"></TrashIcon>
    </div>
    </div>
  );
}
