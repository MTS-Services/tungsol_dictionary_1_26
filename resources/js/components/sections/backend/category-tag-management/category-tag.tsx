import ActionButton from "@/components/action-button";
import { Icon } from "@/components/icon";
import { Folder, Tags, X } from "lucide-react";
import React, { useRef } from "react";
import CategoryCard from "./category-card";
import TagCard from "./tag-card";

export function CategoryTag() {
  const categoryAddRef = useRef<HTMLDivElement>(null);
  const selectedIdRef = useRef<number | null>(null);

  // Open modal without re-render
  const openCategoryAddModal = (id: number) => {
    selectedIdRef.current = id;
    if (categoryAddRef.current) categoryAddRef.current.style.display = "flex";
  };

  const closeCategoryAddModal = () => {
    if (categoryAddRef.current) categoryAddRef.current.style.display = "none";
    selectedIdRef.current = null;
  };


   const tagAddRef = useRef<HTMLDivElement>(null);
  const selectedTagRef = useRef<number | null>(null);

  // Open modal without re-render
  const openTagAddModal = (id: number) => {
    selectedIdRef.current = id;
    if (tagAddRef.current) tagAddRef.current.style.display = "flex";
  };

  const closeTatAddModal = () => {
    if (tagAddRef.current) tagAddRef.current.style.display = "none";
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
            {[1, 2, 3, 4].map((item) => <CategoryCard key={item} id={item} onEdit={openCategoryAddModal} />)}
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
            {[1, 2, 3, 4].map((item) => <TagCard key={item} id={item} onEdit={openTagAddModal} />)}
          </div>
        </div>
      </div>

      {/* ========== MODAL Add Category ========== */}
      <div
        ref={categoryAddRef}
        style={{ display: "none" }}
        className="fixed inset-0 z-50 bg-bg-primary/70 flex items-center justify-center backdrop-blur-xs"
      >
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden border border-gray-100">
            <div className="flex items-center justify-between p-6 pb-4">
              <h2 className="text-2xl font-inter text-primary text-md font-medium">
                Add New Category
              </h2>
              <button className="text-gray-400 hover:text-gray-600 transition-colors" onClick={ (e) => closeCategoryAddModal() } >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <X  />
                </svg>
              </button>
            </div>

            <form className="px-6 pb-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-sm text-primary font-inter  mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Enter category name"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800 placeholder-gray-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-sm text-primary font-inter  mb-2">Description</label>
                <textarea
                  placeholder="Enter description"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800 placeholder-gray-400"
                >
                </textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-sm text-primary font-inter  mb-2">Color</label>
                <div className="grid grid-cols-4 gap-3">
                  <button type="button" className="h-12 rounded-xl bg-violet-500 ring-2 ring-offset-2 ring-violet-500">
                  </button>
                  <button type="button" className="h-12 rounded-xl bg-blue-500 hover:opacity-90"></button>
                  <button type="button" className="h-12 rounded-xl bg-emerald-500 hover:opacity-90"></button>
                  <button type="button" className="h-12 rounded-xl bg-red-500 hover:opacity-90"></button>
                  <button type="button" className="h-12 rounded-xl bg-amber-500 hover:opacity-90"></button>
                  <button type="button" className="h-12 rounded-xl bg-pink-500 hover:opacity-90"></button>
                  <button type="button" className="h-12 rounded-xl bg-indigo-500 hover:opacity-90"></button>
                  <button type="button" className="h-12 rounded-xl bg-cyan-500 hover:opacity-90"></button>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  className="px-6 py-3 text-sm font-medium text-primary bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 text-sm font-inter font-medium text-white bg-btn-primary rounded-xl hover:bg-btn-primary/80 transition-colors"
                >
                  Add Category
                </button>
              </div>
            </form>
          </div>
        </div>


      {/* ========== MODAL Add Tag ========== */}

       <div
        ref={tagAddRef}
        style={{ display: "none" }}
        className="fixed inset-0 z-50 bg-bg-primary/70 flex items-center justify-center backdrop-blur-xs"
      >
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden border border-gray-100">
            <div className="flex items-center justify-between p-6 pb-4">
              <h2 className="text-2xl font-inter text-primary text-md font-medium">
                Add New Tag
              </h2>
              <button className="text-gray-400 hover:text-gray-600 transition-colors" onClick={ (e) => closeTatAddModal() } >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <X  />
                </svg>
              </button>
            </div>

            <form className="px-6 pb-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-sm text-primary font-inter  mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Enter category name"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800 placeholder-gray-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-sm text-primary font-inter  mb-2">Description</label>
                <textarea
                  placeholder="Enter description"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800 placeholder-gray-400"
                >
                </textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-sm text-primary font-inter  mb-2">Color</label>
                <div className="grid grid-cols-4 gap-3">
                  <button type="button" className="h-12 rounded-xl bg-violet-500 ring-2 ring-offset-2 ring-violet-500">
                  </button>
                  <button type="button" className="h-12 rounded-xl bg-blue-500 hover:opacity-90"></button>
                  <button type="button" className="h-12 rounded-xl bg-emerald-500 hover:opacity-90"></button>
                  <button type="button" className="h-12 rounded-xl bg-red-500 hover:opacity-90"></button>
                  <button type="button" className="h-12 rounded-xl bg-amber-500 hover:opacity-90"></button>
                  <button type="button" className="h-12 rounded-xl bg-pink-500 hover:opacity-90"></button>
                  <button type="button" className="h-12 rounded-xl bg-indigo-500 hover:opacity-90"></button>
                  <button type="button" className="h-12 rounded-xl bg-cyan-500 hover:opacity-90"></button>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  className="px-6 py-3 text-sm font-medium text-primary bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 text-sm font-inter font-medium text-white bg-btn-primary rounded-xl hover:bg-btn-primary/80 transition-colors"
                onClick={ (e) => closeTatAddModal() } 
                >
                 Add Tag
                </button>
              </div>
            </form>
          </div>
        </div>
    </>
  );
}
