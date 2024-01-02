import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { initializeDayAction } from "@/actions/task/initialize-day-action";

export default function InitializeDayForm({ date }: { readonly date: string }) {
  return (
    <form action={initializeDayAction}>
      <Card className="flex justify-center items-center h-96">
        <input type="hidden" name="date" value={date} />
        <Button type="submit" disabled={false}>
          Get Started
        </Button>
      </Card>
    </form>
  );
}
