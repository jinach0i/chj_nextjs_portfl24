import { motion, useMotionValueEvent, useScroll } from "framer-motion"
import { useState } from "react"


export default function ScrollDown() {
    const [isHidden, setIsHidden] = useState(false);
    const { scrollY } = useScroll();
    useMotionValueEvent(scrollY, 'change', (y) => {
        if (y > 8400) {
            setIsHidden(true);
        } else {
            setIsHidden(false);
        }
    })
    return (
        <motion.div 
        className="animate-bounce fixed right-[5%] bottom-[5%] font-bold w-[14vw] h-[14vw] content-center text-center bg-white p-3 rounded-full" 
        style={{
            writingMode: "vertical-rl"
        }}
        animate={ isHidden ? "hidden" : "visible" }
        variants={{
            hidden: {
                opacity: 0
            },
            visible: {
                opacity: 1
            }
        }}
        > 
            <p>SCROLL DOWN</p>
        </motion.div>
    )
};
