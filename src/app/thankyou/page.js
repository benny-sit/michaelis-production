"use client";
import Footer from "@/components/ui/Footer";
import Nav from "@/components/ui/Nav";
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
        <div className="text-6xl text-m-blue text-center mt-20">
          Thank you! We will contact you soon!
        </div>
        <div className="mx-auto mt-10">
          <Image
            src={"/icons/mdi_film-open.svg"}
            alt="film Open"
            width={20}
            height={20}
            className="w-24 aspect-auto opacity-75"
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
