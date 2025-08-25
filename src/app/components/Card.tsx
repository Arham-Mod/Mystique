// src/components/Card.tsx
import Link from 'next/link';
import Image from 'next/image';

interface CardProps {
  imgSrc: string;
  alt: string;
  id: string;
  className?: string; // Optional prop
}

const Card: React.FC<CardProps> = ({ imgSrc, alt, id, className = '' }) => {
  return (
    <Link href={`/product/${id}`}>
      <div className={`bg-[#EAEFEE] h-[150px] flex items-center justify-center cursor-pointer ${className}`}>
        <Image
          src={imgSrc}
          width={1000}
          height={1000}
          alt={alt}
          className="object-contain"
        />
      </div>
    </Link>
  );
};

export default Card;