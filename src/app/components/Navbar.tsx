export default function Navbar() {
  return (
    <nav className="relative px-4 py-4 border-b border-black-500">
      <div className="flex items-center">
        <div className="flex space-x-4">
          <a href="#" className="text-black font-medium text-[22px] hover:text-gray-700">Male</a>
          <a href="#" className="text-black font-medium text-[22px] hover:text-gray-700">Female</a>
          <a href="#" className="text-black font-medium text-[22px] hover:text-gray-700">Collections</a>
        </div>
      </div>
      <h1 className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-[60px] font-black tracking-[-0.4rem]">VISTRY</h1>
    </nav>
  );
}