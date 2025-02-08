import { X } from "lucide-react"
import React from "react"

export default function SubscriptionModel({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50 border-black border-2">
      <div className="bg-white rounded-lg p-6 w-full max-w-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Fill Details of Subscription</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-5 w-5" />
          </button>
        </div>

        <form className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-2">Quantity of milk</label>
            <input
              type="text"
              placeholder="Enter quantity of milk"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9FE7E1]"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Type of milk</label>
            <input
              type="text"
              placeholder="Enter type of milk"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9FE7E1]"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Time of Delivery</label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5, 6].map((time) => (
                <button
                  key={time}
                  type="button"
                  className="w-10 h-10 rounded border flex items-center justify-center hover:bg-[#9FE7E1] focus:bg-[#9FE7E1] focus:border-[#9FE7E1]"
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Duration of subscription</label>
            <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9FE7E1] appearance-none bg-white">
              <option value="">Select duration</option>
              <option value="1week">1 Week</option>
              <option value="2weeks">2 Weeks</option>
              <option value="1month">1 Month</option>
              <option value="3months">3 Months</option>
            </select>
          </div>

          <div className="flex justify-end gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 border text-gray-600 rounded-md hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-[#9FE7E1] text-gray-700 rounded-md hover:bg-[#8fd6d0] transition-colors"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}