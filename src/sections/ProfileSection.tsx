import { CiLinkedin, CiMail } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { GiStaticWaves } from "react-icons/gi";
import { Theme } from "../App";
import { Element } from "react-scroll";
import ProfileImage from "../assets/profile.jpg";
type Props = {
  theme: Theme;
};

function ProfileSection({ theme }: Props) {
  const { color, themeColor, backGroundColor } = theme;
  const style: string = `text-2xl p-2 rounded-full box-content border-2 border-gray-400 hover:border-[${themeColor}] text-gray-400 hover:text-[${themeColor}]`;

  const handleDownload = () => {
    const fileUrl = "../assets/resume.pdf";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSendEmail = () => {
    const emailAddress = "sugumaran3679@gmail.com";
    window.location.href = `mailto:${emailAddress}?`;
  };

  return (
    <Element
      name="profile"
      id="profile"
      className={`mt-3 flex w-[90%] flex-col items-center gap-3 rounded-[10%] border-[3.2px] px-10 py-6 md:sticky md:top-[1.5%] md:max-w-[400px] md:self-start boredr-${color}`}
    >
      <div className={`flex w-full items-center justify-between text-${color}`}>
        <h1 className="text-4xl ">Maran</h1>
        <p>Mernstack devloper</p>
      </div>
      <div className="flex flex-col gap-5">
        <img
          className="w-[250px] rounded-2xl"
          src={ProfileImage}
          alt="profile pic"
        />
        <h1 className={`text-${color} text-2xl`}>
          Sugumaran
          <span className="text-sm text-gray-400">@fullstack.devloper</span>
        </h1>
        <div className={`flex justify-between`}>
          <a
            href="https://www.linkedin.com/in/sugu-maran07/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CiLinkedin className={style} />
          </a>
          <a
            href="https://github.com/Maran077"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className={style} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <GiStaticWaves className={style} />
          </a>
        </div>
      </div>
      <button
        onClick={handleDownload}
        className={`flex w-full items-center justify-center gap-4 rounded-full p-3 hover:bg-[${themeColor}] hover:text-${backGroundColor} text-[${themeColor}] border-2 bg-transparent border-[${themeColor}]`}
      >
        <span className={`box-border text-2xl font-[600] uppercase`}>CV</span>
      </button>
      <button
        onClick={handleSendEmail}
        className={`flex w-full items-center justify-center gap-4 rounded-full p-3 bg-[${themeColor}] text-${backGroundColor} hover:text-[${themeColor}] hover:border-2 hover:bg-transparent hover:border-[${themeColor}]`}
      >
        <CiMail size={30} />
        <span className={`box-border text-2xl font-[600] uppercase`}>
          hire me!
        </span>
      </button>
    </Element>
  );
}

export default ProfileSection;
