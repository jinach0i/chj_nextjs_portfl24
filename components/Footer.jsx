"use client";

import Lenis from "lenis";
import { useEffect } from "react";
import ScrollDown from "./scroll-down";
import Link from "next/link";

export default function Footer() {
  
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  
  return ( 
    <footer >
      <div
        className="relative h-[800px]"
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <div className="fixed bottom-0 h-[800px] w-full">
          <div className="bg-[rgba(115, 115, 115, 0.37)] pb-8 pt-32 px-32 h-full w-full flex flex-col justify-between">
            <div>
              <div className="flex shrink-0 gap-20">
                <div className="flex flex-col gap-2">
                  <Link href="/" scroll={true}></Link>
                  <Link href="/about" scroll={true}>
                    <h3 className="mb-2 uppercase text-[#ffffff80]">About</h3>
                  </Link>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="mb-2 uppercase text-[#ffffff80]">Projects</h3>
                  <Link href="https://jinach0i.github.io/CC_NHIS/">국민건강보험공단</Link>
                  <Link href="https://jinach0i.github.io/CC-SKChemicals/#">SK Chemicals</Link>
                  <Link href="">Paradise Hotel</Link>
                  <Link href="">Kylie Cosmetics</Link>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-end">
              <div className="max-md:text-7xl max-lg:text-[5.5rem] max-2xl:text-9xl
              leading-[1.2]
              mt-10 bg-[url('https://picsum.photos/1200/800?random=1')] bg-clip-text text-transparent">
                <p>최혜진의</p><p>포트폴리오</p>
              </div>
              <address>Copyright 2024 © 최혜진</address>
            </div>
          </div>
        </div>
      </div>
      <ScrollDown />
    </footer>
  );
}
