interface User {
  name: string;
  email: string;
  email_verified_at: Date; // ?
}

interface AccessToken {
  access_token: string;
  token_type: string;
  expires_in: number;
}

export type { User, AccessToken };
