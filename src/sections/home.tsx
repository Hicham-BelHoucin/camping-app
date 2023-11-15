import {
    ArrowLeft,
    ArrowRight,
    Play,
    Calendar,
    MountainSnow,
    User,
    Instagram,
    Linkedin,
    Twitter,
    Github,
} from "lucide-react";
import Button from "../components/button";
import Navbar from "../components/navbar";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import Input from "../components/input";

const content = [
    {
        icon: <Calendar size={24} />,
        title: "Check In",
    },
    {
        icon: <Calendar size={24} />,
        title: "Check Out",
    },
    {
        icon: <User size={24} />,
        title: "Guests",
    },
    {
        icon: <MountainSnow size={24} />,
        title: "ACCOMMODATION",
    },
];

// give me ACCOMMODATION options 

const ACCOMMODATION_OPTIONS = [
    {
        label: "Tent",
        value: "Tent",
    },
    { //Trailers and RV spots
        label: "RV spots",
        value: "RV spots",
    },
    { //Trailers and RV spots
        label: "Trailers",
        value: "Trailers",
    },
];

const GUESTS_OPTIONS = [
    {
        label: "1 Adult",
        value: "1 Adult",
    },
    {
        label: "2 Adult",
        value: "2 Adult",
    },
    {
        label: "3 Adult",
        value: "3 Adult",
    },
];

const Reservation = ({ icon, title }: { icon: ReactNode; title: string }) => {
    return (
        <div
            className={twMerge(
                "flex flex-col items-center justify-center",
                !title.includes("Check") && "gap-3",
                "relative before:absolute before:w-full before:h-[1px] before:bottom-0 before:left-0 before:bg-black before:content-['']"
            )}
        >
            <div className="flex items-center font-bold px-2 text-[#345E40] gap-4 w-full">
                {icon}
                {title.toUpperCase()}
            </div>
            <Input
                className={twMerge(
                    "w-full",
                    "rounded-none bg-transparent text-black border-none"
                )}
                placeholder="Select Date"
                htmlType={title.includes("Check") ? "date" : "select"}
                type={title.includes("Check") ? "date" : "select"}
                onChange={(e) => {
                    console.log(e.target.value);
                }}
                options={title.includes("Check") ? undefined : title.includes("ACCOMMODATION") ? ACCOMMODATION_OPTIONS : GUESTS_OPTIONS}
                defaultValue={title.includes("check") ? "2023-11-23" : "1 Adult"}
                value={!title.includes("check") ? "2023-11-23" : "1 Adult"}
            />
        </div>
    );
};

export default function Home() {
    return (
        <section className="bg-hero-pattern w-screen h-screen bg-cover" id="home">
            <div className="m-auto relative container flex flex-col items-center md:items-start justify-center w-full h-full">
                <Navbar />
                <Button
                    variant="text"
                    className=" !rounded-full !p-4 absolute left-0 xl:-left-4 top-1/2 translate-y-1/2 hidden md:block"
                >
                    <ArrowLeft size={24} />
                </Button>
                <div className="flex flex-col items-center md:items-start justify-center h-full md:max-w-[450px] text-center md:text-left gap-2 md:ml-24">
                    <p className="md:text-xl text-white">Let’s Make S’more Memories</p>
                    <h1 className="text-xl md:text-5xl font-bold text-white">
                        Camp is more than just a word, it’s an experience!
                    </h1>
                    <div className="flex items-center justify-center gap-4 text-white mt-2">
                        <Button variant="text" className=" !rounded-full !p-4">
                            <Play size={24} />
                        </Button>
                        <div>Watch this video</div>
                    </div>
                </div>
                <Button
                    variant="text"
                    className=" !rounded-full !p-4 absolute right-2 xl:-right-4 top-1/2 translate-y-1/2 hidden md:block"
                >
                    <ArrowRight size={24} />
                </Button>
                <div className="bg-white absolute -bottom-16 left-1/2 transform -translate-x-1/2 h-32 w-[95%] rounded-sm md:flex items-center justify-around hidden z-10">
                    {content.map((item) => (
                        <Reservation {...item} />
                    ))}
                    <Button><a href="#booking">Book Now</a></Button>
                </div>
            </div>
        </section>
    )
}