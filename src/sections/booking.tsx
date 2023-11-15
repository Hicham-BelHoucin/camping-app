import Button from "../components/button";

const Book = ({
    image,
    title,
}: {
    image: string;
    title: string;
}) => {
    return (
        <div className="flex flex-col items-start justify-center gap-2">
            <img src={image} alt="" />
            <div className="flex w-full items-center justify-between md:pr-1 text-sm">
                <div className=" font-bold md:text-xl text-[#345E40]">{title}</div>
                <div className="text-gray-600">1-6 person | 27m</div>
            </div>
            <div className="text-gray-600 text-sm w-full max-h-28 overflow-auto scrollbar-hide">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero excepturi molestias ab incidunt quidem repudiandae provident ad labore facere repellendus totam, earum cupiditate, quisquam aperiam quis explicabo corrupti, fugiat unde.
                Consectetur dolor veniam delectus placeat, mollitia voluptatem fuga unde libero culpa, voluptates, asperiores totam iure enim maiores error? Ex autem ab optio ipsum, temporibus eligendi quas. Ratione, consequuntur accusantium. Accusantium.
            </div>
            <Button className="!md:px-16 w-full md:auto">
                Check Availability
            </Button>
        </div>
    )
}

export default function Booking() {
    return (
        <section className="w-full flex items-center justify-center flex-col" id="booking">
            <div className="m-auto relative container flex flex-col items-center gap-8 justify-center w-full h-full pt-20">
                <div className="w-full max-w-lg text-center">
                    <div className="font-bold text-[#97A483] md:text-2xl">BOOKING</div>
                    <div className="font-bold text-black text-xl md:text-5xl">
                        Book your dream
                        vacation now
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2  place-items-center gap-8 px-8">
                    <Book image="tent-with-wooden-chairs-front-it-glamping-nature-greenery-around 1.png" title="Glamping Tent" />
                    <Book image="roberto-nickson-wRF6hCur9A8-unsplash 1.png" title="Small Cabin Wood" />
                    <Book image="glamping-tent-forest-luxury-tent-sea-view-nature-green-tourism 1.png" title="Bell Glamp One" />
                    <Book image="family-vacation-travel-rv-holiday-trip-motorhome 1.png" title="Caravan Soler Tent" />
                </div>
            </div>
        </section>
    )
}