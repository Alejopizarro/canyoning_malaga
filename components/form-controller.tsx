/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Check, LoaderCircle, MoveRight, PhoneCall } from "lucide-react";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email",
  }),
  phone: z.string().min(7, {
    message: "Phone number must be at least 7 characters",
  }),
  groupType: z.string().min(1, {
    message: "Please select a group type",
  }),
  approximateDate: z.string().max(30, {
    message: "Date must be less than 30 characters",
  }),
  estimatedPeople: z.string().optional(),
  message: z.string().optional(),
  optim: z.boolean().refine((val) => val === true, {
    message: "You must accept the privacy policy",
  }),
});

export function FormController() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      groupType: "",
      approximateDate: "",
      estimatedPeople: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    setIsSuccess(false);
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL || "",
        {
          method: "POST",
          mode: "no-cors", // importante para evitar problemas de CORS con Apps Script
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      console.log("Form submitted:", response.json, data);
      setIsSuccess(true);
      setIsLoading(false);

      form.reset();

      setTimeout(() => {
        setIsSuccess(false);
      }, 10000);
    } catch (error: any) {
      setError(true);
      console.error(error.message);
    }
  };

  return (
    <Form {...form}>
      {!error && !isSuccess && (
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-950">Company name</FormLabel>
                <FormControl>
                  <Input placeholder="Your business here..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-950">Email</FormLabel>
                <FormControl>
                  <Input placeholder="johndoe@gmail.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-950">Phone number</FormLabel>
                <FormControl>
                  <Input placeholder="622333444" {...field} />
                </FormControl>
                <FormDescription className="text-sm text-slate-600">
                  We will contact you to plan your perfect team building
                  activity.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="groupType"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-950">Group type</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger className="w-full text-gray-600">
                      <SelectValue placeholder="Select a group type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="big-companies">
                      Company / Team Building
                    </SelectItem>
                    <SelectItem value="small-business">
                      Small business
                    </SelectItem>
                    <SelectItem value="open-group">Open group</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="approximateDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-950">
                  Approximate date
                </FormLabel>
                <FormControl>
                  <Input placeholder="DD/MM/YYYY" maxLength={30} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="estimatedPeople"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-950">
                  Estimated number of people (optional)
                </FormLabel>
                <FormControl className="text-gray-600">
                  <Input type="number" placeholder="0" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-950">
                  Message (optional)
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Write here anything you think is necessary"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="optim"
            render={({ field }) => (
              <FormItem className="flex items-start 2xl:items-center mb-4">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel className="font-light text-slate-600">
                  <p>
                    I have read and accept the{" "}
                    <Link
                      className="font-medium text-slate-950 text-decoration-line: underline"
                      href="/quienes-somos/politica-de-privacidad"
                    >
                      privacy policy.
                    </Link>
                  </p>
                </FormLabel>
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            {isLoading === true && (
              <p className="flex items-center gap-x-2">
                Sending information <LoaderCircle className="animate-spin" />
              </p>
            )}
            {!isLoading && (
              <p className="flex items-center gap-x-2">
                I want to receive more information <MoveRight />
              </p>
            )}
          </Button>
        </form>
      )}
      {error && (
        <div className="flex flex-col space-y-4 text-xl text-slate-950 font-medium">
          <p>There was a problem submitting the form</p>
          <p>You can contact us at the following number</p>
          <p className="flex items-center gap-x-2 text-xl text-slate-600 font-semibold">
            <PhoneCall />
            951 68 13 83
          </p>
        </div>
      )}
      {isSuccess && (
        <div className="flex flex-col items-center p-8 space-y-4 text-sm text-center text-slate-600 ">
          <Check size={92} className="border-2 rounded-full p-3" />
          <p className="text-lg font-semibold text-slate-950">
            Form submitted successfully
          </p>
          <div>
            <p>We will contact you within the next 24/48 business hours.</p>
            <p>
              If you have any questions, you can reach us at the following
              number
            </p>
          </div>
          <p className="flex items-center gap-x-2 text-xl text-slate-600 font-semibold">
            <PhoneCall />
            951 68 13 83
          </p>
        </div>
      )}
    </Form>
  );
}
