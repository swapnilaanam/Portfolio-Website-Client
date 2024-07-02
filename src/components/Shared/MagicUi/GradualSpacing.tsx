import React, { useRef } from "react";
import { cn } from "../../../../lib/utils";
import { AnimatePresence, Variants, motion, useInView } from "framer-motion";

interface GradualSpacingProps {
    text: string;
    duration?: number;
    delayMultiple?: number;
    framerProps?: Variants;
    className?: string;
}

export default function GradualSpacing({
    text,
    duration = 0.5,
    delayMultiple = 0.04,
    framerProps = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
    },
    className,
}: GradualSpacingProps) {

    const aboutRef = useRef(null);
    const inView = useInView(aboutRef);

    return (
        <div ref={aboutRef} className="flex justify-center space-x-1">
            <AnimatePresence>
                {inView &&
                    text.split("").map((char, i) => (
                        <motion.h1
                            key={i}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={framerProps}
                            transition={{ duration, delay: i * delayMultiple }}
                            className={cn("drop-shadow-sm ", className)}
                        >
                            {char === " " ? <span>&nbsp;</span> : char}
                        </motion.h1>
                    ))}
            </AnimatePresence>
        </div>
    );
}