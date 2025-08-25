// src/components/Card.tsx
import Link from 'next/link';
import Image from 'next/image';

interface CardProps {
  imgSrc: string;
  alt: string;
  id: string;
  className?: string; // Optional prop
}

const Card = ({ imgSrc, alt, id, className }: CardProps) => {
  return (
    <Link href={`/product/${id}`}>
      <div className={`bg-[#EAEFEE] h-[150px] flex items-center justify-center cursor-pointer ${className}`}>
        <Image
          src={imgSrc}
          alt={alt}
          width={150}
          height={150}
          className="object-contain"
        />
      </div>
    </Link>
  );
};

export default Card;