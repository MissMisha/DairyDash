import { ChevronDown, Facebook, Linkedin, Twitter, Youtube } from "lucide-react"
import React from 'react'

function Footer() {
  return (
    <footer className="w-full py-12 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col items-center mb-12">
        
        <img 
          src="src/images/DairyDashLogo.png" 
          loading="lazy" 
          alt="Logo" 
          style={{ color: "transparent" }} 
          width="100" 
          height="100" 
        />
          <h3 className="text-xl font-medium mb-4">Subscribe to our newsletter</h3>
          <div className="flex gap-2 w-full max-w-md">
            <input type="email" placeholder="Input your email" className="flex-1 px-4 py-2 bg-gray-100 rounded-md" />
            <button className="px-6 py-2 bg-[#9FE7E1] text-gray-700 rounded-md hover:bg-[#8fd6d0] transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <h4 className="font-medium text-gray-800">Product</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium text-gray-800">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  User guides
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Referral Program
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium text-gray-800">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium text-gray-800">Plans & Pricing</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Personal
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Start up
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Organization
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-200">
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-md mb-4 md:mb-0">
            English
            <ChevronDown size={16} />
          </button>

          <div className="flex items-center gap-4 text-gray-600">
            <a href="#" className="hover:text-gray-800">
              Privacy
            </a>
            <span>•</span>
            <a href="#" className="hover:text-gray-800">
              Terms
            </a>
            <span>•</span>
            <a href="#" className="hover:text-gray-800">
              Sitemap
            </a>
          </div>

          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <Twitter size={20} />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <Facebook size={20} />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <Youtube size={20} />
              <span className="sr-only">YouTube</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
