import Card from "@/app/components/Card";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export default function Product({ params }: ProductPageProps) {
  const { slug } = params;
  
  return(
    <div className="flex h-screen">
      <div className="w-2/3 flex flex-row">
        <div className="w-full h-2/5 m-5">
          <Card 
            slug={slug} 
            imgSrc={`/Card_clothes/sticker${slug === 'Cloth1' ? '' : slug.replace('Cloth', '')}.webp`}
            alt={`Product ${slug}`} 
            className="Sticker" 
          />
        </div>
        <div className="w-full h-2/5 bg-gray-300 m-5">
        </div>
        <div className="w-full h-4/5 bg-gray-400 m-5">
        </div>
      </div>
    </div>
  );
}
// to do- now devide the full page with the combination of flex and grid according to design