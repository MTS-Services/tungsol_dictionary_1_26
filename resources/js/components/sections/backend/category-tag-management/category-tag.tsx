import ActionButton from "@/components/action-button";
import { Icon } from "@/components/icon";
import { Folder, Tags, X } from "lucide-react";
import React, { useRef } from "react";
import CategoryCard from "./category-card";
import TagCard from "./tag-card";

export function CategoryTag() {
  const modalRef = useRef<HTMLDivElement>(null);
  const selectedIdRef = useRef<number | null>(null);

  // Open modal without re-render
  const openModal = (id: number) => {
    selectedIdRef.current = id;
    if (modalRef.current) modalRef.current.style.display = "flex";
  };

  const closeModal = () => {
    if (modalRef.current) modalRef.current.style.display = "none";
    selectedIdRef.current = null;
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-6">
        {/* Categories */}
        <div>
          <div className="flex justify-between items-center">
            <div className="flex gap-3 items-center">
              <Icon iconNode={Folder} className="text-admin-text-secondary/70" />
              <span className="font-arial font-bold text-base lg:text-lg">
                Categories
              </span>
            </div>

            <ActionButton label="Create Category" />
          </div>

          <div className="mt-3 space-y-2">
            {[1, 2, 3, 4].map((item) => (
              <CategoryCard key={item} id={item} onEdit={openModal} />
            ))}
          </div>
        </div>

        {/* Tags */}
        <div>
          <div className="flex justify-between items-center">
            <div className="flex gap-3 items-center">
              <Icon iconNode={Tags} className="text-admin-text-secondary/70" />
              <span className="font-arial font-bold text-base lg:text-lg">
                Tags
              </span>
            </div>

            <ActionButton label="Add Tag" />
          </div>

          <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-2">
            {[1, 2, 3, 4].map((item) => (
              <TagCard key={item} id={item} onEdit={openModal} />
            ))}
          </div>

        </div>
      </div>

      {/* ========== MODAL ========== */}
      <div
        ref={modalRef}
        style={{ display: "none" }}
        className="fixed inset-0 z-50 bg-bg-primary/90 flex items-center justify-center"
      >
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden border border-gray-100 relative">
          {/* Header */}
          <div className="flex items-center justify-between p-6 pb-4">
            <h2 className="text-2xl font-inter text-primary font-medium">
              Edit Category
            </h2>
            <button
              onClick={closeModal}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Body */}
          <form className="px-6 pb-6 space-y-6">
            <div>
              <label className="block text-sm font-medium text-primary mb-2">
                Name
              </label>
              <input
                type="text"
                defaultValue={`Category ${selectedIdRef.current}`}
                placeholder="Enter category name"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800 placeholder-gray-400"
              />
            </div>

            <div className="flex justify-end gap-3 pt-4">
              <button
                type="button"
                onClick={closeModal}
                className="px-6 py-3 text-sm font-medium text-primary bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-3 text-sm font-inter font-medium text-white bg-btn-primary rounded-xl hover:bg-btn-primary/80 transition-colors"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
