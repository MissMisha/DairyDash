import { useState, useEffect } from "react"
import { X, ChevronLeft, ChevronRight, Bell, Settings, Scale } from "lucide-react"
import React from "react"
import axios from "axios"

export default function MilkmanStatus() {
  const [showNotification, setShowNotification] = useState(true)
  const [selectedDate, setSelectedDate] = useState(15)
  const [upcomingDeliveries, setUpcomingDeliveries] = useState([])
  const [totalBill, setTotalBill] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [ordersResponse, billResponse] = await Promise.all([
          axios.get('http://localhost:2004/upcomingorderconsumer'),
          axios.get('http://localhost:2004/totalbill')
        ])

        setUpcomingDeliveries(ordersResponse.data)
        setTotalBill(billResponse.data.bill)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    fetchData()
  }, [])

  const calendar = {
    month: "February",
    year: "2025",
    days: Array.from({ length: 28 }, (_, i) => i + 1),
    weekDays: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Payment Notification */}
      {showNotification && (
        <div className="fixed top-4 right-4 flex items-center gap-3 bg-white rounded-lg shadow-lg p-4 z-50">
          <div className="bg-red-500 p-2 rounded-lg">
            <Bell className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="font-semibold">Payment Pending</h3>
            <p className="text-sm text-gray-500">Total Bill: ₨ {totalBill}</p>
          </div>
          <button onClick={() => setShowNotification(false)} className="ml-4 text-gray-400 hover:text-gray-600">
            <X className="h-5 w-5" />
          </button>
        </div>
      )}

      <h1 className="text-3xl font-bold text-center mb-8">Milk Delivery Tracker</h1>

      <div className="flex gap-8">
        {/* Delivery Cards Section */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {upcomingDeliveries.map((delivery, index) => (
            <div key={index} className="bg-white rounded-lg p-6 flex flex-col">
              <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4 flex-grow">
                <img
                  src="/src/images/consumer1.png"
                  alt="Delivery"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
              <div className="space-y-2 text-gray-600">
                <p className="font-medium">Milkman: {delivery.milkman}</p>
                <p>Price: ₨ {delivery.price}</p>
                <p className={delivery.status === 0 ? "text-blue-500" : "text-green-500"}>
                  Status: {delivery.status === 0 ? "Pending" : "Delivered"}
                </p>
              </div>
              <button className="mt-4 py-2 rounded-lg text-[#4a5565] bg-[#9fe7e1] hover:bg-[#8fd6d0] transition-colors">
                View Details
              </button>
            </div>
          ))}
        </div>

        {/* Calendar Section */}
        <div className="w-96 bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">
              {calendar.month} {calendar.year}
            </h2>
            <div className="flex gap-2">
              <button className="p-1 hover:bg-gray-100 rounded">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button className="p-1 hover:bg-gray-100 rounded">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-2 text-sm">
            {calendar.weekDays.map((day, index) => (
              <div key={index} className="text-center text-gray-500 py-2">
                {day}
              </div>
            ))}
            {calendar.days.map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDate(day)}
                className={`
                  aspect-square rounded-full flex items-center justify-center
                  ${day === selectedDate ? "bg-[#9FE7E1] text-white" : "hover:bg-gray-100"}
                  ${[5, 12, 15, 20].includes(day) ? "text-[#9FE7E1] font-semibold" : ""}
                `}
              >
                {day}
              </button>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3 mt-8">
            <a href="/milkmanlist">
            <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-[#9FE7E1] text-gray-600 rounded-md hover:bg-[#8fd6d0] transition-colors">
              <Settings className="h-4 w-4" />
              Manage Preferences
            </button>
            
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}