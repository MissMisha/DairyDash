import ReactDOM from 'react-dom'
import React from 'react'



const Navbar = () => {
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
            <a href="/" className="px-4 py-2 rounded-xl bg-[#9FE7E1] text-gray-900">
              Home
            </a>
            <a href="/milkman" className="text-gray-600 hover:text-gray-900">
              Milkman
            </a>
            <a href="/consumers" className="text-gray-600 hover:text-gray-900">
              Consumers
            </a>
          </div>
    <div className="flex-grow"></div>
    <div className="hidden items-center justify-center gap-6 md:flex">
      <a href="#" className="rounded-md px-0 py-1.5 font-dm text-sm font-medium text-white transition-transform duration-200 ease-in-out hover:scale-[1.03]">
          <img 
        src="src/images/milkman-icon-removebg-preview.png" 
        loading="lazy" 
        alt="Logo" 
        style={{color: "transparent"}} 
        width="50" 
        height="50" 
        
        />
      
        </a>
      <a 
        href="/profile" 
        className="rounded-md px-3 py-1.5 font-dm text-sm font-medium text-black transition-transform duration-200 ease-in-out hover:scale-[1.03]"
        
      >
        <img 
        src="src/images/customer-logo.png" 
        loading="lazy" 
        alt="Logo" 
        style={{ color: "transparent"}} 
        width="39" 
        height="39" />
      </a>
    </div>
    <div className="relative flex items-center justify-center md:hidden">
      <button type="button">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth="1.5" 
          stroke="currentColor" 
          aria-hidden="true" 
          className="h-6 w-auto text-slate-900"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
    </div>
  </nav>
</header>

    
  )
}

export default Navbar
