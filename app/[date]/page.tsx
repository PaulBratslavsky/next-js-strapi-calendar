import { findDay } from "@/database/models/calendar";
import { Card } from "@/components/ui/card";
import InitializeDayForm from "@/components/custom/InitializeDayForm";
import CreateTaskForm from "@/components/custom/CreateTaskForm";
import DeleteTaskForm from "@/components/custom/DeleteTaskForm";
import UpdateTaskForm from "@/components/custom/UpdateTaskForm";

interface ParamsProps {
  readonly params: {
    date: string;
  };
}

async function loadDateData(date: string) {
  return await findDay(date);
}

export default async function DynamicDateRoute({ params }: ParamsProps) {
  const data = await loadDateData(params.date);

  if (!data) return <InitializeDayForm date={params.date} />;

  return (
    <Card className="p-4 w-full min-h-[calc(100vh-2rem)]">
      <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data?.tasks &&
          data.tasks.map((task: any) => {
            return (
              <Card className="relative min-h-96 pb-14" key={task.id}>
                <UpdateTaskForm task={task} />
                <DeleteTaskForm id={task.id} date={params.date} />
              </Card>
            );
          })}
        <CreateTaskForm date={params.date} id={data.id} />
      </div>
    </Card>
  );
}
