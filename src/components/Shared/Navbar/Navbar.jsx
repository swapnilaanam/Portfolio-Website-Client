import { Link } from "react-router-dom";
import { cn } from "../../../../lib/utils";
import AnimatedGradientText from "../MagicUi/AnimatedSkinnyText";
import { RiMenu3Fill } from "react-icons/ri";

import "./Navbar.css";
import { useRef } from "react";

const Navbar = () => {

  const menuRef = useRef(null);

  const toggleTheMenu = () => {
    const menu = menuRef?.current;

    menu?.classList?.toggle('menu-open');
  }

  const navLinks = <>
    <li onClick={toggleTheMenu}>
      <Link to="/" onClick={() => scrollTo(0, 0)}>
        <AnimatedGradientText
          className={cn(
            `inline animate-gradient text-xl font-bold bg-white hover:bg-gradient-to-r from-[#16A34A] via-[white] to-[#16A34A] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
          )}
        >
          Home
        </AnimatedGradientText>
      </Link>
    </li>
    <li onClick={toggleTheMenu}>
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
    <li onClick={toggleTheMenu}>
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
    <li onClick={toggleTheMenu}>
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
    <li onClick={toggleTheMenu}>
      <a href="/#contactme">
        <AnimatedGradientText
          className={cn(
            `inline animate-gradient text-xl font-bold bg-white hover:bg-gradient-to-r from-[#16A34A] via-[white] to-[#16A34A] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
          )}
        >
          Contact Me
        </AnimatedGradientText>
      </a>
    </li>
  </>

  return (
    <nav className="w-full fixed z-50">
      <div className="px-4 md:px-10 xl:px-12 bg-[#1C2637] bg-opacity-90 w-full flex justify-between items-center py-7">
        <div className="w-full xl:w-2/5 z-10 flex justify-between items-center">
          <Link to="/" onClick={() => scrollTo(0, 0)}>
            <h1>
              <AnimatedGradientText
                className={cn(
                  `inline animate-gradient bg-gradient-to-r from-[#16A34A] via-[white] to-[#16A34A] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
                )}
              >
                Swapnil Aanam
              </AnimatedGradientText>
            </h1>
          </Link>
          <RiMenu3Fill onClick={toggleTheMenu} className="text-2xl text-white font-bold xl:hidden" />
        </div>
        <ul className="w-full xl:w-3/5 hidden xl:flex justify-end items-center gap-8 uppercase">
          {navLinks}
        </ul>
      </div>
      <ul className="pt-5 pb-7 bg-[#333333] bg-opacity-95 menu menu-open border-b-2 border-white flex xl:hidden flex-col justify-center items-center gap-5 uppercase" ref={menuRef} >
        {navLinks}
      </ul>
    </nav>
  )
}

export default Navbar;