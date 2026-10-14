import * as React from "react"
import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[6px] text-sm font-sans font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-[var(--olive-accent)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer active:scale-[0.98]",
  {
    variants: {
      variant: {
        default:
          "btn-olive-primary shadow-xs",
        dark:
          "bg-[#111111] text-[#FFFFFF] hover:bg-[#333333] border border-[#111111] shadow-none",
        secondary:
          "bg-[var(--olive-wash)] text-[var(--text-primary)] border border-[var(--border-hairline)] hover:opacity-90 shadow-none",
        outline:
          "bg-transparent text-[var(--text-primary)] border border-[var(--border-hairline)] hover:border-[var(--olive-accent)] hover:text-[var(--olive-accent)] hover:bg-[var(--olive-wash)] shadow-none transition-colors",
        ghost:
          "bg-transparent text-[var(--text-primary)] hover:bg-[var(--olive-wash)] shadow-none",
        subtle:
          "bg-[var(--surface-card)] text-[var(--text-primary)] border border-[var(--border-hairline)] hover:border-[var(--olive-accent)] shadow-none",
      },
      size: {
        default: "h-10 px-5 py-2 text-sm",
        sm: "h-8 px-3.5 text-xs",
        lg: "h-11 px-7 text-base",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
