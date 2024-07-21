"use client";

import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";

interface buttonProps {
  text: String;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined;
  size?: "default" | "icon" | "lg" | "sm" | null | undefined;
}

export function SubmitButton({ text, variant, size }: buttonProps) {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled variant={variant} size={size} className="w-[70vw]">
          <Loader2 className="mr-2 h-4 w-4 animate-spin font-Cormorant" />
          Please Wait
        </Button>
      ) : (
        <Button
          variant={variant}
          type="submit"
          size={size}
          className="w-[70vw] font-Cormorant"
        >
          {text}
        </Button>
      )}
    </>
  );
}
