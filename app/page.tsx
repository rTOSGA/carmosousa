import Banner from "../components/banner";
import Body from "../components/body";
import Carousel from "../components/carousel";

import Tags from "../components/tags";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      
      
      <Tags></Tags>
      {/* <hr className="flex my-3 border-gray-300 drop-shadow-2xl w-screen" /> */}
      <Carousel></Carousel> 

      <Carousel></Carousel>
    </div>
  );
}
