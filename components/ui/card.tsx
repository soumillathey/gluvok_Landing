import * as React from "react"
import { cn } from "@/lib/utils"

interface CardProps extends React.ComponentProps<"div"> {
  variant?: "white" | "subtle" | "bordered"
}

function Card({
  className,
  variant = "white",
  ...props
}: CardProps) {
  const variantStyles = {
    white: "bg-[#FFFFFF] border border-[#EAEAEA] text-[#111111]",
    subtle: "bg-[#F9F9F8] border border-[#EAEAEA] text-[#111111]",
    bordered: "bg-transparent border border-[#EAEAEA] text-[#111111]",
  }

  return (
    <div
      data-slot="card"
      className={cn(
        "group/card flex flex-col rounded-[12px] p-7 md:p-8 transition-colors duration-150 shadow-none",
        variantStyles[variant],
        className
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn("flex flex-col gap-1.5 mb-4", className)}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn(
        "font-heading text-xl font-bold tracking-tight text-[#111111]",
        className
      )}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn(
        "font-sans text-sm text-[#787774] leading-relaxed",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("flex flex-col gap-4 text-inherit", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("mt-auto pt-6 flex items-center justify-between border-t border-[#EAEAEA]/80", className)}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
}
