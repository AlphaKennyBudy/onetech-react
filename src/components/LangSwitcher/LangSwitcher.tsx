import React from "react";

import "./LangSwitcher.css";
import useLang from "../../hooks/useLang";

function LangSwitcher() {
  const { lang, setLang } = useLang()!;
  return (
    <div className="LangSwitcher__wrapper">
      <input
        type="checkbox"
        name="LangSwitcher"
        id="LangSwitcher"
        checked={lang}
        onChange={() => setLang(!lang)}
      />
      <label htmlFor="LangSwitcher" className="LangSwitcher__label">
        <span className="fa-sun">RU</span>
        <span className="fa-moon">EN</span>
        <div className="fa-ball"></div>
      </label>
    </div>
  );
}

export default LangSwitcher;
