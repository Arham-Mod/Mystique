export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4  border-b-2 border-[#C5C8C7] bg-white">
      <div className="flex items-center justify-between">
        <div className="flex space-x-15">
          <a href="#" className="text-black font-medium text-[22px] hover:text-gray-700">Male</a>
          <a href="#" className="text-black font-medium text-[22px] hover:text-gray-700">Female</a>
          <a href="#" className="text-black font-medium text-[22px] hover:text-gray-700">Collections</a>
        </div>
        <h1 className="text-[60px] font-black tracking-[-0.4rem] mx-auto -translate-x-47">VISTRY</h1>
      </div>
    </nav>
  );
}