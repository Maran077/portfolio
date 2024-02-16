import { motion, useInView } from "framer-motion";
import { GiGiftOfKnowledge } from "react-icons/gi";
import { FaBootstrap, FaNodeJs, FaReact } from "react-icons/fa";
import { Theme, variants } from "../App";
import SectionHeader from "../components/SectionHeader";
import { useRef } from "react";
import {
  SiExpress,
  SiFramer,
  SiMongodb,
  SiRender,
  SiSqlite,
  SiTailwindcss,
} from "react-icons/si";
import { BiLogoNetlify } from "react-icons/bi";

type Props = {
  theme: Theme;
};

type Skillstype = {
  id: number;
  name: string;
  percentage: number;
  icon: JSX.Element;
}[];

type IconProp = {
  size: number;
  className: string;
};

const iconProp: IconProp = {
  size: 50,
  className: "border-box",
};

const skills: Skillstype = [
  {
    id: 1,
    name: "React js",
    percentage: 80,
    icon: <FaReact {...iconProp} />,
  },
  {
    id: 2,
    name: "Node js",
    percentage: 70,
    icon: <FaNodeJs {...iconProp} />,
  },
  {
    id: 3,
    name: "Express js",
    percentage: 75,
    icon: <SiExpress {...iconProp} />,
  },
  {
    id: 4,
    name: "Monogodb",
    percentage: 70,
    icon: <SiMongodb {...iconProp} />,
  },
  {
    id: 5,
    name: "Sql Lite",
    percentage: 60,
    icon: <SiSqlite {...iconProp} />,
  },

  {
    id: 6,
    name: "Tailwind",
    percentage: 90,
    icon: <SiTailwindcss {...iconProp} />,
  },
  {
    id: 7,
    name: "Bootstrap",
    percentage: 80,
    icon: <FaBootstrap {...iconProp} />,
  },
  {
    id: 8,
    name: "Framer",
    percentage: 40,
    icon: <SiFramer {...iconProp} />,
  },
  {
    id: 9,
    name: "Netlify",
    percentage: 70,
    icon: <BiLogoNetlify {...iconProp} />,
  },
  { id: 10, name: "Render", percentage: 70, icon: <SiRender {...iconProp} /> },
];

function SkillSection({ theme }: Props) {
  const { color, themeColor } = theme;
  const skillSection = useRef(null);
  const inView = useInView(skillSection);

  return (
    <motion.section
      id="skill"
      ref={skillSection}
      variants={variants}
      animate={inView ? "animate" : "intial"}
      className="flex w-full min-w-[400px] max-w-[700px] flex-col items-center justify-center gap-7"
    >
      <SectionHeader color={color}>
        <GiGiftOfKnowledge size={20} />
        <p>my skills</p>
      </SectionHeader>
      <main className="flex flex-col items-center gap-5">
        <h1
          className={`self-start text-[48px] text-${color} font-sans font-[300]`}
        >
          My <span className={`text-[${themeColor}]`}>Advantages</span>
        </h1>
        <ul className="flex w-full flex-wrap justify-center gap-5">
          {skills.map((skill) => (
            <li key={skill.id} className="flex flex-col items-center gap-2">
              <div
                className={`text-${color} px-13 flex flex-col items-center gap-3 border-2 border-gray-400 px-[3.4rem] py-6 hover:border-[${themeColor}]  rounded-[30%]`}
              >
                {skill.icon}
                <h3 className={`text-[${themeColor}] text-[2rem] `}>
                  {skill.percentage}%
                </h3>
              </div>
              <p className={`text-${color}`}>{skill.name}</p>
            </li>
          ))}
        </ul>
      </main>
    </motion.section>
  );
}

export default SkillSection;
