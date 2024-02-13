"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const TodoFormSchema = z.object({
  todo: z.string().min(1).max(50)
});

type TTodoFormSchema = z.infer<typeof TodoFormSchema>;

const TodoForm = () => {
  const form = useForm<TTodoFormSchema>({
    resolver: zodResolver(TodoFormSchema),
    defaultValues: {
      todo: "",
    },
  });

  function onSubmit(values: TTodoFormSchema) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="todo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Todo</FormLabel>
              <FormControl>
                <Input placeholder="What you want todo today?" {...field} />
              </FormControl>
              {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full font-bold">
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default TodoForm;
