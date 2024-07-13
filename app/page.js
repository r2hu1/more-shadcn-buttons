import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <header className="px-6 md:px-20 lg:px-32 py-5 flex items-center justify-end">
        <ModeToggle />
      </header>
      <section className="py-14 px-6">
        <div className="flex items-center justify-center flex-col">
          <h2 className="text-center max-w-3xl text-3xl font-medium text-gray-900 dark:text-gray-50 sm:text-5xl">More variants for, <span className="animate-text-gradient inline-flex bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400">shadcn/ui buttons.</span></h2>
          <p className="max-w-sm sm:max-w-lg text-center text-sm sm:text-lg text-gray-600 dark:text-gray-400 mt-3">Explore a collection of more variants for shadcn/ui buttons built using javascript and tailwindcss.</p>
          <div className="flex items-center gap-3 mt-8">
            <Button variant="pulse" asChild><Link href="https://github.com/r2hu1/more-shadcn-buttons/blob/master/README.md">Installation</Link></Button>
            <Button variant="secondary" asChild><Link href="https://github.com/r2hu1/more-shadcn-buttons" className="flex items-center gap-1.5">Contribute <Star className="w-4 h-4" /></Link></Button>
          </div>
        </div>
      </section>

      <section className="py-10 grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-6 md:px-20 lg:px-32 mt-5">
        <div className="bg-secondary/30 px-10 h-32 rounded-md justify-center flex items-center">
          <Button variant="pulse">Pulse</Button>
        </div>
        <div className="bg-secondary/30 px-10 h-32 rounded-md justify-center flex items-center">
          <Button variant="spinner"></Button>
        </div>
        <div className="bg-secondary/30 px-10 h-32 rounded-md justify-center flex items-center">
          <Button variant="skeleton">Skeleton</Button>
        </div>
        <div className="bg-secondary/30 px-10 h-32 rounded-md justify-center flex items-center">
          <Button variant="shine">Shine</Button>
        </div>
        <div className="bg-secondary/30 px-10 h-32 rounded-md justify-center flex items-center">
          <Button variant="linkHover1">Link Hover1</Button>
        </div>
        <div className="bg-secondary/30 px-10 h-32 rounded-md justify-center flex items-center">
          <Button variant="linkHover2">Link Hover2</Button>
        </div>
        <div className="bg-secondary/30 px-10 h-32 rounded-md justify-center flex items-center">
          <Button variant="clickIn">Click Me</Button>
        </div>
        <div className="bg-secondary/30 px-10 h-32 rounded-md justify-center flex items-center">
          <Button variant="ringHover">Ring Hover</Button>
        </div>
        <div className="bg-secondary/30 px-10 h-32 rounded-md justify-center flex items-center">
          <Button variant="gooeyLeft">Gooey Left</Button>
        </div>
        <div className="bg-secondary/30 px-10 h-32 rounded-md justify-center flex items-center">
          <Button variant="gooeyRight">Gooey Right</Button>
        </div>
        <div className="bg-secondary/30 px-10 h-32 rounded-md justify-center flex items-center">
          <Button variant="outline">Outline</Button>
        </div>
        <div className="bg-secondary/30 px-10 h-32 rounded-md justify-center flex items-center">
          <Button variant="ghost">Ghost</Button>
        </div>
      </section>
    </div>
  )
}
