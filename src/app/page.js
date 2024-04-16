import dynamic from "next/dynamic";
import { Suspense } from "react";

export default function Home() {
  const LazyHome = dynamic(() => import("@/components/LazyHome"), {
    ssr: false,
    loading: () => <div>Loading...</div>,
  });
  return <LazyHome />;
}
