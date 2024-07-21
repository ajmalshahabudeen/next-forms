import React from "react";
import { ThemeToggle } from "@/components/ThemeToggle";

export const Header = () => {
  return (
    <div className="flex items-center justify-between px-10 md:px-20 py-5 md:py-7">
      <div className="inline-flex items-center gap-2 text-3xl">
        <p className="font-bold">Next</p>
        <p className="text-primary font-medium">Forms</p>
      </div>
      <ThemeToggle />
    </div>
  );
};
