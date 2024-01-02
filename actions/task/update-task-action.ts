"use server";
import { revalidatePath } from "next/cache";
import { updateTask } from "@/database/models/tasks";

export async function updateTaskAction(formData: FormData) {
  const title = formData.get("title");
  const description = formData.get("description");
  const taskId = formData.get("taskId");

  const data = {
    title: title as string,
    description: description as string,
  };

  const entity = await updateTask(taskId as string, data);
  
  revalidatePath("/");
  return { data: entity };
}
