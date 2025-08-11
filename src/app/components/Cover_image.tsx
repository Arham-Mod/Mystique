import Image from 'next/image';

export default function CoverImage() {
  return (
    <div className="absolute right-0 top-0 w-[200px] h-[200px]"> {/* Stick to right top; adjust size */}
      <Image
        src="/Home_cloth.jpeg"
        alt="Cover image for VISTRY"
        fill
        className="object-cover"
      />
    </div>
  );
}