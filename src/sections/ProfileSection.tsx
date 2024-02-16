import { CiLinkedin, CiMail } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { GiStaticWaves } from "react-icons/gi";
import { Theme } from "../App";
import { Element } from "react-scroll";
type Props = {
  theme: Theme;
};

function ProfileSection({ theme }: Props) {
  const { color, themeColor, backGroundColor } = theme;
  const style: string = `text-2xl p-2 rounded-full box-content border-2 border-gray-400 hover:border-[${themeColor}] text-gray-400 hover:text-[${themeColor}]`;
  return (
    <Element
      name="profile"
      id="profile"
      className={`mt-3 flex w-[90%] flex-col items-center gap-3 rounded-[10%] border-[3.2px] px-10 py-6 md:sticky md:top-[12.5%] md:max-w-[400px] md:self-start boredr-${color}`}
    >
      <div className={`flex w-full items-center justify-between text-${color}`}>
        <h1 className="text-4xl ">Maran</h1>
        <p>Mernstack devloper</p>
      </div>
      <div className="flex flex-col gap-5">
        <img
          className="w-[250px] rounded-2xl"
          src="https://wpriverthemes.com/drake/wp-content/themes/drake/assets/images/me.jpg"
          alt="profile pic"
        />
        <h1 className={`text-${color} text-2xl`}>
          Sugumaran{" "}
          <span className="text-sm text-gray-400">@fullstack.devloper</span>
        </h1>
        <div className={`flex justify-between`}>
          <CiLinkedin className={style} />
          <FaGithub className={style} />
          <GiStaticWaves className={style} />
        </div>
      </div>
      <button
        className={`flex w-full items-center justify-center gap-4 rounded-full p-3 hover:bg-[${themeColor}] hover:text-${backGroundColor} text-[${themeColor}] border-2 bg-transparent border-[${themeColor}]`}
      >
        <span className={`box-border text-2xl font-[600] uppercase`}>CV</span>
      </button>
      <button
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
