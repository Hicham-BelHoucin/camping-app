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
import { twMerge } from "tailwind-merge";
import Input from "./../input";
import Button from "./../button";

const Links = [
    { title: "Home", href: "#" },
    { title: "About", href: "#about" },
    { title: "Campground", href: "#booking" },
    { title: "Contact", href: "#contact" },
];

export default function Footer() {
    return (
        <section className="bg-[#345E40] w-full flex items-center justify-center flex-col" id="contact">
            <div className="m-auto relative container flex items-center gap-8 justify-center w-full h-full p-4 md:p-20">
                <div className="m-auto relative flex-col md:flex-row container flex items-center gap-8 justify-center w-full h-full">
                    <div className="text-white flex flex-col gap-4 items-center w-full">
                        <div className="w-full text-xl md:text-5xl ">
                            SUBSCRIBE TO OUR NEWSLETTER
                        </div>
                        <div className="w-full flex relative before:absolute before:w-full before:h-[1px] before:bottom-0 before:left-0 before:bg-white before:content-['']">
                            <Input
                                className={twMerge(
                                    "w-full",
                                    "rounded-none bg-transparent text-white border-none"
                                )}
                                placeholder="Enter Your Email Address"
                            />
                            <Button className="bg-white text-black md:px-8 py-2 rounded-md">
                                Subscribe
                            </Button>
                            <Button className="bg-white text-black md:px-8 py-2 rounded-md">
                                <ArrowRight />
                            </Button>
                        </div>
                        <div className="w-full">Copyright Hicham Bel houcin</div>
                    </div>
                    <div className="flex flex-col w-full">
                        <div className="w-full">
                            <h1 className=" font-bold text-lg text-white">Sitemap</h1>
                            <div className="flex md:space-x-4">
                                {Links.map((link) => (
                                    <a
                                        key={link.title}
                                        href={link.href}
                                        className={twMerge(
                                            `text-white px-3 py-2 rounded-md text-sm font-medium`
                                        )}
                                    >
                                        {link.title}
                                    </a>
                                ))}
                            </div>
                            <div>
                                <h1 className=" font-bold text-lg text-white">Contact</h1>
                                <div className="flex flex-col">
                                    <a
                                        href={""}
                                        className={twMerge(
                                            `text-white px-3 py-2 rounded-md text-sm font-medium`
                                        )}
                                    >
                                        hicham-belhoucin.ma
                                    </a>
                                    <a
                                        href={""}
                                        className={twMerge(
                                            `text-white px-3 py-2 rounded-md text-sm font-medium`
                                        )}
                                    >
                                        belhoucin.hicham@gmail.com
                                    </a>
                                    <div className="flex gap-4 text-white px-3">
                                        <a href="https://instagram.com/hicham_belhoucin">
                                            <Instagram size={24} />
                                        </a>
                                        <a href="https://linkedin.com/in/hicham-bel-houcin">
                                            <Linkedin size={24} />
                                        </a>
                                        <a href="https://twitter.com/HichamBelhoucin">
                                            <Twitter size={24} />
                                        </a>
                                        <a href="https://github.com/Hicham-BelHoucin/">
                                            <Github size={24} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
