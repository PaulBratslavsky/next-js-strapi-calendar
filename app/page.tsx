import { redirect } from 'next/navigation'
import { dateToString } from "@/lib/utils";

export default function HomeRoute() {
  return redirect(dateToString(new Date()));
}
