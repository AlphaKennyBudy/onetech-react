import { createContext } from "react";

type ModeContextType = {
  mode: boolean;
  setMode: (value: boolean) => void;
};

const ModeContext = createContext<ModeContextType | undefined>(undefined);

export default ModeContext;
