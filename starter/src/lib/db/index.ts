import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import * as schema from "./schema";

const isProduction = process.env.NODE_ENV === "production";
const databaseUrl = process.env.DATABASE_URL;

// On Vercel, if no DATABASE_URL is provided, we must not throw a 500 on the whole app.
// We provide a dummy client that will fail gracefully on specific queries.
const client = createClient({
  url: databaseUrl || (isProduction ? "libsql://dummy-for-production-build.db" : "file:mastery.db"),
  authToken: process.env.DATABASE_AUTH_TOKEN,
});

export const db = drizzle(client, { schema });
