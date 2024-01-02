"use server";
import { revalidatePath } from "next/cache";
import { createTask } from "@/database/models/tasks";

export async function createTaskAction(id: string, formData: FormData) {
  const date = formData.get("date");
  const entity = await createTask({
    title: "New Task",
    entry: { connect: [{ id: id }]},
  });
  revalidatePath("/" + date);
  return { data: entity };
}
