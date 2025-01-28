import { useState } from "react"
import React from "react"
import { Plus, CheckCircle, Clock, CreditCard } from "lucide-react"

export default function SubscriptionStatus() {
  const [showQR, setShowQR] = useState(false)

  const subscriptions = [
    {
      name: "Rajesh Kumar",
      duration: "1 week",
      status: "completed",
      bill: "Rs. 700",
      action: "renew",
    },
    {
      name: "Vijay Verna",
      duration: "1 Month",
      status: "in progress",
      bill: "Rs.1600",
      action: "terminate",
    },
  ]

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-8">Subscription Status</h1>

      {/* Subscription Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
        <table className="w-full">
          <thead>
            <tr className="">
              <th className="text-left py-4 px-6 font-medium">Subscription</th>
              <th className="text-left py-4 px-6 font-medium">Duration</th>
              <th className="text-left py-4 px-6 font-medium">Status</th>
              <th className="text-left py-4 px-6 font-medium">Bill</th>
              <th className="text-left py-4 px-6 font-medium">Manage Subscription</th>
            </tr>
          </thead>
          <tbody>
            {subscriptions.map((sub, index) => (
              <tr key={index} className="last:border-b-0">
                <td className="py-4 px-6">{sub.name}</td>
                <td className="py-4 px-6">{sub.duration}</td>
                <td className="py-4 px-6">
                  <div className="flex items-center gap-2">
                    {sub.status === "completed" ? (
                      <>
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>Completed</span>
                      </>
                    ) : (
                      <>
                        <Clock className="h-5 w-5 text-blue-500" />
                        <span>In progress</span>
                      </>
                    )}
                  </div>
                </td>
                <td className="py-4 px-6">
                  <span className="px-3 py-1 bg-[#9FE7E1] text-gray-700 rounded-md">{sub.bill}</span>
                </td>
                <td className="py-4 px-6">
                  {sub.action === "renew" ? (
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
                      Renew
                    </button>
                  ) : (
                    <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors">
                      Terminate
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* New Subscription Button */}
      <button className="mb-6 px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors flex items-center gap-2">
        <Plus className="h-5 w-5" />
        New Subscription
      </button>

      {/* Total Bill Section */}
      <div className="bg-[#E5F9F7] rounded-lg p-6 max-w-sm">
        <h2 className="text-lg font-medium mb-2">Total Bill</h2>
        <p className="text-2xl font-bold mb-1">₹ Rs. 1600</p>
        <p className="text-sm text-gray-600 mb-4">2 subscriptions</p>
        <button
          onClick={() => setShowQR(true)}
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
        >
          <CreditCard className="h-5 w-5" />
          Pay
        </button>
      </div>

      {/* QR Code Modal */}
      {showQR && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full">
            <img
              src="/src/images/qr.png"
              alt="QR Code"
              className="w-full aspect-square mb-2"
            />
            <button
              onClick={() => setShowQR(false)}
              className="mt-4 w-full px-4 py-2 bg-gray-100 text-gray-600 rounded-md hover:bg-gray-200 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

