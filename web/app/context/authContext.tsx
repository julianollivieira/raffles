import { AccessToken, User } from "@/types";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  logIn as logInRequest,
  signUp as signUpRequest,
  getUser as getUserRequest,
  logOut as logOutRequest,
} from "@/services/auth";
import { useLocalStorage } from "@mantine/hooks";

interface Context {
  user: User | null;
  userLoaded: boolean;
  accessToken: AccessToken | null;
  logIn: (email: string, password: string) => Promise<void>;
  signUp: (
    name: string,
    email: string,
    password: string,
    terms: boolean
  ) => Promise<void>;
  getUser: () => Promise<void>;
  logOut: () => Promise<void>;
}

const AuthContext = createContext<Context>({
  user: null,
  userLoaded: false,
  accessToken: null,
  logIn: async () => {},
  signUp: async () => {},
  getUser: async () => {},
  logOut: async () => {},
});

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [userLoaded, setUserLoaded] = useState<boolean>(false);
  const [user, setUser] = useState<Context["user"]>(null);
  const [accessToken, setAccessToken] = useLocalStorage<Context["accessToken"]>(
    {
      key: "accessToken",
      defaultValue: null,
    }
  );

  const logIn = async (email: string, password: string) => {
    const newAccesToken = await logInRequest(email, password);
    setAccessToken(newAccesToken);
  };

  const signUp = async (
    name: string,
    email: string,
    password: string,
    terms: boolean
  ) => {
    await signUpRequest(name, email, password, terms);
  };

  const getUser = async () => {
    const newUser = await getUserRequest(accessToken);
    setUser(newUser);
  };

  const logOut = async () => {
    await logOutRequest(accessToken);
    setUser(null);
    setAccessToken(null);
  };

  useEffect(() => {
    if (user === null && accessToken !== null) {
      getUser().then(() => {
        setUserLoaded(true);
      });
    }

    if (user === null && accessToken === null) {
      setUserLoaded(true);
    }
  }, [user, accessToken]);

  useEffect(() => {
    console.log("🔑 Access token changed!", accessToken);
  }, [accessToken]);

  useEffect(() => {
    console.log("👤 User changed!", user);
  }, [user]);

  const value: Context = {
    user,
    userLoaded,
    accessToken,
    logIn,
    signUp,
    getUser,
    logOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthProvider, useAuth };
