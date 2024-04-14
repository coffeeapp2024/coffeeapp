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
import { useCurrentUserProductStore, useUserDataStore } from "@/store/zustand";
import {
  addProductToUserByEmail,
  removeProductAndUpdateUser,
} from "@/lib/productActions";

const FormSchema = z.object({
  email: z.string().email({
    message: "Invalid email format",
  }),
});

export function SendForm() {
  const { currentUserProduct } = useCurrentUserProductStore();
  const { userData, setUserData } = useUserDataStore();

  // console.log("currentUserProduct", currentUserProduct);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    if (!userData || !currentUserProduct) {
      toast.error("Something went wrong.");
      return;
    }
    if (userData.email === data.email) {
      toast.error("You cannot send a gift to yourself!");
      return;
    }

    const isProductAdded = await addProductToUserByEmail(
      data.email,
      currentUserProduct
    );
    if (!isProductAdded) return;

    await removeProductAndUpdateUser(
      userData,
      setUserData,
      currentUserProduct.id
    );
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
