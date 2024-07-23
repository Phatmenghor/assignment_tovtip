// src/types/apiResponse.ts

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  phone: string;
  countryCode: string;
  createdDt: string;
  bio?: string | null;
  avatar?: string | null;
  city?: string | null;
  state?: string | null;
  address1?: string | null;
  address2?: string | null;
  socialGoogleId?: string | null;
  role: {
    id: number;
    code: string;
    name: string;
  };
}

export interface AuthResponse {
  message: string;
  data: {
    status: number;
    token_type: string;
    expires_in: number;
    access_token: string;
    accessToken: string;
    refreshToken: string;
    sessionId: string;
    user: User;
  };
}
