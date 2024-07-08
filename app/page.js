import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <header className="px-6 md:px-20 lg:px-32 py-5 flex items-center justify-end">
        <ModeToggle />
      </header>
      <section className="py-14 px-6">
        <div className="flex items-center justify-center flex-col">
          <h2 className="max-w-2xl text-center text-3xl font-medium text-gray-900 dark:text-gray-50 sm:text-5xl">More variants for, <span className="animate-text-gradient inline-flex bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text leading-tight text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400">shadcn/ui buttons.</span></h2>
          <p className="max-w-md text-center text-sm sm:text-lg text-gray-600 dark:text-gray-400 mt-3">Explore a collection of more variants for shadcn/ui buttons built using javascript and tailwindcss.</p>
          <div className="flex items-center gap-3 mt-8">
            <Button variant="pulseBtn" asChild><Link href="https://github.com/r2hu1/more-shadcn-buttons">Installation</Link></Button>
            <Button variant="secondary" asChild><Link href="https://github.com/r2hu1/more-shadcn-buttons">Contribute</Link></Button>
          </div>
        </div>
      </section>

      <section className="py-10 grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-6 md:px-20 lg:px-32 mt-5">
        <div className="bg-secondary/30 px-10 h-32 rounded-md justify-center flex items-center">
          <Button>Primary</Button>
        </div>
        <div className="bg-secondary/30 px-10 h-32 rounded-md justify-center flex items-center">
          <Button variant="secondary">Secondary</Button>
        </div>
        <div className="bg-secondary/30 px-10 h-32 rounded-md justify-center flex items-center">
          <Button variant="outline">Outline</Button>
        </div>
        <div className="bg-secondary/30 px-10 h-32 rounded-md justify-center flex items-center">
          <Button variant="ghost">Ghost</Button>
        </div>
        <div className="bg-secondary/30 px-10 h-32 rounded-md justify-center flex items-center">
          <Button variant="pulseBtn">Pulse</Button>
        </div>
        <div className="bg-secondary/30 px-10 h-32 rounded-md justify-center flex items-center">
          <Button variant="spinner"></Button>
        </div>
        <div className="bg-secondary/30 px-10 h-32 rounded-md justify-center flex items-center">
          <Button variant="skeleton">Skeleton</Button>
        </div>
        <div className="bg-secondary/30 px-10 h-32 rounded-md justify-center flex items-center">
          <Button variant="hover1">Hover Me</Button>
        </div>
        <div className="bg-secondary/30 px-10 h-32 rounded-md justify-center flex items-center">
          <Button variant="clickIn">Click Me</Button>
        </div>
        <div className="bg-secondary/30 px-10 h-32 rounded-md justify-center flex items-center">
          <Button variant="ringHover">Ring Hover</Button>
        </div>
        <div className="bg-secondary/30 px-10 h-32 rounded-md justify-center flex items-center">
          <Button variant="popUp">Pop Up</Button>
        </div>
        <div className="bg-secondary/30 px-10 h-32 rounded-md justify-center flex items-center">
          <Button variant="popIn">Pop In</Button>
        </div>
      </section>
    </div>
  )
}