import { motion } from "framer-motion";
import { GoProject } from "react-icons/go";
import { Theme, variants } from "../App";
import SectionHeader from "../components/SectionHeader";
import { useRef } from "react";
import { useInView } from "framer-motion";

import SmartShoppingImage from "../assets/smart_shopping.png";
import GroupChatImage from "../assets/group_chat.png";
import JobMarketImage from "../assets/job_market.png";
import MatchGameImage from "../assets/match_game.png";

type props = {
  theme: Theme;
};

type ProjectsType = {
  id: number;
  name: string;
  image: string;
  preview: string;
  gitHub: string;
  tech: [string, string, string];
}[];

const projects: ProjectsType = [
  {
    id: 1,
    name: "Smart shopping",
    image:SmartShoppingImage,
    preview: "https://smart-shopping-ju2.netlify.app/",
    gitHub: "https://github.com/Maran077/amazonClone-client",
    tech: ["MERN", "Redux", "React-Query"],
  },
  {
    id: 2,
    name: "Group chat",
    image: GroupChatImage,
    preview: "https://group-chat-app89.netlify.app/",
    gitHub: "https://github.com/Maran077/group_chat",
    tech: ["React", "Firebase", "Tailwind"],
  },
  {
    id: 3,
    name: "Job market",
    image: JobMarketImage,
    preview: "https://jobmarket89.ccbp.tech/",
    gitHub: "https://github.com/Maran077/job-market",
    tech: ["React", "React-router", "RestApi"],
  },
  {
    id: 4,
    name: "Match Game",
    image:MatchGameImage,
    preview: "https://matchgame89.ccbp.tech/",
    gitHub: "https://github.com/Maran077/Match-Game",
    tech: ["React", "Html", "Css"],
  },
];

function ProjectSection({ theme }: props) {
  const { color, themeColor, backGroundColor } = theme;
  const projectSection = useRef(null);
  const inView = useInView(projectSection);
  return (
    <motion.section
      id="project"
      ref={projectSection}
      variants={variants}
      animate={inView ? "animate" : "intial"}
      className="flex w-full min-w-[400px] max-w-[750px] flex-col justify-center gap-7"
    >
      <SectionHeader color={color}>
        <GoProject size={20} />
        <p>portfolio</p>
      </SectionHeader>
      <main className="flex flex-col items-center gap-5">
        <h1
          className={`self-start text-[48px] text-${color} font-sans font-[300]`}
        >
          Featured <span className={`text-[${themeColor}]`}>Projects</span>
        </h1>

        <ul className="flex w-full flex-wrap justify-center gap-8 ">
          {projects.map((project) => (
            <li
              key={project.id}
              className={`flex flex-col gap-3 rounded-xl border-2 p-5 border-${color} hover:border-[${themeColor}]`}
            >
               <img
                className="w-[200px]"
                src={project.image}
                alt={project.name}
              />
              <p className="flex items-center gap-3">
                {project.tech.map((tech) => (
                  <span
                    className={`text-[.6rem] capitalize text-${backGroundColor} hover:text-${color} bg-${color} hover:bg-${backGroundColor} rounded-2xl px-[10px] py-[4px]`}
                  >
                    {tech}
                  </span>
                ))}
              </p>
              <h3
                className={`text-[${themeColor}] -mt-[5px] font-sans text-[1.9rem] font-[400]`}
              >
                {project.name}
              </h3>
              <p className={`text-${color} -mt-[8px] flex items-center gap-2`}>
                <a
                  className={`hover:text-red-600 hover:underline`}
                  href={project.gitHub}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
                <a
                  className={`hover:text-red-600 hover:underline`}
                  href={project.preview}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Preview
                </a>
              </p>
            </li>
          ))}
        </ul>
      </main>
    </motion.section>
  );
}

export default ProjectSection;
