import { Link } from "react-router-dom"
import { User, MapPin, Calendar, Clock, Mail, Phone, Upload, UserPlus, Home, HelpCircle } from "lucide-react"
import React from "react"

export default function Profilepage() {
  return (
    <div className="min-h-screen bg-white">

      <main className="max-w-2xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center mb-8">
          <div className="relative mb-4">
            <div className="w-32 h-32 bg-[#9FE7E1] rounded-full flex items-center justify-center">
              <UserPlus size={48} className="text-gray-600" />
            </div>
            <button className="mt-4 px-4 py-2 bg-[#9FE7E1] text-gray-600 rounded-md hover:bg-[#8fd6d0] transition-colors flex items-center justify-center gap-2 mx-auto">
              <Upload size={18} />  
              Upload Pic
            </button>
          </div>
          <h1 className="text-2xl font-bold">Complete Your Profile</h1>
        </div>

        <form className="space-y-6">
          <div className="relative">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Name"
              className="w-full pl-10 pr-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9FE7E1]"
            />
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <MapPin className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Address"
              className="w-full pl-10 pr-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9FE7E1]"
            />
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-gray-400" />
            </div>
            <select className="w-full pl-10 pr-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9FE7E1] appearance-none bg-white">
              <option value="">Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Calendar className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="date"
              placeholder="Date of Birth"
              className="w-full pl-10 pr-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9FE7E1]"
            />
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-gray-400" />
            </div>
            <select className="w-full pl-10 pr-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9FE7E1] appearance-none bg-white">
              <option value="">Milk Type</option>
              <option value="whole">Whole Milk</option>
              <option value="skim">Skim Milk</option>
              <option value="2%">2% Milk</option>
            </select>
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Clock className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Preferred Delivery Hours"
              className="w-full pl-10 pr-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9FE7E1]"
            />
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="w-full pl-10 pr-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9FE7E1]"
            />
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Phone className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="tel"
              placeholder="Contact Number"
              className="w-full pl-10 pr-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9FE7E1]"
            />
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="px-4 py-2 bg-[#9FE7E1] text-gray-600 rounded-md hover:bg-[#8fd6d0] transition-colors flex items-center gap-2"
            >
              <Upload size={18} />
              Upload Aadhar Card
            </button>
            <span className="text-red-500">*</span>
          </div>

          <div className="flex items-center justify-center gap-4 pt-4">
            <button
              type="submit"
              className="px-8 py-2 bg-[#9FE7E1] text-gray-600 rounded-md hover:bg-[#8fd6d0] transition-colors"
            >
              Save
            </button>
            <button type="button" className="px-8 py-2 text-gray-600 border rounded-md hover:bg-gray-50">
              Cancel
            </button>
          </div>
        </form>
      </main>
    </div>
  )
}

