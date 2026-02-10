import FrontendLayout from "@/layouts/frontend-layout";

export default function AdminDashboard2() {
  return (
    <FrontendLayout>
      <>
      {/* number1 */}
      <div className="bg-gray-50 flex items-center justify-center py-12">
        <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl overflow-hidden">
            
            <div className="flex items-center justify-between p-5 border-b border-gray-200">
                <h3 className="text-xl font-bold text-primary font-arial">
                    Edit Level
                </h3>
                <button className="text-gray-400 hover:text-gray-600 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
            </div>

            <form className="p-6 space-y-4">
                <div>
                    <label className="block text-sm font-medium text-primary mb-1">Level Name</label>
                    <input type="text" value="Expert Marathon" className="text-gray-300 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500" />
                </div>

                <div>
                    <label className="block text-sm font-medium text-primary mb-1 font-arial">Description</label>
                    <textarea placeholder="Enter level description" rows={3} className="text-gray-500 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"></textarea>
                </div>

                <div>
                    <label className="block text-sm font-medium text-primary mb-1 font-arial">Difficulty</label>
                    <input type="text" className="text-gray-500 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500" />
                </div>

                <div className="grid grid-cols-3 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-primary mb-1 font-arial">Word Count</label>
                        <input type="number" value="25" className="text-primary w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-primary mb-1 font-arial">Time (seconds)</label>
                        <input type="number" value="120" className="text-primary w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-primary mb-1 font-arial">Points/Word</label>
                        <input type="number" value="50" className="text-primary w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                </div>

                <div className="flex justify-end gap-3 pt-4 border-t border-gray-200 mt-6">
                    <button type="button" className="px-4 py-2 text-sm font-medium text-primary bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                        Cancel
                    </button>
                    <button type="submit" className="px-4 py-2 text-sm font-medium text-white bg-btn-primary rounded-md hover:bg-btn-primary/80 transition-colors">
                        Update Level
                    </button>
                </div>
            </form>
        </div>
      </div>

      {/* number 2 */}
        <div className="bg-gray-50 flex items-center justify-center  p-16">

        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden border border-gray-100">
            
            <div className="flex items-center justify-between p-6 pb-4">
                <h2 className="text-2xl font-inter text-primary text-md font-medium">
                    Add New Category
                </h2>
                <button className="text-gray-400 hover:text-gray-600 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
            </div>

            <form className="px-6 pb-6 space-y-6">
                <div>
                    <label className="block text-sm font-medium text-sm text-primary font-inter  mb-2">Name</label>
                    <input type="text" placeholder="Enter category name" className="w-full px-4 py-3 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800 placeholder-gray-400" />
                </div>

                <div>
                    <label className="block text-sm font-medium text-sm text-primary font-inter  mb-2">Description</label>
                    <textarea placeholder="Enter description" rows={4} className="w-full px-4 py-3 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800 placeholder-gray-400"></textarea>
                </div>

                <div>
                    <label className="block text-sm font-medium text-sm text-primary font-inter  mb-2">Color</label>
                    <div className="grid grid-cols-4 gap-3">
                        <button type="button" className="h-12 rounded-xl bg-violet-500 ring-2 ring-offset-2 ring-violet-500"></button>
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
                    <button type="button" className="px-6 py-3 text-sm font-medium text-primary bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors">
                        Cancel
                    </button>
                    <button type="submit" className="px-6 py-3 text-sm font-inter font-medium text-white bg-btn-primary rounded-xl hover:bg-btn-primary/80 transition-colors">
                        Add Category
                    </button>
                </div>
            </form>
        </div>

      </div>

      {/* number 3 */}
      <div className="bg-gray-50 flex items-center justify-center  p-4">

        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden border border-gray-100">
            
            <div className="flex items-center justify-between p-6 pb-4">
                <h2 className="text-2xl text-primary font-arial font-bold">
                    Edit Achievement
                </h2>
                <button className="text-gray-400 hover:text-gray-600 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
            </div>

            <form className="px-6 pb-6 space-y-5">
                <div>
                    <label className="block text-sm font-medium text-primary mb-2">Achievement Name</label>
                    <input type="text" value="First Steps" className="w-full px-4 py-3 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-400" />  
                </div>

                <div>
                    <label className="block text-sm font-medium text-primary mb-2">Description</label>
                    <textarea placeholder="Enter description" rows={3} className="w-full px-4 py-3 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800 placeholder-gray-400"></textarea>
                </div>

                <div>
                    <label className="block text-sm font-medium text-primary mb-2">Icon</label>
                    <div className="grid grid-cols-6 gap-2">
                        <button type="button" className="flex items-center justify-center h-12 rounded-xl border border-gray-200 text-2xl hover:bg-gray-50">🏆</button>
                        <button type="button" className="flex items-center justify-center h-12 rounded-xl border-2 border-blue-500 bg-blue-50 text-2xl">🎯</button>
                        <button type="button" className="flex items-center justify-center h-12 rounded-xl border border-gray-200 text-2xl hover:bg-gray-50">⭐</button>
                        <button type="button" className="flex items-center justify-center h-12 rounded-xl border border-gray-200 text-2xl hover:bg-gray-50">🔥</button>
                        <button type="button" className="flex items-center justify-center h-12 rounded-xl border border-gray-200 text-2xl hover:bg-gray-50">💎</button>
                        <button type="button" className="flex items-center justify-center h-12 rounded-xl border border-gray-200 text-2xl hover:bg-gray-50">👑</button>
                        <button type="button" className="flex items-center justify-center h-12 rounded-xl border border-gray-200 text-2xl hover:bg-gray-50">🎖️</button>
                        <button type="button" className="flex items-center justify-center h-12 rounded-xl border border-gray-200 text-2xl hover:bg-gray-50">🥇</button>
                        <button type="button" className="flex items-center justify-center h-12 rounded-xl border border-gray-200 text-2xl hover:bg-gray-50">📚</button>
                        <button type="button" className="flex items-center justify-center h-12 rounded-xl border border-gray-200 text-2xl hover:bg-gray-50">✨</button>
                        <button type="button" className="flex items-center justify-center h-12 rounded-xl border border-gray-200 text-2xl hover:bg-gray-50">🚀</button>
                        <button type="button" className="flex items-center justify-center h-12 rounded-xl border border-gray-200 text-2xl hover:bg-gray-50">💪</button>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-primary mb-2">Requirement</label>
                    <input type="text" value="Complete 1 game" className="w-full px-4 py-3 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-400" />
                </div>

                <div>
                    <label className="block text-sm font-medium text-primary mb-2">Points</label>
                    <input type="number" value="50" className="w-full px-4 py-3 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-400" />
                </div>

                <div className="flex justify-end gap-3 pt-4">
                    <button type="button" className="px-6 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors">
                        Cancel
                    </button>
                    <button type="submit" className="font-arial px-6 py-3 text-sm font-medium text-white bg-btn-primary rounded-xl hover:bg-btn-primary/80 transition-colors">
                        Update Achievement
                    </button>
                </div>
            </form>
        </div>

      </div>    

      </>
    </FrontendLayout>
  );
}
