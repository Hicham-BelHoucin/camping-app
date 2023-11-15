import Button from "../components/button";

const Article = ({
    image,
    title,
}: {
    image: string;
    title: string;
}) => {
    return (
        <div className="flex flex-col items-start justify-center gap-2">
            <img src={image} alt="" width={500} />
            <div className=" font-bold text-xl text-black">{title}</div>
            <Button variant="text" className=" !text-gray-500 !hover:bg-transparent !border-none">
                Read
            </Button>
        </div>
    )
}

export default function News() {


    return (
        <section className="w-full flex items-center justify-center flex-col" id="news">
            <div className="m-auto relative container flex flex-col items-center gap-8 justify-center w-full h-full pt-20">
                <div className="w-full flex items-center justify-between text-center px-2">
                    <div className="text-left">
                        <div className="font-bold text-[#97A483] md:text-2xl">News</div>
                        <div className="font-bold text-black text-xl md:text-5xl">
                            lastest articles
                        </div>
                    </div>
                    <Button className="!px-8">
                        Explore
                    </Button>
                </div>
                <div className="flex items-center justify-center gap-4 flex-wrap md:flex-nowrap">
                    <Article image="/josh-hild-8f_VQ3EFbTg-unsplash 1.png" title="Sed nec lorem scelerisque, viverra ex ut, interdum massa." />
                    <Article image="/madison-podjasek-fIIrP5HZWLs-unsplash 2.png" title="Morbi ligula massa, posuere in finibus ut, varius ac ligula. " />
                    <Article image="/tati-y-adri-96_yHob2TsQ-unsplash 1.png" title="Sed nec lorem scelerisque, viverra ex ut, interdum massa." />
                </div>
            </div>
        </section>
    )
}