export type Tokens = {
  accessToken: string;
  refreshToken: string;
};

export type LoginRequest = {
  email: string;
  password: string;
};

export type SignUpRequest = {
  email: string;
  password: string;
  userName: string;
};

export type RefreshRequest = {
  refreshToken: string;
};
