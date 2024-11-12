import { delay } from "framer-motion";

const transition = { duration: 0.6, ease: [0.76, 0, 0.24, 1] }

// HEADER
// 햄버거버튼
export const opacity = {
    initial: {
        opacity: 0,
    },
    open: {
        opacity: 1,
        transition
    },
    closed: {
        opacity: 0,
        transition
    }
};
export const vh100 = {
    initial: {
        height: 0,
    },
    on: {
        height: "100vh",
        transition
    },
    off: {
        height: 0,
        transition
    }
};
export const translate = {
    initial: {
        y: "100%",
        opacity: 0,
    },
    enter: (i) => ({
        y: 0,
        opacity: 1,
        transition: {...transition, delay: i[0]}
    }),
    exit: (i) => ({
        y: "100%",
        opacity: 0,
        transition: {...transition, delay: i[1]}
    })
}

export const blur = {
    initial: {
        filter: "blur(0px)",
        opacity: 1
    },
    on: {
        filter: "blur(4px)",
        opacity: 0.6,
        transition: {duration: 0.3}
    },
    off: {
        filter: "blur(0px)",
        opacity: 1,
        transition: {duration: 0.3}

    }
}