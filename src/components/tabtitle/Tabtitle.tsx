import React from "react";

interface TabtitleProps {
  title: string;
  children: React.ReactNode;
}

const Tabtitle: React.FC<TabtitleProps> = ({ title, children }) => {
  document.title = `Dataphone - ${title}`;
  return <div>{children}</div>;
};

export default Tabtitle;