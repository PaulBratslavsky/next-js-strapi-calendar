import qs from "qs";
import { flattenAttributes } from "@/lib/utils";

import { Prisma } from "@prisma/client";
import prisma from "@/database/prisma";

export async function createTask(data: any) {
  const url = process.env.STRAPI_URL || "http://127.0.0.1:1337";
  const path = "/api/tasks";

  try {
    const response = await fetch(url + path, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: data,
      }),
    });
    const entry = await response.json();
    const flattened = flattenAttributes(entry.data);
    return flattened;
  } catch (error) {
    console.log(error);
  }
}

export async function updateTask(id: string, data: any) {
  const url = process.env.STRAPI_URL || "http://127.0.0.1:1337";
  const path = "/api/tasks/";
  try {
    const response = await fetch(url + path + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: data }),
    });
    const entry = await response.json();
    const flattened = flattenAttributes(entry.data);
    return flattened;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteTask(id: string) {
  const url = process.env.STRAPI_URL || "http://127.0.0.1:1337";
  const path = "/api/tasks/";
  try {
    const response = await fetch(url + path + id, {
      method: "DELETE",
    });
    const entry = await response.json();
    const flattened = flattenAttributes(entry.data);
    return flattened;
  } catch (error) {
    console.log(error);
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
