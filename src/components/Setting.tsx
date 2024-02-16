import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoSettingsOutline } from "react-icons/io5";
import { FaSun, FaMoon } from "react-icons/fa";
import { Theme } from "../App";

type Props = {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
};

type ColorsType = string[];

const colors: ColorsType = [
  "#28E98C",
  "#E4AF12",
  "#FE6F1D",
  "#14C5FD",
  "#1338F3",
];

function Setting({ theme, setTheme }: Props) {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState<boolean>(false);
  const { color, backGroundColor, themeColor } = theme;
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
    if (isDarkMode)
      return setTheme((prev) => ({
        ...prev,
        color: "black",
        backGroundColor: "white",
      }));
    setTheme((prev) => ({ ...prev, color: "white", backGroundColor: "black" }));
  };

  return (
    <>
      <div
        className={`fixed left-0 top-[100px] z-10 rounded-e-full py-1 pe-2 ps-6 bg-${backGroundColor}`}
      >
        <motion.div whileTap={{ scale: 0.85 }}>
          <IoSettingsOutline
            onClick={() => setIsSideMenuOpen((prev) => !prev)}
            size={25}
            className={`: animate-spin text-${color} hover:text-[${themeColor}]`}
          />
        </motion.div>
      </div>
      <div
        style={{
          transition: "ease-in-out .4s",
          translate: `${isSideMenuOpen ? "-2px" : "350px"}`,
        }}
        className={`fixed right-0 top-0 z-50 flex h-[100dvh] w-[350px] flex-col gap-6 ps-8 text-gray-400 bg-${backGroundColor}`}
      >
        <h1 className={`text-[2.1rem]  text-${color} `}>Configuration</h1>
        <div className="justify-self-center">
          <h3 className={`text-${color} font-bold capitalize`}>colors</h3>
          <ul className="flex list-none gap-2 p-3">
            {colors.map((clr, index) => (
              <motion.li
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.85 }}
                onClick={() =>
                  setTheme((prev) => ({ ...prev, themeColor: clr }))
                }
                key={index}
                className={`${themeColor === clr && `border-[3px] border-${color}`} size-8 hover:border-2 hover:border-${color} rounded-full  hover:p-2 bg-[${clr}]`}
              ></motion.li>
            ))}
          </ul>
        </div>
        <button
          className="flex items-center gap-2 rounded-full bg-gray-200 p-2 focus:outline-none dark:bg-gray-800"
          onClick={toggleTheme}
        >
          {isDarkMode ? (
            <FaSun className="text-yellow-500" />
          ) : (
            <FaMoon className="text-gray-500" />
          )}
          <span className="text-sm font-semibold">
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </span>
        </button>
      </div>
      {isSideMenuOpen && (
        <div
          onClick={() => setIsSideMenuOpen((prev) => !prev)}
          className="fixed left-0 top-0 z-20 h-[100dvh] w-[100dvw] bg-gray-800 opacity-25 "
        ></div>
      )}
    </>
  );
}

export default Setting;
