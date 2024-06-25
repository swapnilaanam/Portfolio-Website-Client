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
              `inline animate-gradient text-xl font-semibold bg-white hover:bg-gradient-to-r from-[#2F855A] via-[white] to-[#2F855A] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
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
              `inline animate-gradient text-xl font-semibold bg-white hover:bg-gradient-to-r from-[#2F855A] via-[white] to-[#2F855A] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
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
              `inline animate-gradient text-xl font-semibold bg-white hover:bg-gradient-to-r from-[#2F855A] via-[white] to-[#2F855A] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
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
              `inline animate-gradient text-xl font-semibold bg-white hover:bg-gradient-to-r from-[#2F855A] via-[white] to-[#2F855A] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
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
              `inline animate-gradient text-xl font-semibold bg-white hover:bg-gradient-to-r from-[#2F855A] via-[white] to-[#2F855A] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
            )}
          >
            Contact Me
          </Link>
        </AnimatedGradientText>
      </Link>
    </li>
  </>

  return (
    <nav className="px-12 bg-black w-full flex justify-between items-center py-8">
      <div>
        <div className="z-10 flex items-center justify-center">
          <AnimatedGradientText>
            <Link to="/"
              className={cn(
                `inline animate-gradient bg-gradient-to-r from-[#2F855A] via-[white] to-[#2F855A] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
              )}
            >
              Swapnil Aanam
            </Link>
          </AnimatedGradientText>
        </div>
      </div>
      <ul className="mr-2 flex justify-center items-center items-center gap-8 uppercase">
        {navLinks}
      </ul>
    </nav>
  )
}

export default Navbar;