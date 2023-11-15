import Button from "../components/button";

export default function Bonfire() {
    return (
        <section className="relative w-full flex items-center justify-center flex-col" id="bonefire">
            <img src="/bonfire-icon.png" alt="logo" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center flex-col justify-center md:gap-8 w-full">
                <div className="font-bold text-white text-md w-full md:text-5xl text-center">
                    A Bonfire Is Basically Just A Nightclub In The Mountains
                </div>
                <Button variant="text">
                    Check Availability
                </Button>
            </div>
        </section>

    )
}