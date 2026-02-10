import { Icon } from "@/components/icon";
import { Link } from "@inertiajs/react";
import { Delete, Pencil, Trash } from "lucide-react";
import React from "react";

function Word() {
  return (
    <div className="p-5 border border-admin-border rounded-md shadow-sm pb-7 ">
      <div className="flex justify-between items-center">
        <p className="font-arial font-bold text-admin-text-primary">serendipity</p>
        <p className="flex gap-2">
          <Link href={route('admin.wm.words.edit', 1)} className="text-admin-text-secondary/70 p-3">
            <Icon iconNode={Pencil} />
          </Link>
          <Link className="text-admin-text-danger p-3">
            <Icon iconNode={Trash} />
          </Link>
        </p>
      </div>
      <div>
        <div>
          <p className="text-admin-text-hover text-base font-arial py-3 font-normal">noun</p>
        </div>

        <div>
          <p className="text-sm text-admin-text-secondary font-arial font-normal">
            The occurrence of events by chance in a happy or beneficial way
          </p>
        </div>

        <div className="border-l-2 border-admin-border mt-2">
          <p className="text-xs text-admin-text-secondary/70 font-arial font-normal ml-3 py-2">
            "A fortunate stroke of serendipity brought the two old friends together."
          </p>
        </div>
      </div>

     <div>
        <p className="text-xs font-normal font-arial text-admin-text-secondary/70 pt-3 mt-3 border-t border-admin-border"> Synonyms:</p>
        <p className="flex gap-3 mt-2">
            <Link className="text-sm p-1.5 px-2.5 bg-gray-100  rounded-sm text-admin-text-primary/70 ">
                Luck
            </Link>
            <Link className="text-sm p-1.5 px-2.5 bg-gray-100  rounded-sm text-admin-text-primary/70 ">
                Fortune
            </Link>
            <Link className="text-sm p-1.5 px-2.5 bg-gray-100  rounded-sm text-admin-text-primary/70 ">
                Chance
            </Link>
        </p>
     </div>

    </div>
  );
}

export { Word };
