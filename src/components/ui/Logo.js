import React from "react";
import Image from "next/image";

function Logo({ animated = false }) {
  return (
    <div className="flex items-center gap-2">
      <Image
        src={(animated && "/michaLogoAnim3.svg") || "/michaLogo.svg"}
        priority
        width={76}
        height={46}
        alt="Michaelis Production Logo"
        className="max-w-[54px] lg:max-w-none"
      />
      <div
        className={`flex flex-col items-center uppercase font-semibold ${
          (animated && "animate-logoTitleIn") || ""
        }`}
      >
        <span className="tracking-[.3em] text-[20px] lg:text-[30px] leading-none">
          Michaelis
        </span>
        <span className="text-m-turquoise tracking-[.1em] text-[10px] lg:text-xs">
          Productions
        </span>
      </div>
    </div>
  );
}

export default Logo;
