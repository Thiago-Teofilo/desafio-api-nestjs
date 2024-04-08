import 'dotenv/config';
import { z } from 'zod';

const envSchema = z.object({
  // Server
  NODE_ENV: z.enum(['dev', 'test', 'production']).default('dev'),
  PORT: z.coerce.number().default(3000),

  // MySQL Database
  DATABASE_HOST: z.string().default('localhost'),
  DATABASE_PORT: z.coerce.number().default(3306),
  DATABASE_USERNAME: z.string().default('root'),
  DATABASE_PASSWORD: z.string().nullable().default(null),
  DATABASE_NAME: z.string().default('db'),
});

const _env = envSchema.safeParse(process.env);

if (_env.success === false) {
  console.error('❌ Invalid environment variables', _env.error.format());

  throw new Error('Invalid environment variables.');
}

export const env = _env.data;