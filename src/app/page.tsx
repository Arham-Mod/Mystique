import CoverImage from "./components/Cover_image";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <div className="w-full lg:w-1/2 h-1/2 lg:h-full bg-[#EAEFEE] flex items-center justify-center relative overflow-hidden">
        <h2 className="text-[120px] md:text-[150px] lg:text-[174px] xl:text-[200px] tracking-[-0.2rem] md:tracking-[-0.3rem] lg:tracking-[-0.4rem] font-bold rotate-90 text-black flex flex-col items-center whitespace-nowrap">
          <span className="translate-y-[-180px] md:translate-y-[-220px] lg:translate-y-[-270px] translate-x-[-30px] md:translate-x-[-40px] lg:translate-x-[-50px]">BEYOND</span>
          <span className="translate-y-[-240px] md:translate-y-[-300px] lg:translate-y-[-370px] translate-x-[-80px] md:translate-x-[-110px] lg:translate-x-[-140px]">STYLE</span>
        </h2>
      </div>
      <div className="w-full lg:w-1/2 h-1/2 lg:h-full bg-white relative">
        <CoverImage />
      </div>
    </div>
  );
}