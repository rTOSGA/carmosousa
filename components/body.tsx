import prisma from "../lib/prisma";

async function getProducts() {
  const products = await prisma.product.findMany();
  return products;
}

export default async function Body() {
  const data = await getProducts();
  console.log(data);
  return (
    <div className="m-7">
      <ul>
         {data.map((i) => (
          <li key={i.id}>{i.name + " " +i.price}</li>
        ))} 
      </ul>
    </div>
  );
}
