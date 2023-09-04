import { useRef } from "react";
import "./App.css";
export const NavBar = ({}) => {
  return (
    <div className="logo">
      <div className="professional">Friend or Foe AI</div>
      <div className="subtitle">
        designed to emulate the split-second decisions that women need to make.
        made by{" "}
        <a
          href="https://x.com/ronawang"
          target="_blank"
          rel="noopener noreferrer"
        >
          Rona Wang
        </a>
      </div>
    </div>
  );
};
