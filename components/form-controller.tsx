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
import { PhonePrefixSelector } from "@/components/ui/phone-prefix-selector";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  companyName: z.string().optional(),
  email: z.string().email({
    message: "Please enter a valid email",
  }),
  phonePrefix: z.string().min(1, {
    message: "Please select a phone prefix",
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
      companyName: "",
      email: "",
      phonePrefix: "+34",
      phone: "",
      groupType: "",
      approximateDate: "",
      estimatedPeople: "",
      message: "",
    },
  });

  const groupType = form.watch("groupType");
  const showCompanyField = groupType === "company-team-building";

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
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
            phone: `${data.phonePrefix} ${data.phone}`,
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
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {/* Name Field */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-950">
                  Name <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="Your name..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Group Type Field */}
          <FormField
            control={form.control}
            name="groupType"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-950">
                  Group type <span className="text-red-500">*</span>
                </FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger className="w-full text-gray-600">
                      <SelectValue placeholder="Select a group type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="company-team-building">
                      Company / Team Building
                    </SelectItem>
                    <SelectItem value="family">Family</SelectItem>
                    <SelectItem value="friends">Friends</SelectItem>
                    <SelectItem value="school">School</SelectItem>
                    <SelectItem value="sport-team">Sport Team</SelectItem>
                    <SelectItem value="hen-stag">HEN / STAG</SelectItem>
                    <SelectItem value="tour-operator-agency">
                      Tour Operator / Agency
                    </SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Company Name Field - Only shows when Company / Team Building is selected */}
          {showCompanyField && (
            <FormField
              control={form.control}
              name="companyName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-950">
                    Company name{" "}
                    <span className="text-gray-400 font-normal">
                      (optional)
                    </span>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Your company name..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          {/* Email Field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-950">
                  Email <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="johndoe@gmail.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Phone Prefix + Phone Number Fields */}
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
          <FormDescription className="text-sm text-slate-600 -mt-2">
            We will contact you to plan your perfect team building activity.
          </FormDescription>

          {/* Approximate Date Field */}
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

          {/* Estimated People Field */}
          <FormField
            control={form.control}
            name="estimatedPeople"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-950">
                  Estimated number of people{" "}
                  <span className="text-gray-400 font-normal">(optional)</span>
                </FormLabel>
                <FormControl className="text-gray-600">
                  <Input type="number" placeholder="0" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Message Field */}
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
            699 19 91 58
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
            699 19 91 58
          </p>
        </div>
      )}
    </Form>
  );
}
