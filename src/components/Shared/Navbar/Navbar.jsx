import { Link, useLocation } from "react-router-dom";
import { cn } from "../../../../lib/utils";
import AnimatedGradientText from "../MagicUi/AnimatedSkinnyText";

const Navbar = () => {
  const location = useLocation();

  console.log(location);

  const navLinks = <>
    <li>
      <Link to="/">
        <AnimatedGradientText>
          <Link to="/"
            className={cn(
              `inline animate-gradient text-xl font-bold bg-white hover:bg-gradient-to-r from-[#16A34A] via-[white] to-[#16A34A] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
            )}
          >
            Home
          </Link>
        </AnimatedGradientText>
      </Link>
    </li>
    <li>
      <Link to="/">
        <AnimatedGradientText>
          <Link to="/"
            className={cn(
              `inline animate-gradient text-xl font-bold bg-white hover:bg-gradient-to-r from-[#16A34A] via-[white] to-[#16A34A] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
            )}
          >
            About Me
          </Link>
        </AnimatedGradientText>
      </Link>
    </li>
    <li>
      <Link to="/">
        <AnimatedGradientText>
          <Link to="/"
            className={cn(
              `inline animate-gradient text-xl font-bold bg-white hover:bg-gradient-to-r from-[#16A34A] via-[white] to-[#16A34A] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
            )}
          >
            Skills
          </Link>
        </AnimatedGradientText>
      </Link>
    </li>
    <li>
      <Link to="/">
        <AnimatedGradientText>
          <Link to="/"
            className={cn(
              `inline animate-gradient text-xl font-bold bg-white hover:bg-gradient-to-r from-[#16A34A] via-[white] to-[#16A34A] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
            )}
          >
            Portfolio
          </Link>
        </AnimatedGradientText>
      </Link>
      
    </li>
    <li>
      <Link to="/">
        <AnimatedGradientText>
          <Link to="/"
            className={cn(
              `inline animate-gradient text-xl font-bold bg-white hover:bg-gradient-to-r from-[#16A34A] via-[white] to-[#16A34A] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
            )}
          >
            Contact Me
          </Link>
        </AnimatedGradientText>
      </Link>
    </li>
  </>

  return (
    <nav className="fixed z-50 px-12 bg-[#1C2637] bg-opacity-90 w-full flex justify-between items-center py-8">
      <div>
        <div className="z-10 flex items-center justify-center">
          <AnimatedGradientText>
            <Link to="/"
              className={cn(
                `inline animate-gradient bg-gradient-to-r from-[#16A34A] via-[white] to-[#16A34A] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
              )}
            >
              Swapnil Aanam
            </Link>
          </AnimatedGradientText>
        </div>
      </div>
      <ul className="flex justify-center items-center gap-8 uppercase">
        {navLinks}
      </ul>
    </nav>
  )
}

export default Navbar;