"use server";
import { revalidatePath } from "next/cache";
import { createTask } from "@/database/models/tasks";

export async function createTaskAction(formData: FormData) {
  const date = formData.get("date");
  const entity = await createTask({
    title: "New Task",
    calendarDay: {
      connect: { date: date },
    },
  });
  revalidatePath("/" + date);
  return { data: entity };
}
