"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "lucide-react";

import { cn } from "@/lib/utils";

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-b last:border-b-0", className)}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-col flex-1 items-center justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:opacity-0 [&[data-state=open]>svg]:scale-90",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon className="h-12 w-12 cursor-pointer hover:scale-110 text-muted-foreground shrink-0 mt-4 transition-all duration-300 ease-in-out" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
      {...props}
    >
      <div className={cn("pt-0 pb-4", className)}>{children}</div>

      {/* Chevron para cerrar - con animación de entrada */}
      <div className="flex justify-center pt-4 pb-2 animate-in fade-in-0 slide-in-from-top-2 duration-300">
        <ChevronDownIcon
          className="h-12 w-12 text-muted-foreground shrink-0 rotate-180 transition-all duration-300 hover:scale-110 cursor-pointer"
          onClick={(e) => {
            const trigger = e.currentTarget
              .closest('[data-slot="accordion-item"]')
              ?.querySelector('[data-slot="accordion-trigger"]') as HTMLElement;
            trigger?.click();
          }}
        />
      </div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
