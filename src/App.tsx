import { twMerge } from "tailwind-merge";
import Button from "./components/button";
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
import { ReactNode } from "react";
import Input from "./components/input";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Home from "./sections/home";
import About from "./sections/about";
import Activities from "./sections/activity";
import Bonfire from "./sections/bonefire";
import Booking from "./sections/booking";
import News from "./sections/news";
import Gallery from "./sections/gallery";

const Links = [
  { title: "Home", href: "#" },
  { title: "About", href: "#about" },
  { title: "Campground", href: "#tech-stack" },
  { title: "Contact", href: "#contact" },
];

export default function App() {
  return (
    <div className="w-screen overflow-auto scrollbar-hide bg-hero-pattern2">
      <Home />
      <About />
      <Activities />
      <Bonfire />
      <Booking />
      <News />
      <Gallery />
      <Footer />
    </div >
  );
}
