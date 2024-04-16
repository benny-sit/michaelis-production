import {
  ABOUT_US_PART_1,
  ABOUT_US_PART_2,
  ABOUT_US_SUBTITLE_1,
  ABOUT_US_SUBTITLE_2,
  ABOUT_US_TITLE,
} from "@/content";
import Image from "next/image";
import React from "react";

function AboutUs() {
  return (
    <section
      aria-labelledby="about-us-title"
      className="bg-m-blue flex flex-col w-full items-center text-m-white font-bold px-2 overflow-hidden"
    >
      <div className="pt-5 pb-6 bg-m-lightBlue rounded-b-3xl w-full max-w-[820px] mb-24 text-center">
        <h2
          className="text-3xl leading-normal md:text-[40px] relative"
          id="about-us-title"
        >
          {ABOUT_US_TITLE}
          <span className="absolute h-px w-[217px] bg-m-turquoise left-1/2 -translate-x-1/2 bottom-1"></span>
        </h2>
      </div>

      <div className="flex flex-col gap-9 max-w-[905px] w-full px-2 mb-10">
        <div className="relative w-full max-w-[650px] bg-gradient-to-b from-m-lightBlue/50 to-m-lightBlue/0 px-7 pt-5 pb-3 rounded-2xl">
          <Image
            src="/icons/traingleFaded.svg"
            alt="decorative triangle"
            width={151}
            height={130}
            className="absolute hidden md:block -right-64 top-32"
          />
          <div className="absolute hidden md:block -right-96 aspect-square w-[113px] border-white/10 border-[20px] top-80"></div>
          <div className="absolute hidden md:block -right-36 aspect-square w-[79px] border-white/10 border-[15px] bottom-20 rounded-full"></div>
          <h3 className="text-[32px] font-bold leading-none mt-2">
            {ABOUT_US_SUBTITLE_1}
          </h3>
          <span className="h-px w-full bg-m-turquoise inline-block "></span>
          <p className="font-normal text-xl">{ABOUT_US_PART_1}</p>
        </div>

        <div className="relative w-full max-w-[650px] bg-gradient-to-b from-m-lightBlue/50 to-m-lightBlue/0 px-7 pt-5 pb-3 rounded-2xl self-end">
          <div className="absolute hidden md:block -left-56 aspect-square w-[123px] border-white/10 border-[18px] top-20 rotate-45"></div>
          <div className="absolute hidden md:block -left-40 aspect-square w-[113px] border-white/10 border-[18px] top-80 rounded-full"></div>
          <h3 className="text-[32px] font-bold leading-none mt-2">
            {ABOUT_US_SUBTITLE_2}
          </h3>
          <span className="h-px w-full bg-m-turquoise inline-block "></span>
          <p className="font-normal text-xl">{ABOUT_US_PART_2}</p>
        </div>
      </div>

      <div className="max-w-[760px] h-[125px] w-full px-2 relative flex flex-col items-center">
        <div className="absolute bottom-0 top-0 left-16 right-16  bg-m-lightBlue/10 rounded-t-2xl"></div>
        <div className="absolute bottom-0 left-8 right-8  h-[75px] bg-m-lightBlue/30 rounded-t-2xl"></div>
        <div className="absolute bottom-0 left-0 right-0  h-[25px] bg-m-lightBlue/70 rounded-t-2xl"></div>
      </div>
    </section>
  );
}

export default AboutUs;
