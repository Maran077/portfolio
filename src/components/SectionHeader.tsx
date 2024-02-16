import { ReactNode } from "react";
import { themeColors } from "../App";

type Props = {
  children: ReactNode;
  color: themeColors;
};

function SectionHeader({ children, color }: Props) {
  return (
    <header
      className={`flex w-[140px] items-center gap-2 self-start px-2 py-1 text-${color} border-2 border-${color} rounded-md uppercase`}
    >
      {children}
    </header>
  );
}

export default SectionHeader;
