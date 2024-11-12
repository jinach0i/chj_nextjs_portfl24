import localFont from "next/font/local";
import "./globals.css";
import "./index.css";

import Header from "@/components/Header";
import ScrollDown from "@/components/scroll-down";
import Loading from "./loading";
import { Suspense } from "react";



const nanumSquare = localFont({
  src: [
    {
      path: '../public/fonts/NanumSquareL.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/NanumSquareR.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/NanumSquareB.otf',
      weight: '700',
      style: 'normal',
    }
  ],
});

export const metadata = {
  title: "최혜진 포트폴리오",
  description: "프론트엔드 포트폴리오",
  icons: {
    icon: "/images/favicon.ico",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body
        className={nanumSquare.className}
      >
        <Header />
        <Suspense fallback={<Loading />}>{children}</Suspense>
        <ScrollDown />
      </body>
    </html>
  );
}
