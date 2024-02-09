import Carousel from "../components/carousel";
import Footer from "../components/footer";
import Modal from "../components/modal";

import Tags from "../components/tags";
import VideoPlayer from "../components/videoplayer";

export default function Home() {
  return (
    <div className="flex flex-col w-full ">
      {/* <Tags></Tags> */}
      {/* <hr className="flex my-3 border-gray-300 drop-shadow-2xl w-screen" /> */}
      <h1 className="mt-32 px-4  sm:px-6  lg:px-8 text-2xl font-semibold text-green-900">Gerbera</h1>
      <Carousel></Carousel>
      
      {/* <Modal></Modal> */}
    </div>
  );
}
