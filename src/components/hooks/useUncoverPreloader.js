import { useEffect, useState } from "react";

export function useUncoverPreloader() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!isLoaded) return;
    const preloader = document.getElementById("preloader");
    preloader.style.opacity = 0;
    setTimeout(() => {
      preloader.style.display = "none";
    }, 500);
  }, [isLoaded]);

  return [isLoaded, setIsLoaded];
}
