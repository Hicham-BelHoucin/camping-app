const Campground = ({ image, title }: { image: string; title: string }) => {
    return (
        <div className="flex items-center justify-center flex-col text-center gap-4">
            <img className="rounded-md" src={image} alt="image" width={450} />
            <div className=" font-bold text-xl ">{title}</div>
            <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum enim
                dignissimos delectus beatae voluptatibus consectetur accusamus? Iure
                tenetur at id expedita nihil. Alias provident animi esse deserunt
                dolores, aspernatur facilis. Accusantium eveniet facilis praesentium
                enim ratione sequi error fugiat sint distinctio neque, exercitationem
                rem, obcaecati consequuntur totam voluptatum quidem nulla magnam
                laudantium quisquam. Corrupti, laboriosam deserunt ullam maxime numquam
                ex?
            </p>
        </div>
    );
};

export default function About() {
    return (
        <section className="w-full h-full flex items-center justify-center flex-col" id="about">
            <div className="m-auto relative container flex flex-col items-center gap-4 justify-center w-full h-full pt-20">
                <div className="w-full max-w-lg text-center">
                    <div className="font-bold text-[#97A483] md:text-2xl">About</div>
                    <div className="font-bold text-black text-xl md:text-5xl">
                        Welcome To Glamour Camping Ground
                    </div>
                </div>
                <div className="text-[#555555] w-full text-center text-xs p-2">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Repudiandae dolorem voluptatibus quia saepe earum! Commodi aliquid
                    obcaecati rem maiores mollitia culpa repellendus laudantium sunt,
                    pariatur nemo! Voluptas suscipit aperiam nesciunt. Ipsum est dolorem
                    aspernatur in nisi, quam eveniet quisquam tenetur molestiae
                    necessitatibus ad adipisci, illum tempore, reprehenderit voluptatum
                    iure. Laboriosam doloremque iusto eos dolore dicta expedita qui est
                    nisi iste? Pariatur odio quos, placeat ea distinctio nesciunt porro
                    error. Obcaecati, nulla deleniti, ab voluptate corrupti atque
                    reiciendis error minus, consectetur facilis beatae ipsam.
                    Distinctio, doloribus vel dolorum dolore eveniet excepturi.
                </div>

                <div className="flex items-center justify-around text-[#2D2D2D] w-full flex-wrap md:flex-nowrap">
                    <div className="flex items-center justify-center flex-col gap-2">
                        <img src="/van.png" alt="" />
                        <p className=" font-semibold">30 CAMPER SITES</p>
                    </div>
                    <div className="flex items-center justify-center flex-col gap-2">
                        <img src="/van-1.png" alt="" />
                        <p className=" font-semibold">25 CARAVAN SITES</p>
                    </div>
                    <div className="flex items-center justify-center flex-col gap-2">
                        <img src="/tant-1.png" alt="" />
                        <p className=" font-semibold">10 GLAMP SITES</p>
                    </div>
                    <div className="flex items-center justify-center flex-col gap-2">
                        <img src="/tant.png" alt="" />
                        <p className=" font-semibold">15 TENT SITES</p>
                    </div>
                    <div className="flex items-center justify-center flex-col gap-2">
                        <img src="/home.png" alt="" />
                        <p className=" font-semibold">10 CABIN HOUSES</p>
                    </div>
                </div>

                <div className="flex items-center justify-around text-[#2D2D2D] w-full gap-4 flex-wrap md:flex-nowrap">
                    <Campground
                        image="/view-tourist-tent-mountains-sunrise-sunset 1.png"
                        title="Camping area for tents"
                    />
                    <Campground
                        image="/beautiful-campsite-mountains-with-rv-wooden-bench 1.png"
                        title="Trailers and RV spots"
                    />
                    <Campground
                        image="/aldlix-li-jH2vyek3t8Q-unsplash 1.png"
                        title="Cabins and glamping"
                    />
                </div>
            </div>
        </section>
    )
}