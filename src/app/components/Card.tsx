// src/components/Card.tsx
import Link from 'next/link';
import Image from 'next/image';

interface CardProps {
  imgSrc: string;
  alt: string;
  slug: string; // Use slug for id or name
  className?: string;
}

const Card: React.FC<CardProps> = ({ imgSrc, alt, slug, className = '' }) => {
  return (
    <Link href={`/product/${slug}`}>
      <div className={`bg-[#EAEFEE] h-[150px] flex items-center justify-center cursor-pointer ${className}`}>
        <Image
          src={imgSrc}
          alt={alt}
          width={1000}
          height={150}
          className="object-contain"
        />
      </div>
    </Link>
  );
};

export default Card;