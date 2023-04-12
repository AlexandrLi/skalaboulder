import { type AppType } from "next/dist/shared/lib/utils";
import Link from "next/link";
import { Source_Sans_Pro } from "next/font/google";

import "~/styles/globals.css";
import { Logo } from "~/components/Logo";
import { LogoIcon } from "~/components/icons/LogoIcon";
import {
  ChatBubbleBottomCenterTextIcon,
  MapPinIcon,
  PhoneArrowUpRightIcon,
} from "@heroicons/react/24/solid";
import Head from "next/head";

const sourceSansPro = Source_Sans_Pro({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "600"],
  variable: "--font-source-sans-pro",
});

export const PHONE_NUMBER = 77077380907;

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${sourceSansPro.style.fontFamily};
        }
      `}</style>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <div className="grid min-h-screen grid-rows-main-layout text-sm md:container md:m-auto">
        <header className="flex h-16 items-center gap-3 bg-white px-3">
          <Link href="/" className="flex items-center gap-2">
            <LogoIcon className="hidden h-10 md:block" />
            <Logo className="h-6" />
          </Link>
          <div className="ml-auto flex gap-4">
            <a href={`https://wa.me/${PHONE_NUMBER}`}>
              <ChatBubbleBottomCenterTextIcon className="h-6 w-6 text-slate-700" />
            </a>
            <a href="https://go.2gis.com/11jym">
              <MapPinIcon className="h-6 w-6 text-slate-700" />
            </a>
            <PhoneArrowUpRightIcon className="h-6 w-6 text-slate-700" />
          </div>
        </header>
        <Component {...pageProps} />
        <footer className="mx-3 rounded-t-md bg-secondary p-2 text-center text-sm text-white">
          Skalaboulder © {new Date().getFullYear()}
        </footer>
      </div>
    </>
  );
};

export default MyApp;
