import { useState, useEffect } from "react"
import React from "react"
import { CreditCard } from "lucide-react"
import axios from "axios"

export default function SubscriptionStatus() {
  const [showQR, setShowQR] = useState(false)
  const [totalBill, setTotalBill] = useState(0)

  useEffect(() => {
    const fetchTotalBill = async () => {
      try {
        const response = await axios.get('http://localhost:2004/totalbill')
        if (response.data && response.data.bill) {
          setTotalBill(response.data.bill)
        }
      } catch (error) {
        console.error('Error fetching total bill:', error)
      }
    }

    fetchTotalBill()
  }, [])

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-12">Payment Details</h1>

      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Billing Summary</h2>
            <div className="h-1 w-20 bg-[#9FE7E1] rounded-full"></div>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Total Amount Due</span>
              <span className="text-2xl font-bold text-gray-800">₹ Rs. {totalBill}</span>
            </div>
            <div className="flex justify-between items-center text-sm text-gray-500">
              <span>Due Date</span>
              <span>February 28, 2025</span>
            </div>
          </div>

          <button
            onClick={() => setShowQR(true)}
            className="w-full py-3 bg-[#4a5565] text-white rounded-lg hover:bg-[#3a4451] transition-colors flex items-center justify-center gap-2 font-medium shadow-sm"
          >
            <CreditCard className="h-5 w-5" />
            Pay Now
          </button>
        </div>
      </div>

      {showQR && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-8 max-w-sm w-full">
            <h3 className="text-lg font-semibold mb-4 text-center">Scan to Pay</h3>
            <img
              src="/src/images/qr.png"
              alt="QR Code"
              className="w-full aspect-square mb-6 rounded-lg"
            />
            <button
              onClick={() => setShowQR(false)}
              className="w-full py-3 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors font-medium"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}