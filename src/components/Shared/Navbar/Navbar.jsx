import { Link, useLocation } from "react-router-dom";
import { cn } from "../../../../lib/utils";
import AnimatedGradientText from "../MagicUi/AnimatedSkinnyText";

const Navbar = () => {
  const location = useLocation();

  console.log(location);

  const navLinks = <>
    <li>
      <Link to="/">
        <AnimatedGradientText
          className={cn(
            `inline animate-gradient text-xl font-bold bg-white hover:bg-gradient-to-r from-[#16A34A] via-[white] to-[#16A34A] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
          )}
        >
          Home
        </AnimatedGradientText>
      </Link>
    </li>
    <li>
      <a href="/#about">
        <AnimatedGradientText
          className={cn(
            `inline animate-gradient text-xl font-bold bg-white hover:bg-gradient-to-r from-[#16A34A] via-[white] to-[#16A34A] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
          )}
        >
          About Me
        </AnimatedGradientText>
      </a>
    </li>
    <li>
      <a href="/#skills">
        <AnimatedGradientText
          className={cn(
            `inline animate-gradient text-xl font-bold bg-white hover:bg-gradient-to-r from-[#16A34A] via-[white] to-[#16A34A] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
          )}
        >
          Skills
        </AnimatedGradientText>
      </a>
    </li>
    <li>
      <a href="/#portfolio">
        <AnimatedGradientText
          className={cn(
            `inline animate-gradient text-xl font-bold bg-white hover:bg-gradient-to-r from-[#16A34A] via-[white] to-[#16A34A] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
          )}
        >
          Portfolio
        </AnimatedGradientText>
      </a>

    </li>
    <li>
      <Link to="/">
        <AnimatedGradientText
          className={cn(
            `inline animate-gradient text-xl font-bold bg-white hover:bg-gradient-to-r from-[#16A34A] via-[white] to-[#16A34A] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
          )}
        >
          Contact Me
        </AnimatedGradientText>
      </Link>
    </li>
  </>

  return (
    <nav className="fixed z-50 px-12 bg-[#1C2637] bg-opacity-90 w-full flex justify-between items-center py-7">
      <div>
        <div className="z-10 flex items-center justify-center">
          <Link to="/">
            <AnimatedGradientText
              className={cn(
                `inline animate-gradient bg-gradient-to-r from-[#16A34A] via-[white] to-[#16A34A] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
              )}
            >
              Swapnil Aanam
            </AnimatedGradientText>
          </Link>
        </div>
      </div>
      <ul className="flex justify-center items-center gap-8 uppercase">
        {navLinks}
      </ul>
    </nav>
  )
}

export default Navbar;