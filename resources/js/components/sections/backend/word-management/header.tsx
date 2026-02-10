import ActionButton from "@/components/action-button";
import { Icon } from "@/components/icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "@inertiajs/react";
import { Plus, Search } from "lucide-react";
import React from "react";

function Header() {
  return (
    <div className="flex justify-between gap-4">
      <div className="relative w-auto">
        <div className="absolute top-3.5 left-2.5">
          <Search className="text-admin-text-secondary/70" />
        </div>
        <input
          className="px-2.5 py-3 pl-10 block rounded-lg bg-admin-background text-admin-text-secondary border border-admin-border "
          placeholder="Search word...."
        />
      </div>
      <div className="w-auto">
        <ActionButton href={route('admin.wm.words.create')} label="Create Word" />
      </div>
    </div>
  );
}

export { Header };
