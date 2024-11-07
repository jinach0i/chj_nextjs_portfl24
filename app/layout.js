import localFont from "next/font/local";
import "./globals.css";

const nanumSquare = localFont({
  src: [
    {
      path: '../public/fonts/NANUMSQUAREB.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/NANUMSQUAREEB.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../public/fonts/NANUMSQUARER.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
});

export const metadata = {
  title: "최혜진 포트폴리오",
  description: "프론트엔드 포트폴리오",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={nanumSquare.className}
      >
        {children}
      </body>
    </html>
  );
}
