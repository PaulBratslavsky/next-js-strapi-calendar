import { Prisma } from "@prisma/client";
import prisma from "@/database/prisma";

export async function createTask(data: any) {
  const entry = await prisma.task.create({ data: data });
  return entry;
}

export async function updateTask(id: string, data: any) {
  try {
    const entry = await prisma.task.update({
      where: { id: id },
      data: data,
    });
    return entry;
  } catch (error) {
    const prismaError =
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2025";
    if (prismaError) return error.message;
    throw new Error("Error updating task");
  }
}

export async function deleteTask(id: string) {
  try {
    const entry = await prisma.task.delete({ where: { id: id } });
    return entry;
  } catch (error) {
    const prismaError =
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2025";
    if (prismaError) return error.message;
    throw new Error("Error deleting task");
  }
}

export async function getActiveTasks() {
  const entries = await prisma.task.findMany({
    where: { completed: false },
    orderBy: { createdAt: "desc" },
  });
  return entries;
}

export async function getActiveTasksCount() {
  const entries = await prisma.task.count({
    where: { completed: false },
  });
  return entries;
}
