import { link } from "fs";
import prisma from "../lib/prisma";

async function getTags() {
  const tags = await prisma.tag.findMany();
  return tags;
}

export default async function Tags() {
  const data = await getTags();
  console.log(data);
  return (
    <div className="flex flex-wrap w-full justify-center p-7 pb-0 text-sm  text-white ">
      {data.map((i) => (
        <span
          className="bg-emerald-900 p-1 px-3 mr-3 mb-1 rounded-full hover:bg-emerald-700 transition-all duration-300 cursor-pointer"
          key={i.name}
        >
          {i.name}
        </span>
      ))}
    </div>
  );
}
