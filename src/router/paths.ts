const PUBLIC_PATH = {
  ROOT: '/',

  // Auth pages
  LOGIN: '/login',
  SIGN_UP: '/sign-up',

  NOT_FOUND: '/404',
};

const APP_PATH = {
  APP: '/app',

  REVIEW: '/review',
};

export const PATHS = {
  ...PUBLIC_PATH,
  ...APP_PATH,
} as const;
