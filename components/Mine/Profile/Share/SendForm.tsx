"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useCurrentUserProductStore } from "@/store/zustand";

const FormSchema = z.object({
  email: z.string().email({
    message: "Invalid email format",
  }),
});

export function SendForm() {
  const { currentUserProduct } = useCurrentUserProductStore();

  // console.log("currentUserProduct", currentUserProduct);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast.success("Your gift has been successfully sent to your friend.");
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-2/3 space-y-6 mx-auto"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="enter your friend email"
                  {...field}
                  className="rounded-xl"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <button
          className="bg-foreground rounded-2xl p-3 w-full text-white font-medium mx-auto block"
          type="submit"
        >
          Send
        </button>
      </form>
    </Form>
  );
}
