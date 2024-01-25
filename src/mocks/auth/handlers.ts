import { LoginRequest, RefreshRequest, SignUpRequest } from '@apis/auth/type';
import { API_PATH } from '@apis/constants';
import { HttpResponse, http } from 'msw';
import { personMap } from './data';
import { SignJWT, jwtVerify } from 'jose';
import { secretKey } from '@mocks/constants';

async function createJwt(email: string, expTime: string): Promise<string> {
  return new SignJWT({ email })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setIssuer('urn:example:issuer')
    .setAudience('urn:example:audience')
    .setExpirationTime(expTime)
    .sign(secretKey);
}

export const authHandlers = [
  http.post<never, LoginRequest>(API_PATH.AUTH.LOGIN, async ({ request }) => {
    const member = await request.json();
    const { email, password } = member;

    const person = personMap.get(email);

    await new Promise(resolve => setTimeout(resolve, 1000));

    if (!person) {
      return HttpResponse.json(
        {
          error: { message: '가입하지 않은 이메일이에요' },
        },
        {
          status: 401,
        },
      );
    }

    if (password !== person?.password) {
      return HttpResponse.json(
        {
          error: { message: '비밀번호가 일치하지 않아요' },
        },
        {
          status: 400,
        },
      );
    }

    // TODO: 토큰 만료
    if (password === person?.password) {
      const accessToken = await createJwt(email, '1h');
      const refreshToken = await createJwt(email, '30d');

      return HttpResponse.json(
        {
          accessToken,
          refreshToken,
        },
        {
          status: 200,
        },
      );
    }
  }),

  http.post<never, SignUpRequest>(API_PATH.AUTH.SIGN_UP, async ({ request }) => {
    const member = await request.json();
    const { email, password, name } = member;

    const person = personMap.get(email);

    await new Promise(resolve => setTimeout(resolve, 1000));

    if (person) {
      return HttpResponse.json(
        {
          error: { message: '이미 존재하는 이메일이에요.' },
        },
        {
          status: 409,
        },
      );
    }

    personMap.set(email, {
      entityId: personMap.size + 1,
      id: email,
      password,
      name,
      joinDate: new Date(),
    });
    const accessToken = await createJwt(email, '5m');
    const refreshToken = await createJwt(email, '15m');

    return HttpResponse.json(
      {
        accessToken,
        refreshToken,
      },
      {
        status: 201,
      },
    );
  }),

  http.post<never, RefreshRequest>(API_PATH.AUTH.REFRESH, async ({ request }) => {
    const { refreshToken } = await request.json();
    const verified = await jwtVerify(refreshToken, secretKey);

    const isExpired = verified.payload.exp! < Date.now() / 1000;

    if (isExpired) {
      return HttpResponse.json(
        {
          error: { message: '다시 로그인해주세요.' },
        },
        {
          status: 401,
        },
      );
    }

    const accessToken = await createJwt(verified.payload.email as string, '5m');

    return HttpResponse.json(
      { accessToken },
      {
        status: 200,
      },
    );
  }),
];
