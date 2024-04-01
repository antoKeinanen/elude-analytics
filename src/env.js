import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    DATABASE_URL: z.string(),
    KAFKA_BROKERS: z.string(),
    REDIS_PASSWORD: z.string(),
    NEXTAUTH_SECRET: z.string(),
    NEXTAUTH_URL: z.string(),
    GITHUB_CLIENT_ID: z.string(),
    GITHUB_CLIENT_SECRET: z.string(),
  },

  client: {
    // NEXT_PUBLIC_CLIENTVAR: z.string(),
  },

  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
    KAFKA_BROKERS: process.env.KAFKA_BROKERS,
    REDIS_PASSWORD: process.env.REDIS_PASSWORD,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
    GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
  },

  skipValidation: !!process.env.SKIP_ENV_VALIDATION,

  emptyStringAsUndefined: true,
});
