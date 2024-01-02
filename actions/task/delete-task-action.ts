"use server";
import { revalidatePath } from 'next/cache'
import { deleteTask } from "@/database/models/tasks";

export async function deleteTaskAction(formData: FormData) {
  const date = formData.get("date");
  const taskId = formData.get("taskId");
  const entity = await deleteTask(taskId as string);
  revalidatePath("/" + date);
  return { data: entity }
}