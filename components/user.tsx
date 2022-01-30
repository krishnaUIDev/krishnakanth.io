import { createContext, useContext } from "react";

export const UserContext = createContext(null);

export const useUser = (): void => {
  return useContext(UserContext);
};
