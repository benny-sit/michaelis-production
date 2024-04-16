import {
  INTERVIEWS_TITLE,
  INTERVIEW_SUBTITLE_FOUR,
  INTERVIEW_SUBTITLE_ONE,
  INTERVIEW_SUBTITLE_THREE,
  INTERVIEW_SUBTITLE_TWO,
  INTERVIEW_TEXT_FOUR,
  INTERVIEW_TEXT_ONE,
  INTERVIEW_TEXT_THREE,
  INTERVIEW_TEXT_TWO,
  INTERVIEW_TITLE_FOUR,
  INTERVIEW_TITLE_ONE,
  INTERVIEW_TITLE_THREE,
  INTERVIEW_TITLE_TWO,
  INTERVIEW_VIDEO_FOUR,
  INTERVIEW_VIDEO_ONE,
  INTERVIEW_VIDEO_THREE,
  INTERVIEW_VIDEO_TWO,
} from "@/content";
import React from "react";
import Image from "next/image";
import { interFont } from "@/utils/fonts";

function OurInterviews() {
  return (
    <section
      aria-labelledby="interview-title"
      className="bg-m-blue flex flex-col w-full items-center text-m-white font-bold  pb-10 overflow-hidden"
    >
      <div className="pt-5 pb-6 bg-m-lightBlue w-full mb-[160px] text-center">
        <h2
          className="text-3xl leading-normal md:text-[40px] relative"
          id="interview-title"
        >
          {INTERVIEWS_TITLE}
          <span className="absolute h-px w-[217px] bg-m-turquoise left-1/2 -translate-x-1/2 bottom-1"></span>
        </h2>
      </div>

      {/* ONE */}
      <div className="flex flex-col items-center max-w-full mb-[160px] px-2">
        <div className="flex flex-col items-center px-4 md:px-8 relative">
          <Image
            src={"/countries/UA.svg"}
            className="absolute top-14 -right-36 md:-right-64"
            alt="Ukraine"
            width={448}
            height={251}
          />
          <h3 className="tracking-wider capitalize text-3xl md:text-5xl flex items-baseline flex-col md:flex-row gap-1 md:gap-3 relative">
            <span className="border-b-2 border-b-m-turquoise uppercase text-[40px] md:text-[52px] leading-none inline-block">
              {INTERVIEW_TITLE_ONE}
            </span>{" "}
            <span className="opacity-50">{INTERVIEW_SUBTITLE_ONE}</span>
          </h3>
          <p className="mt-10 mb-11 text-xl max-w-[440px] leading-relaxed tracking-wider px-4 relative">
            {INTERVIEW_TEXT_ONE}
          </p>
          <div className="max-w-[576px] w-full bg-m-lightBlue h-6 rounded-t-2xl relative">
            <span
              className={`text-3xl ${interFont.className} md:hidden absolute leading-none -top-0 -translate-y-full text-white/20 left-3`}
            >
              01
            </span>
          </div>
        </div>

        <div className="relative">
          <span
            className={`${interFont.className} hidden md:inline absolute leading-none -top-0 -translate-y-full text-[112px] lg:text-[128px] text-white/20  lg:left-5`}
          >
            01
          </span>
          <iframe
            width="1280"
            height="720"
            src={INTERVIEW_VIDEO_ONE}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="max-w-container rounded-4xl w-[95vw] aspect-[9/16] sm:aspect-video object-cover"
          ></iframe>
        </div>
      </div>

      {/* TWO */}
      <div className="flex flex-col items-center max-w-full mb-[160px] px-2">
        <div className="flex flex-col items-center px-4 md:px-8 relative">
          <Image
            src={"/countries/UA.svg"}
            className="absolute top-14 -left-36 md:-left-64"
            alt="Ukraine"
            width={448}
            height={251}
          />
          <h3 className="tracking-wider capitalize text-3xl md:text-5xl flex items-baseline flex-col md:flex-row gap-1 md:gap-3 relative">
            <span className="border-b-2 border-b-m-turquoise uppercase text-[40px] md:text-[52px] leading-none inline-block">
              {INTERVIEW_TITLE_TWO}
            </span>{" "}
            <span className="opacity-50">{INTERVIEW_SUBTITLE_TWO}</span>
          </h3>
          <p className="mt-10 mb-11 text-xl max-w-[440px] leading-relaxed tracking-wider px-4 relative">
            {INTERVIEW_TEXT_TWO}
          </p>
          <div className="max-w-[576px] w-full bg-m-lightBlue h-6 rounded-t-2xl relative">
            <span
              className={`text-3xl ${interFont.className} md:hidden absolute leading-none -top-0 -translate-y-full text-white/20 left-3`}
            >
              02
            </span>
          </div>
        </div>

        <div className="relative">
          <span
            className={`${interFont.className} hidden md:inline absolute leading-none -top-0 -translate-y-full text-[112px] lg:text-[128px] text-white/20  lg:left-5`}
          >
            02
          </span>
          <iframe
            width="1280"
            height="720"
            src={INTERVIEW_VIDEO_TWO}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="max-w-container rounded-4xl w-[95vw] aspect-[9/16] sm:aspect-video object-cover"
          ></iframe>
        </div>
      </div>

      {/* THREE */}
      <div className="flex flex-col items-center max-w-full mb-[160px] px-2">
        <div className="flex flex-col items-center px-4 md:px-8 relative md:self-start">
          <Image
            src={"/countries/IL.svg"}
            className="absolute top-0 left-1/2 md:left-full"
            alt="Ukraine"
            width={162}
            height={530}
          />
          <h3 className="tracking-wider capitalize text-3xl md:text-5xl flex items-baseline flex-col md:flex-row gap-1 md:gap-3 relative">
            <span className="border-b-2 border-b-m-turquoise uppercase text-[40px] md:text-[52px] leading-none inline-block">
              {INTERVIEW_TITLE_THREE}
            </span>{" "}
            <span className="opacity-50">{INTERVIEW_SUBTITLE_THREE}</span>
          </h3>
          <p className="mt-10 mb-11 text-xl max-w-[440px] leading-relaxed tracking-wider px-4 relative">
            {INTERVIEW_TEXT_THREE}
          </p>
          <div className="max-w-[576px] w-full bg-m-lightBlue h-6 rounded-t-2xl relative">
            <span
              className={`text-3xl ${interFont.className} md:hidden absolute leading-none -top-0 -translate-y-full text-white/20 right-3`}
            >
              03
            </span>
          </div>
        </div>

        <div className="relative">
          <span
            className={`${interFont.className} hidden md:inline absolute leading-none -top-0 -translate-y-full text-[112px] lg:text-[128px] text-white/20 right-0  lg:right-5`}
          >
            03
          </span>
          <iframe
            width="1280"
            height="720"
            src={INTERVIEW_VIDEO_THREE}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="max-w-container rounded-4xl w-[95vw] aspect-[9/16] sm:aspect-video object-cover"
          ></iframe>
        </div>
      </div>

      {/* FOUR */}
      <div className="flex flex-col items-center max-w-full mb-[160px] px-2">
        <div className="flex flex-col items-center px-4 md:px-8 relative md:self-end">
          <Image
            src={"/countries/TW.svg"}
            className="absolute top-0 right-0 md:right-full"
            alt="Ukraine"
            width={234}
            height={542}
          />
          <h3 className="tracking-wider capitalize text-3xl md:text-5xl flex items-baseline flex-col md:flex-row gap-1 md:gap-3 relative">
            <span className="border-b-2 border-b-m-turquoise uppercase text-[40px] md:text-[52px] leading-none inline-block">
              {INTERVIEW_TITLE_FOUR}
            </span>{" "}
            <span className="opacity-50">{INTERVIEW_SUBTITLE_FOUR}</span>
          </h3>
          <p className="mt-10 mb-11 text-xl max-w-[440px] leading-relaxed tracking-wider px-4 relative">
            {INTERVIEW_TEXT_FOUR}
          </p>
          <div className="max-w-[576px] w-full bg-m-lightBlue h-6 rounded-t-2xl relative">
            <span
              className={`text-3xl ${interFont.className} md:hidden absolute leading-none -top-0 -translate-y-full text-white/20 left-3`}
            >
              04
            </span>
          </div>
        </div>

        <div className="relative">
          <span
            className={`${interFont.className} hidden md:inline absolute leading-none -top-0 -translate-y-full text-[112px] lg:text-[128px] text-white/20   lg:left-5`}
          >
            04
          </span>
          <iframe
            width="1280"
            height="720"
            src={INTERVIEW_VIDEO_FOUR}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="max-w-container rounded-4xl w-[95vw] aspect-[9/16] sm:aspect-video object-cover"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default OurInterviews;
