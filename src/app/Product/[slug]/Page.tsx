import Card from "@/app/components/Card";

export default function Product() {
    return(
        <div className="flex h-screen">
            <div className="w-2/3  flex flex-row">
                <div className="w-full h-2/4 m-5 ">
                    <Card slug="Cloth" imgSrc="/Card_clothes/sticker.webp" alt="Cloth " className={"Sticker"} />
                </div>
                <div className="w-full h-2/4 bg-gray-300 m-5 ">Item 2</div>
                <div className="w-full h-4/5 bg-gray-400 m-5">Item 3</div>
            </div>
        </div>
    );
};
{/*figure out about the problem in app routing cause this page is not being displayed in the website */}