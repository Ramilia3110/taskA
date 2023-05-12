import { useRef } from "react";
import { RiMenuFill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { links } from "./../../data.js";
import "./styles.scss";

export const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <header>
      <h3>aTech</h3>
      <nav ref={navRef}>
        {links.map((link) => {
          return (
            <a href={link.url} key={link.id}>
              {link.text}
            </a>
          );
        })}
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <IoMdClose />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <RiMenuFill />
      </button>
    </header>
  );
};
