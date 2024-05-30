/**
 * v0 by Vercel.
 * @see https://v0.dev/t/L4nohiyk95z
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export default function SearchInput({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative bg-gray-200 dark:bg-gray-800 rounded-full",
        className
      )}
    >
      <Input
        className="pl-4 pr-12 rounded-full bg-transparent"
        placeholder="Trouver votre produit rapidement..."
        type="email"
      />
      <Button
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full"
        size="icon"
        variant="ghost"
      >
        <SearchIcon className="w-5 h-5" />
      </Button>
    </div>
  );
}
