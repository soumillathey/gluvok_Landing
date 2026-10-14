import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[11px] font-sans font-medium tracking-[0.04em] uppercase rounded-full transition-colors select-none",
  {
    variants: {
      variant: {
        default:
          "bg-[#F7F6F3] text-[#787774] border border-[#EAEAEA]",
        green:
          "badge-olive border transition-colors duration-200",
        olive:
          "badge-olive border transition-colors duration-200",
        blue:
          "bg-[#E1F3FE] text-[#1F6C9F] border border-[#1F6C9F]/15",
        yellow:
          "bg-[#FBF3DB] text-[#956400] border border-[#956400]/15",
        red:
          "bg-[#FDEBEC] text-[#9F2F2D] border border-[#9F2F2D]/15",
        neutral:
          "bg-[#F9F9F8] text-[#555555] border border-[#EAEAEA]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
