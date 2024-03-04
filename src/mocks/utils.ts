import { jwtVerify } from 'jose';
import { DefaultBodyType, HttpResponse, StrictRequest } from 'msw';
import { secretKey } from './constants';

export async function validateAccessToken(request: StrictRequest<DefaultBodyType>) {
  const accessToken = request.headers.get('Authorization')?.split(' ')[1];
  let res: HttpResponse | undefined;

  if (!accessToken) {
    res = HttpResponse.json(
      {
        error: { message: '토큰이 없습니다' },
      },
      {
        status: 401,
      },
    );
  }

  try {
    accessToken && (await jwtVerify(accessToken, secretKey));
  } catch (e) {
    res = HttpResponse.json(
      {
        error: { code: 'E4011', message: '토큰이 만료되었습니다' },
      },
      {
        status: 401,
      },
    );
  }

  return res;
}
