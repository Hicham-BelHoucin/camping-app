import { twMerge } from "tailwind-merge";
import Button from "../button";
import React from "react";
import { Menu, X } from "lucide-react";

const Links = [
    { title: "Home", href: "#" },
    { title: "About", href: "#about" },
    { title: "Campground", href: "#booking" },
    { title: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <div className="flex container items-center justify-between p-4">
            <img loading="lazy" src="/logo.png" alt="logo" width={100} />
            <div className="flex items-center justify-center gap-16">
                <div className="hidden sm:block">
                    <div className="flex space-x-4">
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
                </div>
                <Button variant="text" className="hidden sm:block"><a href="#booking">Book</a></Button>
                <Button
                    className="md:hidden text-white"
                    variant="text"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X /> : <Menu />}
                </Button>
            </div>
            {isMenuOpen && (

                <>
                    <div className="md:hidden block absolute right-0 top-0 bg-white w-full p-4">
                        <Button
                            className="absolute right-2 top-2 md:hidden !text-black"
                            variant="text"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X /> : <Menu />}

                        </Button>
                        <div className="flex flex-col">
                            {Links.map((link) => (
                                <a
                                    key={link.title}
                                    href={link.href}
                                    className={twMerge(
                                        `text-black px-3 py-2 rounded-md text-sm font-medium`
                                    )}
                                >
                                    {link.title}
                                </a>
                            ))}
                            <Button className="md:hidden block">Book</Button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}