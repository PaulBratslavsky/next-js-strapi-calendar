import { Button } from "@/components/ui/button";
import { deleteTaskAction } from "@/actions/task/delete-task-action";

export default function DeleteTaskForm({ id, date }: { id: string, date: string}) {
  return (
    <div className="absolute bottom-0 p-2 w-full">
      <form action={deleteTaskAction}>
        <Button type="submit" className="w-full">
          Delete Task
        </Button>
        <input type="hidden" name="taskId" value={id} />
        <input type="hidden" name="date" value={date} />
      </form>
    </div>
  );
}
