import {
  Home,
  Library,
  Settings,
  Plus,
} from 'lucide-react';

export default function SideBar() {
  return (
    <div className="absolute top-50 left-0 z-10 flex h-1/2 w-84 flex-col gap-4 bg-[#1a1b1e] p-4 text-white ">

      <button className="cursor-pointer flex w-full items-center gap-4 rounded bg-yellow-700 p-4 text-left transition-all duration-200 hover:bg-yellow-600 hover:translate-x-1">
        <Home size={22} />
        <span>Home</span>
      </button>

      <button className="cursor-pointer flex w-full items-center gap-4 rounded bg-yellow-700 p-4 text-left transition-all duration-200 hover:bg-yellow-600 hover:translate-x-1">
        <Library size={22} />
        <span>Library</span>
      </button>

      <button className="cursor-pointer flex w-full items-center gap-4 rounded bg-yellow-700 p-4 text-left transition-all duration-200 hover:bg-yellow-600 hover:translate-x-1">
        <Settings size={22} />
        <span>Settings</span>
      </button>

      <button className="cursor-pointer flex w-full items-center gap-4 rounded bg-yellow-700 p-4 text-left transition-all duration-200 hover:bg-yellow-600 hover:translate-x-1">
        <Plus size={22} />
        <span>Add Game</span>
      </button>

    </div>
  );
}