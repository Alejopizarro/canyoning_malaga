"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";

import { cn } from "@/lib/utils";

// Radix doesn't render the children of a closed item (even with forceMount),
// so search engines would only see the triggers. Radix keeps handling state,
// triggers and keyboard navigation; AccordionContent below always renders its
// content and collapses it with CSS when closed.

const AccordionOpenContext = React.createContext<(value: string) => boolean>(
  () => false
);

const AccordionItemContext = React.createContext<{
  value: string;
  triggerId: string;
  contentId: string;
} | null>(null);

function Accordion(props: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  const isMultiple = props.type === "multiple";
  const isControlled = props.value !== undefined;
  const [uncontrolledValue, setUncontrolledValue] = React.useState<
    string | string[]
  >(props.defaultValue ?? (isMultiple ? [] : ""));
  const value = isControlled ? props.value! : uncontrolledValue;

  const isOpen = React.useCallback(
    (itemValue: string) =>
      Array.isArray(value) ? value.includes(itemValue) : value === itemValue,
    [value]
  );

  const onValueChange = (next: string | string[]) => {
    if (!isControlled) setUncontrolledValue(next);
    (props.onValueChange as ((v: string | string[]) => void) | undefined)?.(
      next
    );
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { defaultValue, ...rootProps } = props;

  return (
    <AccordionOpenContext.Provider value={isOpen}>
      <AccordionPrimitive.Root
        data-slot="accordion"
        {...(rootProps as React.ComponentProps<typeof AccordionPrimitive.Root>)}
        // Mirrored so AccordionContent knows which items are open.
        {...({ value, onValueChange } as object)}
      />
    </AccordionOpenContext.Provider>
  );
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  const id = React.useId();
  const item = React.useMemo(
    () => ({
      value: props.value,
      triggerId: `${id}-trigger`,
      contentId: `${id}-content`,
    }),
    [id, props.value]
  );

  return (
    <AccordionItemContext.Provider value={item}>
      <AccordionPrimitive.Item
        data-slot="accordion-item"
        className={cn(
          "border-2 border-gray-900 rounded-lg mb-3 last:mb-0 overflow-hidden",
          className
        )}
        {...props}
      />
    </AccordionItemContext.Provider>
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  const item = React.useContext(AccordionItemContext);

  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        id={item?.triggerId}
        aria-controls={item?.contentId}
        className={cn(
          "flex flex-1 items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-gray-900 transition-all outline-none hover:bg-gray-50 focus-visible:ring-2 focus-visible:ring-teal-500 disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]]:bg-gray-50 [&[data-state=open]>svg]:rotate-45",
          className
        )}
        {...props}
      >
        {children}
        <Plus className="text-gray-400 pointer-events-none size-5 shrink-0 transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  const item = React.useContext(AccordionItemContext);
  const isOpen = React.useContext(AccordionOpenContext);
  const open = item ? isOpen(item.value) : false;

  return (
    <div
      data-slot="accordion-content"
      data-state={open ? "open" : "closed"}
      id={item?.contentId}
      role="region"
      aria-labelledby={item?.triggerId}
      aria-hidden={open ? undefined : true}
      // Closed content stays in the HTML but can't be focused or read aloud.
      // (`inert` is a boolean prop in the React 19 bundled by Next's App
      // Router; the installed React 18 types don't declare it yet.)
      {...(open ? {} : ({ inert: true } as object))}
      className="grid text-sm transition-[grid-template-rows] duration-200 ease-out data-[state=closed]:grid-rows-[0fr] data-[state=open]:grid-rows-[1fr]"
      {...props}
    >
      <div className="min-h-0 overflow-hidden">
        <div
          className={cn(
            "px-5 pb-4 pt-0 text-gray-600 leading-relaxed",
            className
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
