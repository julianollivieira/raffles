import { AccessToken, User } from "@/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const logIn = async (email: string, password: string): Promise<AccessToken> => {
  const response = await fetch(`${API_URL}/api/log-in`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  const data = await response.json();
  if (response.status !== 200) throw data;

  return data;
};

const signUp = async (
  name: string,
  email: string,
  password: string,
  terms: boolean
): Promise<void> => {
  const response = await fetch(`${API_URL}/api/sign-up`, {
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
  });

  const data = await response.json();
  if (response.status !== 200) throw data;
};

const getUser = async (accessToken: AccessToken | null): Promise<User> => {
  const response = await fetch(`${API_URL}/api/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken?.access_token}`,
    },
  });

  const data = await response.json();
  if (response.status !== 200) throw data;

  return data;
};

const logOut = async (accessToken: AccessToken | null): Promise<void> => {
  const response = await fetch(`${API_URL}/api/log-out`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken?.access_token}`,
    },
  });

  const data = await response.json();
  if (response.status !== 200) throw data;
};

export { logIn, signUp, getUser, logOut };
