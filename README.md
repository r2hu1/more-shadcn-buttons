## More Shadcn Buttons

Explore a collection of more variants for shadcn/ui buttons built using javascript and tailwindcss.

![image](/public/preview.png)

## Installation

- [Install Next.js](https://nextjs.org/docs/getting-started)
- [Install Tailwindcss](https://tailwindcss.com)
- [Install Shadcn UI](https://ui.shadcn.com)

### Configuration

Copy this updated button component in your `components` folder or replace with existing button component:

```js
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        pulseBtn: "bg-primary text-primary-foreground hover:bg-primary/90 animate-pulseGlow",
        spinner: "inline-flex border border-[4px] animate-spinner rounded-full border-r-primary",
        skeleton: "bg-skeleton bg-[length:400%_100%] animate-skeleton text-transparent",
        hover1: "bg-primary text-primary-foreground border-b-[4px] border-b-border-secondary hover:bg-primary/90 border-t-0 transition-all duration-100 ease-in-out hover:border-b-0 hover:border-t-[4px]",
        clickIn: "bg-primary hover:scale-[1.05] text-primary-foreground active:scale-[0.95] hover:bg-primary/90 transition",
        ringHover:"bg-primary text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:ring-2 hover:ring-primary/90 hover:ring-offset-2",
        popUp: "bg-primary text-primary-foreground transition-all hover:shadow-[4px_4px_0px_1px] hover:shadow-primary/50 dark:shadow-gray-600 hover:-translate-x-1 hover:-translate-y-1",
        popIn: "bg-primary text-primary-foreground transition-all shadow-[4px_4px_0px_1px] shadow-primary/50 dark:shadow-gray-600 hover:translate-x-1 hover:translate-y-1 hover:shadow-[0px_0px_0px_0px]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />)
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }

```

Copy this updated configs to your `tailwind.config.js` file:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        "skeleton": "linear-gradient(270deg, hsl(var(--secondary)), hsl(var(--secondary) / 80%), hsl(var(--secondary) / 70%), hsl(var(--secondary) / 50%))",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "pulseGlow": {
          from: { boxShadow: "0 0 0 0 hsl(var(--primary) / 25%)" },
          to: { boxShadow: "0 0 0 10px rgba(255, 255, 255, 0)" },
        },
        "spinner": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "skeleton": {
          '0%, 100%': { backgroundPosition: '0% 0%' },
          '50%': { backgroundPosition: '100% 100%' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulseGlow": "pulseGlow 1.75s infinite cubic-bezier(0.66, 0, 0, 1)",
        "spinner": "spinner 1.2s linear infinite",
        "skeleton": 'skeleton 8s ease-in-out infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
```

All set to go!!