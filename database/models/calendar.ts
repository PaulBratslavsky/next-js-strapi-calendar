import qs from "qs";
import { flattenAttributes } from "@/lib/utils";

export async function findDay(date: string) {
  const url = process.env.STRAPI_URL || "http://127.0.0.1:1337";
  const path = "/api/entries";
  const query = qs.stringify({
    filters: {
      date: date,
    },
  });
  try {
    const response = await fetch(url + path + "?" + query);
    const entries = await response.json();
    const flattened = flattenAttributes(entries.data);
    return flattened[0];
  } catch (error) {
    console.log(error);
  }
}

export async function createDay(date: string) {
  const url = process.env.STRAPI_URL || "http://127.0.0.1:1337";
  const path = "/api/entries";
  try {
    const response = await fetch(url + path, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: { date: date },
      }),
    });
    const entries = await response.json();
    const flattened = flattenAttributes(entries.data);
    return flattened;
  } catch (error) {
    console.log(error);
  }
}
