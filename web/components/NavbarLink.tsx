import React from "react";
import { Link } from "react-scroll";

interface Props {
  text: string;
}

const NavbarLink: React.FC<Props> = ({ text }) => {
  return (
    <Link
      to={text === "Research" ? "portfolio" : text.toLowerCase()}
      spy={true}
      smooth={true}
      offset={-100}
      duration={1000}
    >
      <div className="text-center sm:text-xs md:text-lg xl:text-xl hover:cursor-pointer duration-300 hover:opacity-25">
        {text}
      </div>
    </Link>
  );
};

export default NavbarLink;
