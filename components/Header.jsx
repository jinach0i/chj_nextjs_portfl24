"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import logo from "../public/images/logo.png";
import { blur, opacity, translate, vh100 } from "./ani-variants";

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const menuCon = [
    {
      title: "entrance",
      src: "/entrance.png",
    },
    {
      title: "about",
      src: "/about.png",
    },
    {
      title: "projects",
      src: "/projects.png",
    },
    {
      title: "contact",
      src: "/contact.png",
    },
  ];

  return (
    <header className="animate-chBg h-44 w-full fixed top-0 left-0 z-20 duration-300">
      <div className="bg fixed top-0 left-0 w-full h-full opacity-0 hidden"></div>
      <div className="innerWrap absolute top-0 left-0 w-full">
        <div className="inner relative flex items-center justify-between px-32">
          <h1 className="logo h-44 content-center">
            <Link href="/" className="block">
              <Image
                className=""
                src={logo}
                width={100}
                height={50}
                alt="최혜진의 포트폴리오 로고"
              />
            </Link>
          </h1>
          <div className="utilBox flex">
            <div className="langBox content-center">
              <ul className="flex text-sm font-bold">
                <li className="mr-5">
                  <Link href="/">KOR</Link>
                </li>
                <li>
                  <Link href="/">ENG</Link>
                </li>
              </ul>
            </div>
            <div
              className="btnBox flex items-center gap-4 cursor-pointer group "
              onMouseDown={() => {
                setIsActive(!isActive);
              }}
            >
              <div className="flex flex-col ml-7 z-10 ">
                <motion.span
                  className="mb-2 w-8 h-1 bg-black duration-75"
                  animate={
                    isActive
                      ? {
                          rotate: 45,
                          translateY: "12px",
                          backgroundColor: "white",
                          height: "1px",
                        }
                      : "open"
                  }
                ></motion.span>
                <motion.span
                  className="mb-2 w-8 h-1 bg-black"
                  variants={opacity}
                  animate={isActive ? "closed" : "open"}
                ></motion.span>
                <motion.span
                  className="w-8 h-1 bg-black"
                  animate={
                    isActive
                      ? {
                          rotate: -45,
                          translateY: "-10px",
                          backgroundColor: "white",
                          height: "1px",
                        }
                      : "open"
                  }
                ></motion.span>
              </div>
              <div className="burgerLabel flex relative">
                <motion.p
                  variants={opacity}
                  animate={isActive ? "closed" : "open"}
                >
                  MENU
                </motion.p>
                <motion.p
                  className="opacity-0 absolute"
                  variants={opacity}
                  animate={!isActive ? "closed" : "open"}
                >
                  CLOSE
                </motion.p>
              </div>
            </div>
          </div>
        </div>
        <AnimatePresence mode="wait">
          {isActive && <Nav menuCon={menuCon} />}
        </AnimatePresence>
      </div>
    </header>
  );
}

export const Nav = ({ menuCon }) => {
  const getChar = (word) => {
    let chars = [];
    word.split("").forEach((char, i) => {
      chars.push(
        <motion.span
          key={`char_${i}`}
          // custom arr 첫번째 값은 애니메이션 시작할 때 각개 적용될 값, 두번째 값은 애니메이션 마칠 때 각개 적용될 값:
          custom={[i * 0.02, (word.length - i) * 0.01]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          {char}
        </motion.span>
      );
    });
    return chars;
  };
  const [hoveredImgSrc, setHoveredImgSrc] = useState({ isActive: false, i: 0 });
  return (
    <motion.div
      className="gnbPC absolute top-0 w-full bg-yellow-400"
      variants={vh100}
      initial="initial"
      animate="on"
      exit="off"
    >
      <h2 className="blind overflow-hidden">메뉴</h2>
      <div className="content-center h-full">
        <div className="inner p-32">
          <div
            className="listBox w-full h-full text-6xl md:text-8xl  *:py-2vw 
            "
          >
            {menuCon.map((menu, i) => {
              const { title, src } = menu;
              return (
                <div
                  key={`li_${i}`}
                  onMouseOver={() => {
                    setHoveredImgSrc({ isActive: true, i });
                  }}
                  onMouseLeave={() => {
                    setHoveredImgSrc({ isActive: false, i });
                  }}
                  className="group flex justify-between capitalize border-b-transparent-white border-b-2 border-dashed last:border-none  hover:border-white cursor-pointer"
                >
                  <Link
                    href={title}
                    className="overflow-hidden block text-white group-hover:text-black before:absolute before:-right-6 before:w-4 before:h-4 before:border-x-green-500 duration-300 transition-opacity before:rounded-full before:bg-rose-500 before:opacity-0 group-hover:before:opacity-100 relative"
                  >
                    <motion.p
                      className="m-0 flex overflow-hidden pt-2.5 pr-8  "
                      variants={blur}
                      initial="initial"
                      animate={
                        hoveredImgSrc.isActive && hoveredImgSrc.i != i
                          ? "on"
                          : "off"
                      }
                    >
                      {getChar(title)}
                    </motion.p>
                  </Link>
                  <ImageBox menuCon={menuCon} hoveredImgSrc={hoveredImgSrc} title={title}/>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const ImageBox = ({menuCon,hoveredImgSrc,title}) => {
  return (
    <motion.div className="block w-24 h-20">
      <Image
                    className="object-cover text-sm"
                    src={menuCon[hoveredImgSrc.i].src}
                    width={50}
                    height={20}
                    alt={title + "이미지"}
                  />
    </motion.div>
  )
};

