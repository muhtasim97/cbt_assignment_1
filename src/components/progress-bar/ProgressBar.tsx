import React from "react";
import "./ProgressBar.scss";

interface Props {
  percentage: string;
}
const ProgressBar: React.FC<Props> = ({ percentage }) => {
  return (
    <div className="p-progress">
      <div
        className={`p-progress__child p-progress__child--${percentage}`}
      ></div>
    </div>
  );
};

export default ProgressBar;
