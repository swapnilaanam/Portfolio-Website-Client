/* eslint-disable react/prop-types */
import { cn } from "../../../../lib/utils";

const AnimatedGradientText = ({
    children,
    className,
}) => {
    return (
        <div
            className={cn(
                "group relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-3xl text-3xl font-bold hover:cursor-pointer backdrop-blur-sm transition-shadow duration-500 ease-out [--bg-size:300%] dark:bg-black/40",
                className,
            )}
        >
            {/* <div
                className={`absolute inset-0 block h-full w-full animate-gradient hover:bg-gradient-to-r from-[white]/50 via-[#2F855A]/50 to-[white]/50 bg-[length:var(--bg-size)_100%] p-[1px] ![mask-composite:subtract] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]`}
            /> */}

            {children}
        </div>
    );

};

export default AnimatedGradientText;