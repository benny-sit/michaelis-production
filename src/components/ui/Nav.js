"use client";
import Link from "next/link";
import Image from "next/image";
import Logo from "./Logo";
import { NAV_LINKS } from "@/content";
import { useSearchParams } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import useWindowSize from "../hooks/useWindowResize";

function Nav() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [renderSideNav, setRenderSideNav] = useState(false);
  const searchParams = useSearchParams();
  const hash = searchParams.get("hash") ?? "";
  const windowSize = useWindowSize();

  useEffect(() => {
    const element = document.getElementById(hash);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }, [hash]);

  useEffect(() => {
    if (isMobileNavOpen && windowSize.width < 768) {
      setRenderSideNav(true);
      return;
    } else if (windowSize.width >= 768) {
      return;
    }
    const mobileNavTimeout = setTimeout(() => {
      setRenderSideNav(false);
    }, 450);

    return () => {
      clearTimeout(mobileNavTimeout);
    };
  }, [isMobileNavOpen, windowSize.width]);

  useLayoutEffect(() => {
    if (windowSize.width >= 768) {
      setRenderSideNav(false);
      setIsMobileNavOpen(false);
    }
  }, [windowSize.width]);

  return (
    <header className="w-full bg-m-blue text-m-white relative">
      <div className="mx-auto max-w-container px-4 flex items-center h-[77px] lg:h-[89px] gap-3">
        <nav className="hidden text-[10px] lg:text-sm md:flex items-center gap-4 uppercase tracking-tight">
          {NAV_LINKS.map((l, idx) => (
            <Link
              key={l.text}
              href={{ pathname: l.pathname, query: { hash: l.hash } }}
              className={`relative before:bottom-0 before:h-px before:w-5 before:bg-m-turquoise before:absolute before:transition-transform origin-left ${
                hash === l.hash ? "before:animate-scale-x" : "before:scale-0"
              } `}
            >
              {l.text}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-2 ml-auto bg-[#5984A9] rounded px-[14px] py-[9px] hover:bg-m-lightBlue">
          <Image
            src="/icons/tablerGlobeTurq.svg"
            alt="globe icon"
            width={20}
            height={20}
          />
          <span className="font-semibold text-sm lg:text-base">Worldwide</span>
        </div>

        {/* MOBILE */}
        <button
          className="md:hidden aspect-square rounded active:bg-m-lightBlue h-10 grid place-items-center"
          onClick={() => setIsMobileNavOpen(true)}
        >
          <Image
            src="/icons/hamburger.svg"
            width={24}
            height={16}
            alt="mobile nav button"
          />
        </button>
        <Link
          href="/"
          className="md:absolute left-1/2 md:-translate-x-1/2 top-1/2 md:-translate-y-1/2"
        >
          <Logo />
        </Link>

        {renderSideNav && (
          <div
            className={`fixed z-[1000] bg-black/30 inset-0 backdrop-blur-md delay-300 transition-opacity ${
              (!isMobileNavOpen && "opacity-0 pointer-events-none") || ""
            }`}
          >
            <div
              className={`absolute top-0 bottom-0 w-[323px] bg-m-lightBlue flex flex-col p-6 ${
                (!isMobileNavOpen && "-translate-x-full") || ""
              } transition-transform duration-300`}
            >
              <div className="flex items-center justify-between mb-14">
                <Logo />
                <button
                  className="p-1 rounded active:bg-white/50"
                  onClick={() => setIsMobileNavOpen(false)}
                >
                  <Image
                    src="/icons/ph_x-bold.svg"
                    alt="close mobile navigation"
                    width={20}
                    height={20}
                  />
                </button>
              </div>

              <nav className="flex flex-col gap-6">
                {NAV_LINKS.map((l, idx) => (
                  <Link
                    key={l.text}
                    href={{ pathname: l.pathname, query: { hash: l.hash } }}
                    className={`relative border-b w-fit ${
                      hash === l.hash
                        ? "border-b-m-turquoise"
                        : "border-b-transparent"
                    } `}
                  >
                    {l.text}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Nav;
