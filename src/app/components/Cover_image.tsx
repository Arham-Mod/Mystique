import Image from 'next/image';

export default function CoverImage() {
  return (
    <div className="relative w-240 h-200 "> {/* Ensure height is set */}
      <Image
        src="/Home_cloth.jpeg"
        alt="Cover image for VISTRY"
        fill
        className="object-cover"
      />
    </div>
  );//major error in this
}