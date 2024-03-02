import { useState } from "react";

import Link from "next/link";

import { useAccount } from "wagmi";
import Modal from "./Modal";

import Logo from "@/assets/Logo";
import Apple from "@/assets/icons/social-media/Apple";
import Google from "@/assets/icons/social-media/Google";
import Menu from "@/assets/icons/misc/Menu";
import ConnectButton from "../ConnectButton/Button";

const Sidebar = () => {
  const { isConnected } = useAccount();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        aria-label="menu-btn"
        type="button"
        className="block md:hidden"
      >
        <Menu className="h-6 w-6 text-primary-400" />
      </button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        showCloseButton={true}
      >
        <div className="grid place-content-center h-full gap-10">
          <Logo className="w-20 h-16 place-self-center" fill="white" />
          <div className="flex flex-col gap-y-8 text-center">
            <Link
              href="/invest"
              className="font-medium hidden font-inter text-lg text-white hover:text-primary-800"
            >
              Invest
            </Link>
            <Link
              href="/wallet"
              className="font-medium hidden font-inter text-lg text-white hover:text-primary-800"
            >
              Wallet
            </Link>
            <Link
              href="/kelp"
              className="font-medium hidden font-inter text-lg text-white hover:text-primary-800"
            >
              Kelp
            </Link>
          </div>
          <div className="inline-flex gap-x-3">
            <p className="font-medium text-white font-inter">Download App</p>
            <a
              aria-label="Kelp android app"
              target="_blank"
              rel="noopener"
              href="https://play.google.com/store/apps/details?id=com.app.kelpa"
              className="bg-white p-1.5 rounded-full"
            >
              <Google className="w-6 h-6" />
            </a>
            <a
              aria-label="Kelp iOS app"
              target="_blank"
              rel="noopener"
              href="https://apps.apple.com/us/app/kelp/id1632857274"
              className="bg-white p-1.5 rounded-full"
            >
              <Apple className="w-6 h-6 text-gray-600" />
            </a>
          </div>
          {
            isConnected && <ConnectButton />
          }
        </div>
      </Modal>
    </>
  );
};

export default Sidebar;
