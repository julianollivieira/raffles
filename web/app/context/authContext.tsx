import { AccessToken, User } from "@/types";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface Context {
  user: User | null;
  accessToken: AccessToken | null;
  logIn: (email: string, password: string) => Promise<void>;
  signUp: (
    name: string,
    email: string,
    password: string,
    terms: boolean
  ) => Promise<void>;
}

const AuthContext = createContext<Context>({
  user: null,
  accessToken: null,
  logIn: async () => {},
  signUp: async () => {},
});

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<Context["user"]>(null);
  const [accessToken, setAccessToken] = useState<Context["accessToken"]>(null);

  const logIn = async (email: string, password: string) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/log-in`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );
    const data = await response.json();
    if (response.status !== 200) throw data;

    setAccessToken(data);
  };

  const signUp = async (
    name: string,
    email: string,
    password: string,
    terms: boolean
  ) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/sign-up`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          terms,
        }),
      }
    );
    const data = await response.json();
    if (response.status !== 200) throw data;

    console.log("signUp response data:", data);
  };

  const getUser = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/me`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken?.access_token}`,
      },
    });
    const data = await response.json();
    if (response.status !== 200) throw data;

    setUser(data);
  };

  useEffect(() => {
    if (user === null && accessToken !== null) {
      getUser();
    }
  }, [accessToken]);

  // Logging
  useEffect(() => {
    console.log("🔑 Access token changed!", accessToken);
  }, [accessToken]);

  useEffect(() => {
    console.log("👤 User changed!", user);
  }, [user]);

  const value: Context = {
    user,
    accessToken,
    logIn,
    signUp,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthProvider, useAuth };
