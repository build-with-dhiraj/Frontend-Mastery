import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

const databaseUrl = process.env.DATABASE_URL;

// We use a dummy URL for build time if DATABASE_URL is missing
const queryClient = postgres(databaseUrl || "postgres://dummy:dummy@localhost:5432/dummy");
export const db = drizzle(queryClient, { schema });
