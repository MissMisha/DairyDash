import { Filter, Upload, Clock, RefreshCcw, Star } from "lucide-react"
import React from "react"

export default function Earningsummary() {
  return (
    <div className="container mx-auto p-6 space-y-8">
      {/* Earnings Summary Section */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Earnings Summary</h2>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 text-gray-600 border rounded-md hover:bg-gray-50">
              <Filter size={18} />
              Filter
            </button>
            <button className="flex items-center gap-2 px-4 py-2 text-gray-600 border rounded-md hover:bg-gray-50">
              <Upload size={18} />
              Export
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Earnings & Revenue Metrics */}
          <div className="space-y-6">
            <h3 className="font-semibold text-gray-800">Earnings & Revenue Metrics</h3>

            <div className="space-y-4">
              <div>
                <p className="text-gray-600 mb-1">Total Earnings</p>
                <p className="text-2xl font-bold text-[#4ADE80]">₨ 12,500</p>
              </div>

              <div>
                <p className="text-gray-600 mb-1">Average Order Value</p>
                <p className="text-xl font-semibold">₨ 250</p>
              </div>

              <div>
                <p className="text-gray-600 mb-1">Top Earning Areas</p>
                <ul className="list-disc list-inside text-gray-800">
                  <li>Area 1</li>
                  <li>Area 2</li>
                </ul>
              </div>

              <div>
                <p className="text-gray-600 mb-1">Subscription Income</p>
                <p className="text-xl font-semibold text-[#4ADE80]">₨ 2,500</p>
              </div>
            </div>
          </div>

          {/* Payment Metrics */}
          <div className="space-y-6">
            <h3 className="font-semibold text-gray-800">Payment Metrics</h3>

            <div className="space-y-4">
              <div>
                <p className="text-gray-600 mb-1">Pending Payments</p>
                <div className="flex items-center gap-2 text-gray-800">
                  <Clock size={16} />
                  <span>Aman</span>
                </div>
                <div className="flex items-center gap-2 text-gray-800">
                  <Clock size={16} />
                  <span>Raman</span>
                </div>
              </div>

              <div>
                <p className="text-gray-600 mb-1">Type</p>
                <p className="text-gray-800">UPI (750)</p>
                <p className="text-gray-800">Cash (570)</p>
              </div>

              <div>
                <div className="flex items-center gap-2 text-gray-600 mb-1">
                  <RefreshCcw size={16} />
                  <p>Refunds & Deductions</p>
                </div>
                <p className="text-xl font-semibold text-red-500">₨ 600</p>
              </div>

              <div>
                <p className="text-gray-600 mb-1">Tips Received</p>
                <p className="text-xl font-semibold text-[#4ADE80]">₨ 800</p>
              </div>
            </div>
          </div>

          {/* Performance Insights */}
          <div className="space-y-6">
            <h3 className="font-semibold text-gray-800">Performance Insights</h3>

            <div className="space-y-4">
              <div>
                <p className="text-gray-600 mb-1">Peak Earning Hours</p>
                <p className="text-gray-800">5-8 AM</p>
                <p className="text-gray-800">5-7 PM</p>
              </div>

              <div>
                <p className="text-gray-600 mb-1">Retention Rate</p>
                <p className="text-2xl font-bold">80%</p>
              </div>

              <div>
                <p className="text-gray-600 mb-1">High-Value Customers</p>
                <p className="text-2xl font-bold">60%</p>
              </div>

              <div>
                <p className="text-gray-600 mb-1">Growth Rate</p>
                <p className="text-2xl font-bold text-[#4ADE80]">12%</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feedback and Complaints Section */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-bold mb-8">Feedback and Complaints</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Average Rating */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Average Rating</h3>
            <div className="flex items-center gap-2">
              <span className="text-4xl font-bold text-[#4ADE80]">4.2</span>
              <Star className="h-8 w-8 text-[#4ADE80] fill-current" />
            </div>
          </div>

          {/* Recent Reviews */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Recent Reviews</h3>
            <div className="space-y-4">
              <div className="p-3 bg-gray-50 rounded-lg">
                <p>Always fresh and on time</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <p>Reliable, hassle-free</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <p>super convenient doorstep delivery!</p>
              </div>
            </div>
            <button className="mt-4 px-4 py-2 text-gray-600 bg-[#9FE7E1] rounded-md hover:bg-[#8fd6d0] transition-colors">
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

