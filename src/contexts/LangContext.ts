import { createContext } from "react";

type LangContextType = {
  lang: boolean;
  setLang: (value: boolean) => void;
};

const LangContext = createContext<LangContextType | undefined>(undefined);

export default LangContext;
