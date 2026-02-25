/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Check, LoaderCircle, MoveRight, PhoneCall } from "lucide-react";
import { PhonePrefixSelector } from "@/components/ui/phone-prefix-selector";
import { useEffect, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

const bookingFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  phonePrefix: z.string().min(1, {
    message: "Please select a phone prefix",
  }),
  phone: z.string().min(7, {
    message: "Phone number must be at least 7 characters",
  }),
  activityName: z.string(),
  participants: z.string().min(1, {
    message: "Please enter the number of participants",
  }),
  date: z.string().min(1, {
    message: "Please select a date",
  }),
  message: z.string().optional(),
  optim: z.boolean().refine((val) => val === true, {
    message: "You must accept the privacy policy",
  }),
});

interface ActivityBookingFormProps {
  activityName: string;
}

export function ActivityBookingForm({
  activityName,
}: ActivityBookingFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(false);

  const form = useForm<z.infer<typeof bookingFormSchema>>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      name: "",
      phonePrefix: "+34",
      phone: "",
      activityName: activityName,
      participants: "",
      date: "",
      message: "",
    },
  });

  useEffect(() => {
    form.setValue("activityName", activityName);
  }, [activityName, form]);

  useEffect(() => {
    const handler = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      form.setValue("activityName", customEvent.detail);
    };
    window.addEventListener("notify-activity", handler);
    return () => window.removeEventListener("notify-activity", handler);
  }, [form]);

  const onSubmit = async (data: z.infer<typeof bookingFormSchema>) => {
    setIsLoading(true);
    setIsSuccess(false);
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL || "",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...data,
            phone: `${data.phonePrefix.replace("+", "")} ${data.phone}`,
          }),
        },
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
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 bg-white rounded-lg shadow-lg py-8 px-4 h-fit w-full"
        >
          {/* Full Name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-950">
                  Full name <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="Your full name..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Phone Prefix + Phone Number */}
          <div className="grid grid-cols-3 gap-3">
            <FormField
              control={form.control}
              name="phonePrefix"
              render={({ field }) => (
                <FormItem className="col-span-1">
                  <FormLabel className="text-gray-950">
                    Prefix <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <PhonePrefixSelector
                      value={field.value}
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel className="text-gray-950">
                    Phone number <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="622 333 444" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Activity Name (read-only) */}
          <FormField
            control={form.control}
            name="activityName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-950">Activity</FormLabel>
                <FormControl>
                  <Input {...field} disabled className="disabled:opacity-70" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Number of Participants */}
          <FormField
            control={form.control}
            name="participants"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-950">
                  Number of participants <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input type="number" placeholder="0" min={1} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Date */}
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-950">
                  Date <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Message (optional) */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-950">
                  Message{" "}
                  <span className="text-gray-400 font-normal">(optional)</span>
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

          {/* Privacy Policy Checkbox */}
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

          {/* Submit Button */}
          <Button type="submit" className="w-full">
            {isLoading === true && (
              <p className="flex items-center gap-x-2">
                Sending information <LoaderCircle className="animate-spin" />
              </p>
            )}
            {!isLoading && (
              <p className="flex items-center gap-x-2">
                Book now <MoveRight />
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
            699 19 91 58
          </p>
        </div>
      )}
      {isSuccess && (
        <div className="flex flex-col items-center p-8 space-y-4 text-sm text-center text-slate-600">
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
            699 19 91 58
          </p>
        </div>
      )}
    </Form>
  );
}
