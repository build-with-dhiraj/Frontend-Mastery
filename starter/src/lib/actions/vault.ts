"use server";

import { db } from "@/lib/db";
import { cherryPickedComponents } from "@/lib/db/schema";
import { revalidatePath } from "next/cache";
import { eq, desc } from "drizzle-orm";

export async function getVaultItems() {
  try {
    return await db.query.cherryPickedComponents.findMany({
      orderBy: [desc(cherryPickedComponents.createdAt)],
    });
  } catch (error) {
    console.error("Vault DB Error:", error);
    return []; // Return empty list instead of 500ing
  }
}

export async function addVaultItem(data: {
  title: string;
  sourceUrl?: string;
  codeSnippet?: string;
  prompt?: string;
  category?: string;
}) {
  try {
    // Placeholder user ID until auth is fully implemented
    const userId = "guest-user-id"; 

    await db.insert(cherryPickedComponents).values({
      id: crypto.randomUUID(),
      userId,
      title: data.title,
      sourceUrl: data.sourceUrl,
      codeSnippet: data.codeSnippet,
      prompt: data.prompt,
      category: data.category || "General",
      createdAt: new Date(),
    });

    revalidatePath("/vault");
  } catch (error) {
    console.error("Add Vault Item Error:", error);
    throw new Error("Database not connected. Please check your DATABASE_URL.");
  }
}

export async function deleteVaultItem(id: string) {
  await db.delete(cherryPickedComponents).where(eq(cherryPickedComponents.id, id));
  revalidatePath("/vault");
}
