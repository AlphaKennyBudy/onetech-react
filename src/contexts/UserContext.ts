import { createContext } from "react";

type UserContextType = {
  token: string;
  setToken: (value: string) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export default UserContext;
