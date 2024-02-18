import { motion, useInView } from "framer-motion";
import { IoIosHome } from "react-icons/io";
import { FaArrowDown } from "react-icons/fa";
import { Theme, variants } from "../App";
import SectionHeader from "../components/SectionHeader";
import { useRef } from "react";
import { Link } from "react-scroll";

type props = {
  theme: Theme;
};

function HomeSection({ theme }: props) {
  const { color, themeColor } = theme;
  const homeSection = useRef(null);
  const inView = useInView(homeSection);

  return (
    <motion.section
      id="home"
      ref={homeSection}
      variants={variants}
      animate={inView ? "animate" : "intial"}
      className="flex w-full min-w-[400px] max-w-[700px] flex-col items-center justify-center gap-7"
    >
      <SectionHeader color={color}>
        <IoIosHome size={20} />
        <p>introduce</p>
      </SectionHeader>

      <main>
        <h1
          className={`text-[58px] text-${color} font-sans font-[300] leading-[1.17]`}
        >
          Hi there! Meet
          <span className={`text-[${themeColor}]`}> Sugumaran</span>,
          <span className="text-[48px]">Your Full Stack MERN Developer</span>
        </h1>
        <p className="pt-2 text-[16px] font-[400] text-gray-600">
          Passionate about my work, I bring creativity and functionality
          together. Join me in the art of creating digital experiences that
          resonate with simplicity and excellence.
        </p>
      </main>
      <Link spy={true} smooth={true} duration={800} to="project">
        <motion.div
          whileHover={{ scale: 1.4 }}
          whileTap={{ scale: 0.7, y: 20 }}
        >
          <FaArrowDown size={30} color={themeColor} />
        </motion.div>
      </Link>
    </motion.section>
  );
}

export default HomeSection;
