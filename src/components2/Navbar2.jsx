import { Search, Settings, Bell } from "lucide-react"
import React from 'react'

export default function Navbar2() {
  return (
    <header className="sticky inset-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-lg">
    <nav className=" flex transition-all duration-200 ease-in-out lg:px-12">
      <div className="relative flex items-center">
        <a href="/">
          <img 
            src="src/images/DairyDashLogo.png" 
            loading="lazy" 
            alt="Logo" 
            style={{ color: "transparent" }} 
            width="80" 
            height="80" 
          />
        </a>
        <span className="font-semibold text-3xl px-3 text-[#5f5d5e]">DairyDash</span>
  
      </div>
      <div className="flex-grow"></div>
  
      <div className="hidden md:flex items-center gap-6 text-[1.2rem]">
              <a href="/" className="text-gray-600 hover:text-gray-900">
                Home
              </a>
              <a href="/milkman" className="px-4 py-2 rounded-xl bg-[#9FE7E1] text-gray-900">
                Milkman
              </a>
              <a href="/consumers" className="text-gray-600 hover:text-gray-900">
                Consumers
              </a>
            </div>
      <div className="flex-grow"></div>

        {/* Right Side Icons */}
        <div className="flex items-center gap-4">
          <button className="p-2 text-gray-600 hover:text-gray-900 rounded-full hover:bg-gray-100">
            <Search size={20} />
            <span className="sr-only">Search</span>
          </button>
          <button className="p-2 text-gray-600 hover:text-gray-900 rounded-full hover:bg-gray-100">
            <Settings size={20} />
            <span className="sr-only">Settings</span>
          </button>
          <button className="p-2 text-gray-600 hover:text-gray-900 rounded-full hover:bg-gray-100">
            <Bell size={20} />
            <span className="sr-only">Notifications</span>
          </button>
          <button className="flex items-center">
            <img
              src="src/images/profile.png"
              alt="User avatar"
              className="w-8 h-8 rounded-full border border-gray-200"
              

            />
          </button>
        </div>
    </nav>
      
    </header>
  )
}

