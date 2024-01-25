import { authHandlers } from './auth/handlers';
import { reviewHandlers } from './review/handlers';

export const handlers = [...authHandlers, ...reviewHandlers];
