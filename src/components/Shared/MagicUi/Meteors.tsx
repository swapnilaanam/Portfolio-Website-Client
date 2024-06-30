import clsx from "clsx";
import React, {useEffect, useState } from "react";

interface MeteorsProps {
  number?: number;
}
export const Meteors = ({ number = 20 }: MeteorsProps) => {
  const [meteorStyles, setMeteorStyles] = useState<Array<React.CSSProperties>>(
    [],
  );

  useEffect(() => {
    const styles = [...new Array(number)].map(() => ({
      top: -5,
      left: Math.floor(Math.random() * window.innerWidth) + "px",
      animationDelay: Math.random() * 1 + 0.2 + "s",
      animationDuration: Math.floor(Math.random() * 8 + 2) + "s",
    }));
    setMeteorStyles(styles);
  }, [number]);

  return (
    <>
      {[...meteorStyles].map((style, idx) => (
        // Meteor Head
        <span
          key={idx}
          className={clsx(
            "pointer-events-none absolute left-1/2 top-1/2 h-[2px] w-[2px] rotate-[290deg] animate-meteor rounded-full bg-slate-200 shadow-[0_0_0_1px_#ffffff10]",
          )}
          style={style}
        >
        </span>
      ))}
    </>
  );
};

export default Meteors;