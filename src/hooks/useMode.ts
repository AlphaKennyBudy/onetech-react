import { useContext } from "react";
import ModeContext from "../contexts/ModeContext";

const useMode = () => useContext(ModeContext);

export default useMode;
