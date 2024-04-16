"use client";
import Footer from "@/components/ui/Footer";
import Nav from "@/components/ui/Nav";
import {
  IMPRESSUM_ADRESS,
  IMPRESSUM_ADRRESS,
  IMPRESSUM_ADRRESS_TITLE,
  IMPRESSUM_BODY,
  IMPRESSUM_CONTACT_EMAIL,
  IMPRESSUM_CONTACT_PHONE,
  IMPRESSUM_CONTACT_TITLE,
  IMPRESSUM_TITLE,
} from "@/content";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const preloader = document.getElementById("preloader");

    preloader.style.opacity = 0;
    setTimeout(() => (preloader.style.display = "none"), 500);
  }, []);

  return (
    <>
      <main className="flex min-h-screen flex-col">
        <Nav />
        <section
          aria-labelledby="about-us-title"
          className=" flex flex-col w-full items-center font-bold px-2 overflow-hidden  text-m-white tracking-tight"
        >
          <div className="flex flex-col gap-9 max-w-[905px] w-full px-2 mb-10 items-center mt-7">
            <div className="relative w-full max-w-[650px] bg-m-blue px-7 pt-5 pb-6 rounded-2xl">
              <h3 className="text-[32px] font-bold leading-none mt-2 tracking-normal">
                {IMPRESSUM_TITLE}
              </h3>
              <span className="h-px w-full bg-white inline-block "></span>
              <p className="font-normal text-xl whitespace-pre-line">
                {IMPRESSUM_BODY}
              </p>

              <div className="rounded-md bg-m-lightBlue w-full p-3">
                <h4 className="text-xl">{IMPRESSUM_CONTACT_TITLE}</h4>
                <p className="flex items-center gap-3">
                  <Image
                    src={"/icons/phone.svg"}
                    alt="phone"
                    width={18}
                    height={18}
                    className=""
                  />
                  {IMPRESSUM_CONTACT_PHONE}
                </p>
                <p className="flex items-center gap-3">
                  <Image
                    src={"/icons/mail.svg"}
                    alt="globe"
                    width={20}
                    height={20}
                    className=""
                  />
                  {IMPRESSUM_CONTACT_EMAIL}
                </p>
              </div>

              <div className="rounded-md bg-m-lightBlue w-full p-3 mt-3">
                <Image
                  src={"/icons/carbon_location.svg"}
                  alt="phone"
                  width={32}
                  height={32}
                  className="opacity-50"
                />
                <h4 className="text-xl">{IMPRESSUM_ADRRESS_TITLE}</h4>
                <p className="whitespace-pre-line border-l-2 px-3 bg-white/5 rounded mt-1">
                  {IMPRESSUM_ADRRESS}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
