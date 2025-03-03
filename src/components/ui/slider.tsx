
import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> & { 
    isEnterprise?: boolean 
  }
>(({ className, isEnterprise, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-neutral-100/50 dark:bg-neutral-800/80">
      <SliderPrimitive.Range className={cn(
        "absolute h-full",
        isEnterprise ? "bg-[#4F46E5]" : "bg-primary"
      )} />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className={cn(
      "block h-5 w-5 rounded-full border-2 bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      isEnterprise ? "border-[#4F46E5]" : "border-primary"
    )} />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
