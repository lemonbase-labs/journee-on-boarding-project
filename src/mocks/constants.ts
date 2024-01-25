import { generateSecret } from 'jose';

export const secretKey = await generateSecret('HS256');
