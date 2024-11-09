import localFont from "next/font/local";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
