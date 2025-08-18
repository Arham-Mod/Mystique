import Link from "next/link";


const Card = ({ imgSrc, alt, link, className }) => {
  return (
    <Link href={link}>
      <div className="bg-[#EAEFEE] h-150 flex items-center justify-center cursor-pointer ">
        <picture>
          <source srcSet={imgSrc} type="image" />
          <img
            src={imgSrc}
            alt={alt}
            className={`${className}`}
          />
        </picture>
      </div>
    </Link>
  );
};

export default Card;