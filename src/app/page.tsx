import Card from "./components/Card";
import Link from 'next/link';
import Image from 'next/image';
export default function Home() {
  return (
    <div className="flex flex-col">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">{/* Top section with 1-2 column grid */}
        <div className="h-240 bg-[#EAEFEE] flex items-center justify-center">
          <h2 className="text-[174px] tracking-[-0.4rem] font-bold rotate-90 text-black flex flex-col items-center">
            <span className="translate-y-[-270px] translate-x-[-150px]">BEYOND</span>
            <span className="translate-y-[-370px] translate-x-[-240px]">STYLE</span>
          </h2>
          <h1 className="absolute bottom-17  font-medium text-[23px] left-6 ">Refined attire for the style pioneer. Your style<br /> visualized on you.</h1>
        </div>

        <div className="w-full h-full relative right-0">{/* left */}
          <img 
            src="/Cover.GIF"
            alt="Background animation" 
            className="w-full h-full object-cover"
            
          />
          <div className="h-10">
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
          <Card slug="Cloth1" imgSrc="/Card_clothes/sticker.webp" alt="Cloth 1"  className={"Sticker"}/>
          <Card slug="Cloth2" imgSrc="/Card_clothes/sticker2.webp" alt="Cloth 2"  className={"Sticker2"} />
          <Card slug="Cloth3" imgSrc="/Card_clothes/sticker3.webp" alt="Cloth 3"  className={"Sticker3"} />
          <Card slug="Cloth4" imgSrc="/Card_clothes/sticker4.webp" alt="Cloth 4"  className={"Sticker4"}/>
        </div>
      </div>
    </div>
  );
}