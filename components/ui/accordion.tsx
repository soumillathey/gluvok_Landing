import * as React from "react"
import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion"
import { cn } from "@/lib/utils"
import { Plus, Minus } from "lucide-react"

function Accordion({ className, ...props }: AccordionPrimitive.Root.Props) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      className={cn("flex w-full flex-col divide-y divide-[#EAEAEA]", className)}
      {...props}
    />
  )
}

function AccordionItem({ className, ...props }: AccordionPrimitive.Item.Props) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("py-1", className)}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: AccordionPrimitive.Trigger.Props) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group/accordion-trigger flex flex-1 items-center justify-between gap-6 py-5 text-left font-sans text-lg font-medium text-[#111111] transition-colors outline-none hover:text-[#787774] cursor-pointer focus-visible:ring-2 focus-visible:ring-[#111111] rounded-sm",
          className
        )}
        {...props}
      >
        <span>{children}</span>
        <div className="size-6 flex items-center justify-center shrink-0 text-[#787774] group-hover/accordion-trigger:text-[#111111]">
          <Plus className="size-4 group-aria-expanded/accordion-trigger:hidden" aria-hidden="true" />
          <Minus className="size-4 hidden group-aria-expanded/accordion-trigger:block" aria-hidden="true" />
        </div>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: AccordionPrimitive.Panel.Props) {
  return (
    <AccordionPrimitive.Panel
      data-slot="accordion-content"
      className="overflow-hidden data-open:animate-accordion-down data-closed:animate-accordion-up"
      {...props}
    >
      <div
        className={cn(
          "pt-1 pb-6 font-sans text-base text-[#787774] leading-relaxed max-w-3xl",
          className
        )}
      >
        {children}
      </div>
    </AccordionPrimitive.Panel>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
