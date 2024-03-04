import { Person, personIDMap, personMap } from './../auth/data';
import { API_PATH } from '@apis/constants';
import { personList } from '@mocks/auth/data';
import { HttpResponse, http } from 'msw';
import { reviewCycleList } from './data';
import { ReviewCycleRequest } from '@apis/review/type';
import { JWTPayload, JWTVerifyResult, jwtVerify } from 'jose';
import { v4 as uuidv4 } from 'uuid';
import { validateAccessToken } from '@mocks/utils';
import { secretKey } from '@mocks/constants';

export const reviewHandlers = [
  http.get(API_PATH.MEMBERS, async ({ request }) => {
    const res = await validateAccessToken(request);

    if (res) {
      return res;
    }

    return HttpResponse.json({
      members: personList.map(m => ({
        entityId: m.entityId,
        name: m.name,
      })),
    });
  }),

  http.get(API_PATH.REVIEW_CYCLES, async ({ request }) => {
    const res = await validateAccessToken(request);

    if (res) {
      return res;
    }

    const formatted = reviewCycleList.map(r => ({
      entityId: r.entityId,
      name: r.name,
      creator: r.creator.name,
      reviewees: r.reviewees.map(m => ({ entityId: m.entityId, name: m.name })),
      question: {
        title: r.question.title,
        description: r.question.description,
      },
      updatedAt: r.updatedAt,
    }));

    return HttpResponse.json({
      reviewCycles: formatted,
    });
  }),

  http.post<never, ReviewCycleRequest>(API_PATH.REVIEW_CYCLES, async ({ request }) => {
    const res = await validateAccessToken(request);

    if (res) {
      return res;
    }

    const accessToken = request.headers.get('Authorization')?.split(' ')[1];
    const verified = accessToken && (await jwtVerify(accessToken, secretKey));
    const email = (verified as JWTVerifyResult<JWTPayload>).payload.email;

    const req = await request.json();
    const reviewees = req.reviewees.map(id => personIDMap.get(id) ?? ({} as Person));

    reviewCycleList.push({
      entityId: uuidv4(),
      name: req.name,
      creator: personMap.get(email as string) ?? ({} as Person),
      reviewees: reviewees,
      question: {
        title: req.title,
        description: req.description,
      },
      updatedAt: new Date().toISOString(),
    });

    return HttpResponse.json(
      {
        reviewCycle: reviewCycleList[reviewCycleList.length - 1],
      },
      {
        status: 201,
      },
    );
  }),

  http.delete<{ entityId: string }>(`${API_PATH.REVIEW_CYCLES}/:entityId`, async ({ request, params }) => {
    const res = await validateAccessToken(request);

    if (res) {
      return res;
    }

    const index = reviewCycleList.splice(
      reviewCycleList.findIndex(r => r.entityId === params.entityId),
      1,
    );

    if (index.length === 0) {
      return HttpResponse.json(
        {
          error: { message: '리뷰 사이클이 존재하지 않습니다' },
        },
        {
          status: 404,
        },
      );
    }

    return HttpResponse.json({
      status: 200,
    });
  }),

  http.put<{ entityId: string }, ReviewCycleRequest>(
    `${API_PATH.REVIEW_CYCLES}/:entityId`,
    async ({ request, params }) => {
      const res = await validateAccessToken(request);

      if (res) {
        return res;
      }

      const index = reviewCycleList.findIndex(r => r.entityId === params.entityId);

      if (index === -1) {
        return HttpResponse.json(
          {
            error: { message: '리뷰 사이클이 존재하지 않습니다' },
          },
          {
            status: 404,
          },
        );
      }

      const req = await request.json();
      const prev = reviewCycleList[index];

      reviewCycleList[index] = {
        entityId: params.entityId,
        name: req.name,
        creator: prev.creator,
        reviewees: req.reviewees.map(id => personIDMap.get(id) ?? ({} as Person)),
        question: {
          title: req.title,
          description: req.description,
        },
        updatedAt: new Date().toISOString(),
      };

      return HttpResponse.json(
        {
          entityId: params.entityId,
        },
        {
          status: 200,
        },
      );
    },
  ),
];
