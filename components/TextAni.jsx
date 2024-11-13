import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function TextAni({ paragraph }) {
  const refCon = useRef(null);
  const { scrollYProgress } = useScroll({
    target: refCon,
    offset: ["start 0.9", "start 0.25"],
  });
  const words = (paragraph || "").split(" ");
  return (
    <div className="px-32">
      <p className="text-5xl p-10 flex flex-wrap justify-center" ref={refCon}>
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          return (
            <Word key={i} range={[start, end]} progress={scrollYProgress}>
              {word}
            </Word>
          );
        })}
      </p>
    </div>
  );
}

const Word = ({ children, range, progress }) => {
  const characters = children.split("");
  const amount = range[1]-range[0];
  const step = amount / children.length;

  return (
    <span className="mt-3 mr-3 relative">
      {
        characters.map((character, i) => {
          const start = range[0] + (step * i);
          const end = range[0] + (step * (i + 1));
          
          return <Character key={i} range={[start, end]} progress={progress}>{character}</Character>
        })
      }
    </span>
  );
};

const Character = ({children, range, progress}) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="mt-3 mr-2 relative font-bold">
      <span className="absolute opacity-20"></span>
      <motion.span style={{opacity}}>{children}</motion.span>
    </span>
    )
}