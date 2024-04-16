import { JOURNALISTS_INFO, JOURNALISTS_TITLE } from "@/content";
import React from "react";
import Image from "next/image";

function OurJournalists() {
  return (
    <section
      aria-labelledby=""
      className="relative overflow-hidden font-bold text-m-blue pb-24"
      id="our-journalists"
    >
      <Image
        src={"/icons/globe.svg"}
        alt="globe"
        width={20}
        height={20}
        className="w-full hidden lg:block max-w-container -top-16 left-1/2 -translate-x-1/2 absolute"
      />
      <h3 className="text-4xl leading-normal md:text-5xl   text-center mx-auto relative my-24 ">
        {JOURNALISTS_TITLE}
        <span className="absolute h-[2px] w-[217px] bg-m-turquoise left-1/2 -translate-x-1/2 -bottom-2"></span>
      </h3>
      <div className="flex flex-wrap gap-12 relative max-w-container mx-auto items-center justify-center">
        {JOURNALISTS_INFO.map((journalist) => (
          <div
            key={journalist.imgUrl}
            className="bg-white border-2 border-m-turquoise px-10 py-5 rounded-3xl"
          >
            <Image
              src={journalist.imgUrl}
              alt="Journalist Image"
              width={376}
              height={510}
              className="rounded-2xl"
            />
            <h4 className="text-2xl mt-1 uppercase">{journalist.name}</h4>
            <p className="font-normal">{journalist.professions}</p>
            <p className="my-2 max-w-[340px]">{journalist.about}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurJournalists;
