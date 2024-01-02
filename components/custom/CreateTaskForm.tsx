import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { createTaskAction } from "@/actions/task/create-task-action";

export default function CreateTaskForm({ date }: { date: string }) {
  return (
    <form action={createTaskAction}>
      <Card className="flex justify-center items-center h-96">
        <input type="hidden" name="date" value={date} />
        <Button type="submit" disabled={false}>
          Add Task
        </Button>
      </Card>
    </form>
  );
}
