"use client";
import { CTA_TEXT, HERO_SUBTITLE, HERO_TITLE } from "@/content";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useUncoverPreloader } from "./hooks/UseUncoverPreloader";

function Hero() {
  const [isLoaded, setIsLoaded] = useUncoverPreloader();

  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      <Image
        src={"/icons/globe.svg"}
        alt="globe"
        width={20}
        height={20}
        className="w-[150vw] max-w-none -top-16 left-1/2 -translate-x-1/2 absolute md:hidden contain-layout"
      />
      <Image
        src={"/worldMap.svg"}
        alt="World Map"
        className="hidden md:block absolute top-5 w-[1920px] max-w-none left-1/2 -translate-x-1/2"
        width={1920}
        height={952}
        onLoadingComplete={() => setIsLoaded(true)}
        priority
      />
      <div className="pl-4 pr-6 mx-auto w-full max-w-container relative my-[96px]">
        {/* CARD */}
        <div className="rounded-3xl pl-11 pr-10 pt-20 pb-24 backdrop-blur-xl bg-m-white/30 border border-m-turquoise/30 max-w-[540px] flex flex-col items-start">
          <div className="rounded flex items-center gap-2 bg-white px-[14px] py-[9px] hover:opacity-75 opacity-50 text-m-turquoise mb-2">
            <Image
              src="/icons/tablerGlobeTurq.svg"
              alt="globe icon"
              width={20}
              height={20}
            />
            <span className="font-semibold text-sm lg:text-base">
              Worldwide
            </span>
          </div>
          <h1
            className="font-bold text-4xl md:text-[52px] leading-none text-m-blue"
            id="hero-title"
          >
            {HERO_TITLE}
          </h1>
          <p className="my-8 text-base md:text-xl tracking-wide text-m-turquoise">
            {HERO_SUBTITLE}
          </p>
          <Link
            href={{ pathname: "/", query: { hash: "contact-us" } }}
            className="text-base md:text-2xl tracking-tight border border-m-turquoise rounded-lg capitalize px-8 py-3 text-m-turquoise flex gap-3 group/btn"
          >
            <span>{CTA_TEXT}</span>
            <Image
              alt="arrow"
              src="/icons/arrowMd.svg"
              width={38}
              height={15}
              className="group-hover/btn:translate-x-2 transition-transform"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
