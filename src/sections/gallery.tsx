export default function Gallery() {
    return (
        <section className="w-full flex items-center justify-center flex-col" id="gallery">
            <div className="m-auto relative container flex flex-wrap md:flex-nowrap items-start gap-8 justify-center w-full h-full pt-20">
                <div className="w-full h-full flex text-center px-4">
                    <div className="text-left">
                        <div className="font-bold text-black text-xl md:text-5xl">
                            Our Gallery
                        </div>
                        <div className="text-gray-600 max-w-md">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis odio voluptatum a facere debitis atque maxime ex! Quisquam delectus animi dolorum esse autem eos, architecto voluptatibus
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <img src="/karsten-winegeart-NVhD7aGh9gQ-unsplash 1.png" alt="" className="absolute -left-40 -bottom-8 hidden xl:block" width={250} />
                    <img src="/tents-with-wooden-chairs-pathway-front-them-glamping-nature-greenery-around 1.png" alt="" />
                </div>
            </div>
        </section>
    )
}