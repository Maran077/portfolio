// TimelineItem.tsx

import React from "react";

interface TimelineItemProps {
  year: string;
  title: string;
  subtitle: string;
  description?: string;
  color: string;
  themeColor: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  year,
  title,
  subtitle,
  description,
  color,
  themeColor,
}) => {
  return (
    <div className="relative ms-5">
      <div
        className={`absolute left-[-2.8px] top-3 z-10 h-4 w-4 -translate-y-1/2 transform rounded-full bg-gray-800`}
      ></div>
      <div className={`ps-7 text-gray-400 hover:text-[${themeColor}]`}>
        <dt className={`relative z-0 mb-2 text-xl font-bold`}>{year}</dt>
        <dd className="ml-5">
          <div className="mb-2">
            <div className={`font-semibold text-${color}`}>{title}</div>
            <div className="text-gray-400">{subtitle}</div>
          </div>
          <p className="text-gray-500">{description}</p>
        </dd>
      </div>
      <div
        className={`absolute bottom-0 left-1 top-3 mx-auto w-[1px] bg-gray-400`}
      ></div>
    </div>
  );
};

export default TimelineItem;
