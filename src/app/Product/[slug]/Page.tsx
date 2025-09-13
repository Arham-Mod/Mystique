"use client";

import { useRef } from "react";

import Card from "@/app/components/Card";


interface ProductPageProps {
  params: {
    slug: string;
  };
}

export default function Product({ params }: ProductPageProps) {
  
  const { slug } = params;
  
  const fileInputRef = useRef<HTMLInputElement | null>(null);;
  
  const handleButtonClick = () => {
    fileInputRef.current?.click(); 
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // the 0 means that if someone selects multuple files only the forst selected file will be inputted//
    if (file) {
      console.log("Selected file:", file);//logs the statement that the <file> is selected
    }
  };


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
            <button
              onClick={handleButtonClick}
              className="w-full h-32 bg-[#D9D9D9] rounded-[30px] mb-6 text-9xl">
                +
            </button> {/* add the insert box here*/}
            <div className="flex flex-row ">
              <div className="bg-[#D9D9D9] w-1/2 h-30 mr-7 rounded-[30px]"></div>
              <br />
              <div className="bg-[#D9D9D9] w-1/2 h-30 rounded-[30px]"></div>
            </div>
            
        </div>
        <div className="w-full h-150 bg-[#D9D9D9] rounded-[30px] m-5">
        </div>
      </div>

      <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileChange}
      />
    </div>
  );
}
// to do- now devide the full page with the combination of flex and grid according to design