import { raleWayFont } from "@/utils/fonts";
import "./globals.css";
import { SEO_META_DATA } from "@/content";
import Logo from "@/components/ui/Logo";

export const metadata = SEO_META_DATA;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        id="body"
        className={`${raleWayFont.className} bg-m-white overflow-x-clip`}
      >
        {children}
        <div
          id="preloader"
          className="fixed inset-0 bg-m-lightBlue transition-opacity duration-500"
        >
          <div className="absolute top-1/2 left-1/2 text-m-white -translate-x-1/2 -translate-y-1/2">
            <Logo animated={true} />
          </div>
        </div>
      </body>
    </html>
  );
}
