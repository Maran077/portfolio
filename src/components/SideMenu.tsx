import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { IoMdHome } from "react-icons/io";
import { GoProject } from "react-icons/go";
import { GiGiftOfKnowledge } from "react-icons/gi";
import { MdContacts, MdOutlineCastForEducation } from "react-icons/md";
import { Theme } from "../App";
import { Link } from "react-scroll";
import { GrCertificate } from "react-icons/gr";

type PropsType = {
  isSideMenuOpen: boolean;
  setIsSideMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  theme: Theme;
};

type MenuType = {
  element: ReactNode;
}[];
const sideMenuIconSize: number = 25;
const menuItemStyle = "flex gap-3";
const menues: MenuType = [
  {
    element: (
      <Link
        spy={true}
        smooth={true}
        duration={800}
        to="home"
        className={menuItemStyle}
      >
        <IoMdHome size={sideMenuIconSize} />
        <p>Home</p>
      </Link>
    ),
  },
  {
    element: (
      <Link
        spy={true}
        smooth={true}
        duration={800}
        to="profile"
        className={menuItemStyle}
      >
        <MdContacts size={sideMenuIconSize} />
        <p>Conatct</p>
      </Link>
    ),
  },
  {
    element: (
      <Link
        spy={true}
        smooth={true}
        duration={800}
        to="skill"
        className={menuItemStyle}
      >
        <GiGiftOfKnowledge size={sideMenuIconSize} />
        <p>Skill</p>
      </Link>
    ),
  },
  {
    element: (
      <Link
        spy={true}
        smooth={true}
        duration={800}
        to="project"
        className={menuItemStyle}
      >
        <GoProject size={sideMenuIconSize} />
        <p>Projects</p>
      </Link>
    ),
  },
  {
    element: (
      <Link
        spy={true}
        smooth={true}
        duration={800}
        to="education"
        className={menuItemStyle}
      >
        <MdOutlineCastForEducation size={sideMenuIconSize} />
        <p>Education</p>
      </Link>
    ),
  },
  {
    element: (
      <Link
        spy={true}
        smooth={true}
        duration={800}
        to="certificate"
        className={menuItemStyle}
      >
        <GrCertificate size={sideMenuIconSize} />
        <p>Achivement</p>
      </Link>
    ),
  },
];

const SideMenu: React.FC<PropsType> = ({
  isSideMenuOpen,
  setIsSideMenuOpen,
  theme,
}) => {
  const { themeColor, color, backGroundColor } = theme;
  const iconsList: string = `flex items-center gap-4 cursor-pointer text-[1.4rem] hover:text-[${themeColor}]`;
  return (
    <>
      <div
        style={{
          transition: "ease-in-out .4s",
          translate: `${isSideMenuOpen ? "-280px" : "70px"}`,
        }}
        className={`fixed top-0 z-50 h-[100dvh] w-[350px] ps-8 text-gray-400 bg-${backGroundColor}`}
      >
        <h1 className={`text-[2.1rem]  text-${color}`}>Menu</h1>
        <ul className="flex list-none flex-col gap-2 p-3">
          {menues.map((menu) => (
            <motion.li
              whileHover={{ scale: 1.2, x: 40 }}
              whileTap={{ rotateZ: -5, scale: 0.8, x: 0 }}
              className={iconsList}
            >
              {menu.element}
            </motion.li>
          ))}
        </ul>
      </div>
      {isSideMenuOpen && (
        <div
          onClick={() => setIsSideMenuOpen((prev) => !prev)}
          className="fixed left-0 top-0 z-20 h-[100dvh] w-[100dvw] bg-gray-800 opacity-25 "
        ></div>
      )}
    </>
  );
};
export default SideMenu;
