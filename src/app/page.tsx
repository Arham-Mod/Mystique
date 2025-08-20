import CoverImage from "./components/Cover_image";
import Card from "./components/Card";

export default function Home() {
  return (
    <div className="flex flex-col">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">{/* Top section with 1-2 column grid */}
        <div className="h-240 bg-[#EAEFEE] flex items-center justify-center">
          <h2 className="text-[174px] tracking-[-0.4rem] font-bold rotate-90 text-black flex flex-col items-center">
            <span className="translate-y-[-270px] translate-x-[-50px]">BEYOND</span>
            <span className="translate-y-[-370px] translate-x-[-140px]">STYLE</span>
          </h2>
          <h1 className="absolute bottom-40 font-medium text-[23px] left-6 ">Refined attire for the style pioneer. Your style<br /> visualized on you.</h1>
        </div>

        <div className="w-full h-full relative right-0">{/* left */}
          <CoverImage />
          <div className="h-10">
            <a href="#" className="text-white text-[174px]">discover</a>
            <button className="absolute bottom-9 left-9 bg-white text-black px-6 py-2">
              <a href="#" className="font-medium text-[30px] hover:text-gray-700">Discover</a>
            </button>
          </div>
        </div>
      </div>

      {/* Cards section */}
      <div className="flex flex-col w-full">
        {/* Heading Vistry */}
        <div className="w-full">
          <h1>
            <span className="V-font">V</span>
            <span className="ISTRY-font ml-10">ISTRY</span>
          </h1>
        </div>
        {/* Clothes cards in a 4-column grid */}
        <div className="grid grid-cols-4 gap-4 mt-4 px-5">
          <Card imgSrc="/Card_clothes/sticker2.webp" alt="Cloth 1" link="#" className={"Sticker2"} />
          <Card imgSrc="/Card_clothes/sticker3.webp" alt="Cloth 2" link="#" className={"Sticker3"} />
          <Card imgSrc="/Card_clothes/sticker4.webp" alt="Cloth 3" link="#" className={"Sticker4"}/>
          <Card imgSrc="/Card_clothes/sticker.webp" alt="Cloth 4" link="#" className={"Sticker"}/>
        </div>
      </div>
    </div>
  );
}