"use client";
import type { Task } from "@prisma/client";
import { useForm } from "react-hook-form";
import { CustomInput } from "@/components/custom/CustomInput";
import { CustomTextarea } from "@/components/custom/CustomTextarea";
import { PencilIcon } from "@/components/icons/PencilIcon";
import {
  Form,
  FormField,
  FormMessage,
  FormControl,
  FormItem,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { updateTaskAction } from "@/actions/task/update-task-action";

export default function UpdateTaskForm({ task }: { task: Task }) {
  const form = useForm({
    defaultValues: {
      title: task.title,
      description: task.description || "",
    },
  });
  return (
    <div className="p-2">
      <Form {...form}>
        <form action={updateTaskAction}>
          <Button
            value="updateTask"
            name="_action"
            type="submit"
            className="w-8 h-8 p-0 float-right absolute top-2 right-2 bg-green-700 hover:bg-green-600"
          >
            <PencilIcon />
          </Button>
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <CustomInput
                    placeholder="Task title"
                    {...field}
                    className="text-lg mb-8"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormControl className="-mt-6">
                  <CustomTextarea placeholder="Description" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <input type="hidden" name="taskId" value={task.id} />
        </form>
      </Form>
    </div>
  );
}
