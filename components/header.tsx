import { Bars3Icon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <div className="fixed z-10  p-3 w-full justify-center bg-lime-300 rounded-b-3xl">
      <div className="flex  w-full justify-between  items-center px-5 2xl:px-0  text-2xl text-emerald-900 font-semibold tracking-wide">
        <button className="flex hover:bg-lime-200 p-2 rounded-full transition-all duration-300">
          <Bars3Icon className="w-8 h-8 cursor-pointer "></Bars3Icon>
        </button>
        <h1 className="flex ml-3 w-full lg:w-auto cursor-pointer justify-center transition-all duration-300 ">
          <Logo></Logo>
        </h1>
        <div className="hidden lg:flex lg:w-full justify-center text-sm space-x-7 transition-all duration-300">
          <div className="flex w-3/5 pl-3  justify-around rounded-full bg-gray-50">
            <div className=" inset-y-0 start-0 flex items-center pointer-events-none">
              <svg
                className="w-4 h-4  text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="text"
              className="w-full text-sm mr-7 text-green-900 border-0 ring-0 focus:ring-0  "
              placeholder="Procura rosas, amarelas, phalaenopsys, aniversário..."
              required
            />
          </div>
        </div>
        <div className="flex justify-center items-center space-x-7">
          <h1 className="hidden lg:flex w-full text-xs cursor-pointer hover:underline hover:underline-offset-2 transition-all duration-300">
            Precisa de ajuda?
          </h1>
          <Link
            href="/"
            className="hover:bg-lime-200 p-2 rounded-full transition-all duration-300"
          >
            <ShoppingCartIcon className="w-8 h-8 cursor-pointer "></ShoppingCartIcon>
          </Link>
        </div>
      </div>
    </div>
  );
}
