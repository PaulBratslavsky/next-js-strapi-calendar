"use client";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { dateToString } from "@/lib/utils";

export default function NextCalendar() {
  const history = useRouter();
  const params = useParams();

  const selectedDate = params?.date
    ? new Date(params.date.toString().split("-").join("/"))
    : new Date();

  const [ _, setDate] = useState<Date>(selectedDate);

  function handleSelect(date: Date) {
    if (dateToString(date)) {
      setDate(selectedDate);
      history.push(dateToString(date));
    }
  }

  return (
    <div className="rounded-md border p-1 flex-row justify-center items-center">
      <header className="flex justify-center items-center my-2">
        <h1 className="text-2xl">{selectedDate.toDateString()}</h1>
      </header>
      <Calendar
        mode="single"
        selected={selectedDate}
        onSelect={handleSelect as any}
        month={selectedDate}
        onMonthChange={handleSelect}
      />
    </div>
  );
}
