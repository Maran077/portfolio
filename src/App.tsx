import { useState } from "react";
import { Element } from "react-scroll";
import NavBar from "./components/NavBar";
import HomeSection from "./sections/HomeSection";
import ProjectSection from "./sections/ProjectSection";
import SkillSection from "./sections/SkillSection";
import EducationSection from "./sections/EducationSection";
import ProfileSection from "./sections/ProfileSection";
import Setting from "./components/Setting";
import CertificationSection from "./sections/CertificationSection";

export type themeColors = "black" | "white";
export type Theme = {
  color: themeColors;
  backGroundColor: themeColors;
  themeColor: string;
};

export const variants = {
  intial: {
    x: 70,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.9,
    },
  },
};

function App() {
  const [theme, setTheme] = useState<Theme>({
    themeColor: "#1338F3",
    backGroundColor: "black",
    color: "white",
  });
  return (
    <div
      className={` flex flex-col items-center justify-center gap-3 md:flex-row bg-${
        theme.backGroundColor === "black" ? "[#1F1F1F]" : "white"
      }`}
    >
      <NavBar theme={theme} />
      <Setting theme={theme} setTheme={setTheme} />
      <ProfileSection theme={theme} />
      <main
        className={`flex w-full max-w-[800px] flex-col items-center gap-16 overflow-x-hidden p-[20px] sm:p-[30px] md:p-[40px] `}
      >
        <Element name="home">
          <HomeSection theme={theme} />
        </Element>
        <Element name="skill">
          <SkillSection theme={theme} />
        </Element>
        <Element name="project">
          <ProjectSection theme={theme} />
        </Element>
        <Element name="eduction">
          <EducationSection theme={theme} />
        </Element>
        <Element name="certificate">
          <CertificationSection theme={theme} />
        </Element>
      </main>
    </div>
  );
}

export default App;
