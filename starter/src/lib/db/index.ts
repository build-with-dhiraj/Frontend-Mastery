import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

const isProduction = process.env.NODE_ENV === "production";
const databaseUrl = process.env.DATABASE_URL;

// On Vercel, if no DATABASE_URL is provided, we fail gracefully with a log.
if (!databaseUrl && isProduction) {
  console.warn("CRITICAL: DATABASE_URL is missing in production environment.");
}

const queryClient = postgres(databaseUrl || "postgres://localhost:5432/mastery_local");
export const db = drizzle(queryClient, { schema });
