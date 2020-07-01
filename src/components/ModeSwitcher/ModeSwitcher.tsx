import React from "react";

import "./ModeSwitcher.css";
import useMode from "../../hooks/useMode";

function ModeSwitcher() {
  const { mode, setMode } = useMode()!;

  return (
    <div className="ModeSwitcher__wrapper">
      <input
        type="checkbox"
        name="ModeSwitcher"
        id="ModeSwitcher"
        checked={mode}
        onChange={() => {
          setMode(!mode);
        }}
      />
      <label htmlFor="ModeSwitcher" className="ModeSwitcher__label">
        <span role="img" className="fa-sun">
          ☀
        </span>
        <span role="img" className="fa-moon">
          🌙
        </span>
        <div className="fa-ball"></div>
      </label>
    </div>
  );
}

export default ModeSwitcher;
