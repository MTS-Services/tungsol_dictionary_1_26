import { Icon } from "@/components/icon";
import { cn } from "@/lib/utils";
import { Link } from "@inertiajs/react";
import { Folder, Pencil, Trash } from "lucide-react";
import React from "react";

interface Props {
  className?: string;
  id: number;
  onEdit: (id: number) => void;
  item?: {
    name?: string;
  };
}

export default function CategoryCard({ className, onEdit, id, item }: Props) {
  return (
    <div
      className={cn(
        "flex gap-3 justify-between border border-admin-border rounded-lg p-4 mt-3 bg-bg-primary shadow-xs",
        className,
      )}
    >
      <div className="flex items-start gap-3">
        <div className="bg-[#8B5CF6]/70 p-2.5 rounded-xl w-auto">
          <Icon iconNode={Folder} className="text-[#8B5CF6] w-4 h-4" />
        </div>
        <div>
          <h2 className="font-bold font-arial text-sm lg:text-lg">
            {item?.name || "Advanced"}
          </h2>
          <p className="text-admin-text-secondary/70 font-arial font-normal text-sm">
            Advanced vocabulary words
          </p>
        </div>
      </div>

      <div className="flex gap-2">
        <button
          onClick={(e) => {
            e.preventDefault();
            onEdit(id);
          }}
          className="text-admin-text-secondary/70 p-3 hover:text-admin-text-primary"
        >
          <Icon iconNode={Pencil} />
        </button>
        <button className="text-admin-text-danger p-3 hover:opacity-80">
          <Icon iconNode={Trash} />
        </button>
      </div>
    </div>
  );
}

export { CategoryCard };