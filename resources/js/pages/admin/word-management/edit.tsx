import AdminLayout from "@/layouts/admin-layout";
import React from "react";

export default function Edit() {
  return (
    <AdminLayout pageTitle="Word Management Edit">
      <div className="bg-gray-50 flex items-center justify-center min-h-screen p-4">
        <div className="bg-white rounded-2xl shadow-xl w-full max-w-3xl p-6 md:p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-medium text-primary">Edit Word</h1>

            <button className="text-gray-400 hover:text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="mb-6">
            <label
              htmlFor="word"
              className="block text-sm font-medium text-primary mb-1 font-arial"
            >
              Word
            </label>

            <input
              type="text"
              id="word"
              defaultValue="ephemeral"
              className="text-gray-300 w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 outline-none transition"
            />
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-medium text-primary font-arial text-sm">
                Meanings
              </label>

              <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                + Add Meaning
              </button>
            </div>

            <div className="border border-gray-200 rounded-xl p-4 bg-gray-50/50">
              <input
                type="text"
                placeholder=""
                className="w-24 px-3 py-2 mb-3 border border-gray-300 rounded-lg text-sm"
              />

              <textarea
                placeholder="Enter definition"
                rows={3}
                className="text-primary text-sm font-arial w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 outline-none transition"
                defaultValue={""}
              />

              <div className="mt-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-medium font-arial text-primary uppercase tracking-wider">
                    Examples
                  </span>

                  <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                    + Add Example
                  </button>
                </div>

                <div className="space-y-2">
                  <div className="relative">
                    <input
                      type="text"
                      defaultValue="The ephemeral beauty of a sunset."
                      className="w-full px-4 py-2.5 pr-10 border border-gray-300 rounded-lg text-sm text-gray-400 font-arial"
                    />

                    <button className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500 hover:text-red-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>

                  <div className="relative">
                    <input
                      type="text"
                      defaultValue="Fame can be ephemeral."
                      className="w-full px-4 py-2.5 pr-10 border border-gray-300 rounded-lg text-sm text-gray-400 font-arial"
                    />

                    <button className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500 hover:text-red-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-medium text-primary font-arial text-sm">
                Synonyms
              </label>

              <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                + Add Synonym
              </button>
            </div>

            <div className="space-y-2">
              <div className="relative">
                <input
                  type="text"
                  defaultValue="transient"
                  className="w-full px-4 py-2.5 pr-10 border border-gray-300 rounded-lg text-sm text-gray-400 font-arial"
                />

                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500 hover:text-red-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="relative">
                <input
                  type="text"
                  defaultValue="fleeting"
                  className="w-full px-4 py-2.5 pr-10 border border-gray-300 rounded-lg text-sm text-gray-400 font-arial"
                />

                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500 hover:text-red-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="relative">
                <input
                  type="text"
                  defaultValue="temporary"
                  className="w-full px-4 py-2.5 pr-10 border border-gray-300 rounded-lg text-sm text-gray-400 font-arial"
                />

                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500 hover:text-red-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3 border-t pt-6">
            <button className="px-5 py-2.5 rounded-lg text-sm font-medium text-primary font-arial text-gray-700 hover:bg-gray-100 transition">
              Cancel
            </button>

            <button className="px-5 py-2.5 rounded-lg text-sm font-medium text-white bg-btn-primary font-arial hover:bg-primary/80 transition">
              Update Word
            </button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
