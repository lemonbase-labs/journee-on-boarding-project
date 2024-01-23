import { LoginRequest, RefreshRequest, SignUpRequest } from '@apis/auth/type';
import { API_PATH } from '@apis/constants';
import { HttpResponse, http } from 'msw';
import { personMap } from './data';

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

    if (password === person?.password) {
      return HttpResponse.json(
        {
          accessToken:
            'eyJhbGciOiJIUzI1NiJ9.eyJtZW1iZXJJZCI6MSwiZXhwIjoxNjkxOTIyNjAzfQ.vCxUGMiv9bnb4JQGwk6NVx6kHi5hG80tDxafIvrfKbA',
          refreshToken:
            'eyJhbGciOiJIUzI1NiJ9.eyJtZW1iZXJJZCI6MSwiZXhwIjoxNjkxOTIyNjAzfQ.vCxUGMiv9bnb4JQGwk6NVx6kHi5hG80tDxafIvrfKbA',
        },
        {
          status: 200,
        },
      );
    }
  }),

  http.post<never, SignUpRequest>(API_PATH.AUTH.SIGN_UP, async ({ request }) => {
    const member = await request.json();
    const { email, password, userName } = member;

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
      userName,
      joinDate: new Date(),
    });
    return HttpResponse.json(
      {
        accessToken:
          'accessTokeneyJhbGciOiJIUzI1NiJ9.eyJtZW1iZXJJZCI6MSwiZXhwIjoxNjkxOTIyNjAzfQ.vCxUGMiv9bnb4JQGwk6NVx6kHi5hG80tDxafIvrfKbA',
        refreshToken:
          'refreshTokeneyJhbGciOiJIUzI1NiJ9.eyJtZW1iZXJJZCI6MSwiZXhwIjoxNjkxOTIyNjAzfQ.vCxUGMiv9bnb4JQGwk6NVx6kHi5hG80tDxafIvrfKbA',
      },
      {
        status: 201,
      },
    );
  }),

  http.post<never, RefreshRequest>(API_PATH.AUTH.REFRESH, async ({ request }) => {
    const { refreshToken } = await request.json();

    await new Promise(resolve => setTimeout(resolve, 1000));

    if (refreshToken === 'invalid') {
      return HttpResponse.json(
        {
          error: { message: '다시 로그인해주세요.' },
        },
        {
          status: 401,
        },
      );
    }

    return HttpResponse.json(
      {
        accessToken:
          'accessTokeneyJhbGciOiJIUzI1NiJ9.eyJtZW1iZXJJZCI6MSwiZXhwIjoxNjkxOTIyNjAzfQ.vCxUGMiv9bnb4JQGwk6NVx6kHi5hG80tDxafIvrfKbA',
      },
      {
        status: 200,
      },
    );
  }),
];
