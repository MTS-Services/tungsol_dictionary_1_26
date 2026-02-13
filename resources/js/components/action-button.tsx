import { Link } from "@inertiajs/react";
import { LucideIcon, Plus } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { Icon } from "./ui/icon";
import { cn } from "@/lib/utils";

interface Props {
  IconNode?: LucideIcon;
  className?: string;
  children?: React.ReactNode;
  href?: string;
  label?: string;
}
export default function ActionButton({ IconNode = Plus, href, className, label, children }: Props) {
  return (
    <Link href={href}>
      <Button className={cn("bg-btn-primary cursor-pointer px-3 py-2.5 rounded-2xl text-sm", className)}>
        <Icon iconNode={IconNode} />
        <span className="font-arial text-sm">{label}</span>
        {children}
      </Button>
    </Link>
  );
}
