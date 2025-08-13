import CoverImage from "./components/Cover_image";

export default function Home() {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 h-240 bg-[#EAEFEE] flex items-center justify-center">
        <h2 className="text-[174px] tracking-[-0.4rem] font-bold rotate-90 text-black flex flex-col items-center">
          <span className="translate-y-[-270px] translate-x-[-50px]">BEYOND</span> {/* Example: move up */}
          <span className="translate-y-[-370px] translate-x-[-140px]">STYLE</span> {/* Example: move down */}
        </h2>
      </div>
      <div className="w-1/2 h-full bg-white relative">
        <CoverImage /> {/* Image positions absolute right */}
      </div>
    </div>
  );
}