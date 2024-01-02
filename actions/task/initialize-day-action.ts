"use server";
import { revalidatePath } from 'next/cache'
import { createDay } from "@/database/models/calendar";

export async function initializeDayAction(formData: FormData) {
  const date = formData.get("date");
  const entity = await createDay(date as string);
  revalidatePath("/" + date);
  return { data: entity }
}