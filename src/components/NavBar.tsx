import { ReactNode, useState } from "react";
import { motion } from "framer-motion";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoMdHome } from "react-icons/io";
import { GoProject } from "react-icons/go";
import { GiGiftOfKnowledge } from "react-icons/gi";
import { MdContacts, MdOutlineCastForEducation } from "react-icons/md";
import SideMenu from "./SideMenu";
import { Theme } from "../App";
import { Link } from "react-scroll";
import { GrCertificate } from "react-icons/gr";

type NavBarProps = {
  theme: Theme;
};
const menuIconSize: number = 27;
type MenuType = ReactNode[];
const menues: MenuType = [
  <Link spy={true} smooth={true} duration={800} to="home">
    <IoMdHome size={menuIconSize} />
  </Link>,
  <Link spy={true} smooth={true} duration={800} to="profile">
    <MdContacts size={menuIconSize} />
  </Link>,
  <Link spy={true} smooth={true} duration={800} to="skill">
    <GiGiftOfKnowledge size={menuIconSize} />
  </Link>,
  <Link spy={true} smooth={true} duration={800} to="project">
    <GoProject size={menuIconSize} />
  </Link>,
  <Link spy={true} smooth={true} duration={800} to="eduction">
    <MdOutlineCastForEducation size={menuIconSize} />
  </Link>,
  <Link spy={true} smooth={true} duration={800} to="certificate">
    <GrCertificate size={menuIconSize} />
  </Link>,
];
const NavBar: React.FC<NavBarProps> = ({ theme }) => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState<boolean>(false);
  const { themeColor, color, backGroundColor } = theme;
  return (
    <>
      <nav
        className={`fixed right-0 top-3 z-10 flex w-[70px] items-center gap-0`}
      >
        <div className="flex flex-col items-center gap-3 self-start pt-[25px] md:self-center md:pt-0">
          <HiMenuAlt4
            onClick={() => setIsSideMenuOpen((prev) => !prev)}
            size={30}
            className={`box-content h-[40px] w-[40px]  p-2 text-${color} hover:text-[${themeColor}] bg-${backGroundColor} border-2 border-gray-500 hover:border-[${themeColor}] rounded-full`}
          />
          <div
            id="desktop-menu"
            className={`hidden w-[60px] flex-col items-center gap-3 rounded-3xl py-8 md:flex text-${color} border-${color} border-2 bg-${backGroundColor}`}
          >
            {menues.map((menu) => (
              <motion.div
                whileInView={{ color: color }}
                transition={{ delay: -2 }}
                whileTap={{
                  scale: 0.8,
                }}
                whileHover={{ color: themeColor, scale: 1.2 }}
              >
                {menu}
              </motion.div>
            ))}
          </div>
        </div>
        <SideMenu
          isSideMenuOpen={isSideMenuOpen}
          setIsSideMenuOpen={setIsSideMenuOpen}
          theme={theme}
        />
      </nav>
    </>
  );
};

export default NavBar;
