import { useState, useEffect } from "react";

import Link from "next/link";

import { useAccount } from "wagmi";

import Logo from "@/assets/Logo";
import Apple from "@/assets/icons/social-media/Apple";
import Google from "@/assets/icons/social-media/Google";
import Sidebar from "./Sidebar";
import ConnectButton from "./ConnectButton/Button";

const Header = () => {
  const { isConnected } = useAccount();
  const [scroll, setScroll] = useState(false);

  const changeScroll = () => {
    if (window.scrollY > 0) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeScroll);
    return () => {
      window.removeEventListener("scroll", changeScroll);
    };
  }, []);

  return (
    <header
      className={`w-full py-3 z-50 ${scroll ? "bg-white" : "bg-none"
        } fixed top-0 left-0 right-0`}
    >
      <nav className="flex items-center justify-between container mx-auto">
        <div className="inline-flex items-center gap-x-20">
          <Link href="/">
            <Logo
              className="w-12 h-10 md:w-14 md:h-12 lg:w-16 lg:h-14 2xl:w-20 2xl:h-16 3xl:h-20 3xl:w-20 4xl:w-24 4xl:h-24 text-primary-400"
              fill="currentColor"
            />
          </Link>
          <Link
            href="/invest"
            className="hidden font-medium font-inter text-lg text-black hover:text-primary-500"
          >
            Invest
          </Link>
          <Link
            href="/wallet"
            className="hidden font-medium font-inter text-lg text-black hover:text-primary-500"
          >
            Wallet
          </Link>
          <Link
            href="/kelp"
            className="hidden font-medium font-inter text-lg text-black hover:text-primary-500"
          >
            Kelp
          </Link>
        </div>
        <div className="md:inline-flex hidden gap-x-8">
          <div className="inline-flex gap-x-5 items-center">
            <p className="font-medium text-neutral-500 text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl font-inter">
              Download App
            </p>
            <a
              aria-label="Kelp android app"
              target="_blank"
              rel="noopener"
              href="https://play.google.com/store/apps/details?id=com.app.kelpa"
              className="cursor-pointer"
            >
              <Google className="w-6 h-6 3xl:w-8 3xl:h-8 4xl:w-10 4xl:h-10" />
            </a>
            <a
              aria-label="Kelp iOS app"
              href="https://apps.apple.com/us/app/kelp/id1632857274"
              target="_blank"
              rel="noopener"
              className="cursor-pointer"
            >
              <Apple className="w-6 h-6 text-gray-600  3xl:w-8 3xl:h-8 4xl:w-10 4xl:h-10" />
            </a>
          </div>
          {
            isConnected && <ConnectButton />
          }
        </div>
        <Sidebar />
      </nav>
    </header>
  );
};

export default Header;
