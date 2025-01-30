"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { menuItems } from "@/shared/constants";
import { IconKey } from "@/shared/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { JSX, useState } from "react";
import { FundIcon, CreateIcon, DaoIcon, StatisticsIcon, ChevronRigthIcon, ChevronLeftIcon, ConnectIcon } from "./icons";
import { unityFlowLogo } from "@/assets";
import { useMainContext } from "@/context/main-context";
import { useContractsContext } from "@/context/contracts-context";

const iconComponents: Record<IconKey, () => JSX.Element> = {
    funds: FundIcon,
    create: CreateIcon,
    dao: DaoIcon,
    statistics: StatisticsIcon,
};

export default function Navigation() {
  const { isMenuOpen, toggleMenu } = useMainContext();
  const { loadingWallet, connectWallet } = useContractsContext();

  const router = useRouter();
  const pathname = usePathname();

  // console.log(pathname)

  return (
    <header className={`h-screen ${isMenuOpen ? "w-[255px] px-8" : "w-[112px] px-5"} py-5 flex flex-col items-start justify-between gap-16 inset-y-0 sticky bg-green-300 bg-opacity-85 shadow-md transition-all duration-300`}>
      <div
        className="w-full flex justify-center items-center gap-1 md:gap-3 cursor-pointer"
        onClick={() => router.replace("/")}
      >
        <Image
          src={unityFlowLogo}
          alt="logo"
          width={100}
          height={100}
          className={`rounded-xl ${isMenuOpen ? "size-7" : "size-10"} md:size-12`}
        />
        {isMenuOpen && <h1 className="text-2xl font-bold">UnityFlow</h1>}
      </div>

      <nav className="flex w-full h-full flex-col items-start justify-start gap-2 rounded-xl">
        {menuItems.map((menuItem) => {
          const Icon = iconComponents[menuItem.icon];
          const isActive = pathname === menuItem.link;
          return (
            <Link
              href={menuItem.link}
              key={menuItem.name}
              className={`
                ${isActive && "bg-gray-50 bg-opacity-50"}
                ${isMenuOpen ? "justify-start" : "justify-center"}
                  w-full flex items-center gap-3 hover:bg-gray-50 hover:scale-[1.02] rounded-xl px-3 py-2
              `}
            >
              <Icon />
              {isMenuOpen && <p className="text-base font-bold">{menuItem.name}</p>}
            </Link>
          );
        })}
      </nav>

      <div className="w-full flex flex-col items-center">
        <button
          className="mb-5 px-4 py-2 text-white  bg-gray-800 hover:bg-gray-500 rounded-xl"
          onClick={async () => await connectWallet()}
        >
          {isMenuOpen ? "Connect Wallet" : <ConnectIcon />}
        </button>
        <button
          className="text-gray-600 hover:text-gray-800"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <ChevronLeftIcon /> : <ChevronRigthIcon />}
        </button>
      </div>
    </header>
  );
}