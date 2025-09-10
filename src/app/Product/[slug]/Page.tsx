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
        <div className="w-full h-75 m-5">
          <Card 
            slug={slug} 
            imgSrc={`/Card_clothes/sticker${slug === 'Cloth1' ? '' : slug.replace('Cloth', '')}.webp`}
            alt={`Product ${slug}`} 
            className="Sticker" 
          />
        </div>
          <div className=" flex-col w-full m-5 h-full">
            <div className="w-full h-32 bg-gray-400 rounded-full"></div>
            <br />
            <div className="flex flex-row ">
              <div className="bg-amber-300 w-1/2 h-30 mr-7 rounded-[22px]"></div>
              <br />
              <div className="bg-red-500 w-1/2 h-30 rounded-[22px]"></div>
            </div>
            
        </div>
        <div className="w-full h-150 bg-gray-400 m-5">
        </div>
      </div>
    </div>
  );
}
// to do- now devide the full page with the combination of flex and grid according to design