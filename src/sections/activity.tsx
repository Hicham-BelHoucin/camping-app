const Activity = ({ image, title }: { image: string; title: string }) => {
    return (
        <div>
            <img src={image} alt="" width={80} />
            <div className="font-bold text-xl">{title}</div>
            <p className="text-gray-600 max-w-sm text-sm md:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dignissimos
                cupiditate omnis corrupti. Laudantium voluptate quisquam tempore dolor

            </p>
        </div>
    );
};

export default function Activities() {
    return (
        <section id="activity">
            <div className="flex items-start justify-center gap-4 px-4 flex-wrap md:flex-nowrap">
                <div className="w-full flex flex-col gap-4 items-center justify-center pt-32">
                    <div className="w-full max-w-md text-left font-bold text-[#97A483] text-2xl ">
                        ACTIVITY
                    </div>
                    <div className="font-bold text-black text-4xl max-w-md">
                        Camp Will Be For You What You Want It To Be.
                    </div>
                    <img src="/activity.png" alt="" />
                </div>
                <div className="w-full grid grid-cols-2 grid-rows-4 place-items-center gap-2 pt-16">
                    <div className="row-span-1">
                        <Activity image="/hiking.png" title="Hiking" />
                    </div>
                    <div className="row-span-2">
                        <Activity image="/wildlife.png" title="Fishing" />
                    </div>
                    <div className="row-span-2">
                        <Activity image="/bonfire.png" title="Biking" />
                    </div>
                    <div className="row-span-1">
                        <Activity image="/canoeing.png" title="Swimming" />
                    </div>
                </div>
            </div>
        </section >
    )
}