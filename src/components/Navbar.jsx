import React from "react";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { styles } from "../style";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = React.useState(false);
  const [toggle, settoggle] = React.useState(false);
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary `}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <h1 className="text-2xl font-bold text-white">Ahmer Khan</h1>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white cursor-pointer text-[18px]`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[25px] h-[25px] object-contain cursor-pointer"
            onClick={() => settoggle(!toggle)}
          />
          {toggle && (
            <div className="p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl">
              <ul className="list-none flex flex-col  gap-4 justify-end items-start">
                {navLinks.map((link) => (
                  <li
                    key={link.id}
                    className={`${
                      active === link.title ? "text-white" : "text-secondary"
                    } hover:text-white cursor-pointer text-[18px] `}
                    onClick={() => {
                      setActive(link.title);
                      settoggle(!toggle);
                    }}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
