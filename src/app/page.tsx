import CoverImage from "./components/Cover_image";
export default function Home() {
  return (
    <div className="flex h-screen"> {/* Full height flex */}
      <div className="w-1/2 h-200 bg-[#EAEFEE]"></div> {/* Left gray */}
      <div className="w-1/2 bg-white relative"> {/* Right white with relative for absolute child */}
        <CoverImage /> {/* Image positions absolute right */}
      </div>
    </div>
  );
}
