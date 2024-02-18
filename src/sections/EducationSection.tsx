import { motion, useInView } from "framer-motion";
import { MdOutlineCastForEducation } from "react-icons/md";
import { Theme, variants } from "../App";
import SectionHeader from "../components/SectionHeader";
import TimelineItem from "../components/TimelineItem";
import { useRef } from "react";

type Props = {
  theme: Theme;
};

function EducationSection({ theme }: Props) {
  const { color, themeColor } = theme;
  const educationSection = useRef(null);
  const inView = useInView(educationSection);
  return (
    <motion.section
      id="education"
      ref={educationSection}
      variants={variants}
      animate={inView ? "animate" : "intial"}
      className="z-0 flex min-h-min w-full min-w-[400px] max-w-[700px] flex-col items-center justify-center gap-7"
    >
      <SectionHeader color={color}>
        <MdOutlineCastForEducation size={20} />
        <p>Resume</p>
      </SectionHeader>

      <main className="flex flex-col gap-4 ">
        <h1
          className={`self-start text-[48px] text-${color} font-sans font-[300]`}
        >
          My <span className={`text-[${themeColor}]`}>Education</span>
        </h1>
        <TimelineItem
          year="2023 - Present"
          title="Full stack developer course"
          subtitle="Nxtwave"
          description="Full-stack course covering essential web development technologies: JaveScript for client-side scripting , React for building dynamic user interfaces, MonogoDB for NoSql database management , an Node.js with Express for server-side evelopment."
          color={color}
          themeColor={themeColor}
        />
        <TimelineItem
          year="2019 - 2023"
          title="B.E Mechanical engineering"
          subtitle="Dhanalakshmi Srinivasan College of Engineering"
          color={color}
          themeColor={themeColor}
        />
        <TimelineItem
          year="2016 - 2017 & 2018 - 2019"
          title="10th & 12th"
          subtitle="St Antony's higher secondry school"
          color={color}
          themeColor={themeColor}
        />
      </main>
    </motion.section>
  );
}

export default EducationSection;
