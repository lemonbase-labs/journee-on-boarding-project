interface Tokens {
  accessToken: string | null;
}

const tokens: Tokens = {
  accessToken: null,
};

export function setAccessToken(token: string) {
  tokens.accessToken = token;
}

export function getAccessToken() {
  return tokens.accessToken;
}

export function removeAccessToken() {
  tokens.accessToken = null;
}
