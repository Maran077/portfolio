import { motion, useInView } from "framer-motion";
import { Theme, variants } from "../App";
import { useRef } from "react";
import SectionHeader from "../components/SectionHeader";
import { GrCertificate } from "react-icons/gr";

import NodeImage from "../assets/node.jpg";
import ReactImage from "../assets/react.jpg";
import GitImage from "../assets/git.jpg";
import DynamicAppicationImage from "../assets/dynamic_application.jpg";
import SqlLiteImage from "../assets/sqllite.jpg";
import ResponsiveWebsiteImage from "../assets/responsive_website.jpg";

type Props = {
  theme: Theme;
};

type CertificateType = {
  path: string;
  courseName: string;
  link: string;
};

const certificates: CertificateType[] = [
  {
    courseName: "Node js",
    link: "https://certificates.ccbp.in/intensive/node-js?id=FJUUMMESAM",
    path: NodeImage,
  },
  {
    courseName: "React js",
    link: "https://certificates.ccbp.in/intensive/react-js?id=BYTZHRSKYH",
    path: ReactImage,
  },
  {
    courseName: "Git & Network",
    link: "https://certificates.ccbp.in/intensive/developer-foundations?id=HUUFNYHVJC",
    path: GitImage,
  },
  {
    courseName: "Dynamic Appliction",
    link: "https://certificates.ccbp.in/intensive/dynamic-web-application?id=UUIVKSWINL",
    path: DynamicAppicationImage,
  },
  {
    courseName: "SqlLite",
    link: "https://certificates.ccbp.in/intensive/introduction-to-databases?id=FXVFMWMLOQ",
    path: SqlLiteImage,
  },
  {
    courseName: "Bootstrap & CSS",
    link: "https://certificates.ccbp.in/intensive/responsive-website?id=OILXEVVDXD",
    path: ResponsiveWebsiteImage,
  },
];
function CertificationSection({ theme }: Props) {
  const { color, themeColor } = theme;
  const certificationSection = useRef(null);
  const inView = useInView(certificationSection);
  return (
    <motion.section
      id="certification"
      ref={certificationSection}
      variants={variants}
      animate={inView ? "animate" : "intial"}
      className="flex min-h-min w-full flex-col items-start gap-7"
    >
      <SectionHeader color={color}>
        <GrCertificate size={20} />
        <p>Cerificate</p>
      </SectionHeader>
      <main className="flex flex-col gap-4">
        <h1 className={`text-[48px] text-${color} font-sans font-[300]`}>
          My <span className={`text-[${themeColor}]`}>Achivement</span>
        </h1>
        <ul className="flex flex-wrap gap-3">
          {certificates.map((certificate) => (
            <li className="flex flex-col gap-3" key={certificate.courseName}>
              <img
                className="w-[200px]"
                src={certificate.path}
                alt={certificate.courseName}
              />
              <a
                target="_blank"
                className={`text-[${themeColor}] font-[1.2rem] hover:text-red-500 hover:underline`}
                href={certificate.link}
              >
                {certificate.courseName}
              </a>
            </li>
          ))}
        </ul>
      </main>
    </motion.section>
  );
}

export default CertificationSection;
