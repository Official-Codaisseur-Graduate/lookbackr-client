import React from "react";
import mad from "../../assets/angry-solid.svg";
import sad from "../../assets/frown-open-solid.svg";
import glad from "../../assets/laugh-beam-solid.svg";

export default function madSadGladContent() {
  return (
    <div className="feelings-area">
      <div className="feelings">
        <img src={mad} alt="mad" className="icon-mad" />
        <strong>Mad</strong> - List the things that were driving you crazy. What
        was stopping you from performing at your best?
      </div>
      <div className="feelings">
        <img src={sad} alt="sad" className="icon-sad" />
        <strong>Sad</strong> - What are some of the things that have
        disappointed you or that you wished could be improved?
      </div>
      <div className="feelings">
        <img src={glad} alt="glad" className="icon-glad" />
        <strong>Glad</strong> - What makes you happy when you think about the
        project? Which aspects did you enjoy the most?
      </div>
    </div>
  );
}
