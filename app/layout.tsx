import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextCalendar from "@/components/custom/NextCalendar";
import AllActiveTasks from "@/components/custom/AllActiveTask";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayoutRoute({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex-row items-start gap-4 m-4 md:flex">
          <aside className="grid grid-cols-1 gap-4">
            <NextCalendar />
            <AllActiveTasks />
          </aside>
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
