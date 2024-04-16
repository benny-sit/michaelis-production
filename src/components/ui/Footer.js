import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { SOCIAL_LINKS } from "@/content";
import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-m-lightBlue text-m-white py-5">
      <div className=" mx-auto max-w-container px-4 mt-10 mb-5">
        <div className="flex md:flex-row flex-col md:items-end gap-4">
          <Link href="/">
            <Logo />
          </Link>
          <p className="text-m-white/50">2023 © All rights reserved</p>
          <div className="ml-auto flex gap-4 items-center self-end mt-7 md:mt-0">
            {SOCIAL_LINKS.map((l) => (
              <a key={l.imgUrl} href={l.url} className="active:brightness-90">
                <Image alt={l.alt} src={l.imgUrl} width={24} height={24} />
              </a>
            ))}
          </div>
        </div>
        <div className="h-[6px] w-full rounded-full bg-m-turquoise/50 mt-10"></div>
        <div className="w-full h-3"></div>
        <Link
          href={{ pathname: "/impressum" }}
          className={`relative  text-xl before:bottom-0 before:h-px before:w-5 before:bg-m-turquoise before:absolute before:transition-transform origin-left before:scale-0 hover:before:animate-scale-x`}
        >
          Impressum
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
