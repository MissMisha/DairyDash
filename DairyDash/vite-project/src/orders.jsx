import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Orders() {
  const [upcomingDeliveries, setUpcomingDeliveries] = useState([])
  const [metrics, setMetrics] = useState({
    totalCustomers: 0,
    pendingOrders: 0,
    totalOrders: 0
  })
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 4

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [upcomingRes, customersRes, pendingRes, ordersRes] = await Promise.all([
          axios.get('http://localhost:2004/upcoming'),
          axios.get('http://localhost:2004/totalcustomers'),
          axios.get('http://localhost:2004/pendingorders'),
          axios.get('http://localhost:2004/totalorders')
        ])

        setUpcomingDeliveries(upcomingRes.data)
        setMetrics({
          totalCustomers: customersRes.data.totalCustomers,
          pendingOrders: pendingRes.data.totalCustomers,
          totalOrders: ordersRes.data.totalOrders
        })
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    fetchData()
  }, [])

  const handleRemoveDelivery = async (uid) => {
    try {
      await axios.post('http://localhost:2004/deletedaily', { uid })
      const response = await axios.get('http://localhost:2004/upcoming')
      setUpcomingDeliveries(response.data)
    } catch (error) {
      console.error("Error removing delivery:", error)
    }
  }

  // Calculate pagination values
  const totalPages = Math.ceil(upcomingDeliveries.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentDeliveries = upcomingDeliveries.slice(startIndex, endIndex)

  // Pagination controls
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Upcoming Orders Section */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-bold mb-6">Upcoming Orders</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left bg-gray-50">
                  <th className="py-3 px-4 text-gray-600 font-medium">Customer ID</th>
                  <th className="py-3 px-4 text-gray-600 font-medium">Address</th>
                  <th className="py-3 px-4 text-gray-600 font-medium">Status</th>
                  <th className="py-3 px-4 text-gray-600 font-medium">Price</th>
                  <th className="py-3 px-4 text-gray-600 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentDeliveries.map((delivery, index) => (
                  <tr key={index} className="border-t border-gray-100">
                    <td className="py-3 px-4">{delivery.uid}</td>
                    <td className="py-3 px-4">{delivery.address}</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                        {delivery.status === 0 ? 'Pending' : 'Completed'}
                      </span>
                    </td>
                    <td className="py-3 px-4">₨ {delivery.price}</td>
                    <td className="py-3 px-4">
                      <button 
                        onClick={() => handleRemoveDelivery(delivery.uid)}
                        className="px-4 py-1 text-gray-600 bg-[#9FE7E1] rounded-md hover:bg-[#8fd6d0] transition-colors"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {upcomingDeliveries.length === 0 && (
            <div className="text-center py-4 text-gray-500">
              No upcoming deliveries found
            </div>
          )}
          
          {/* Pagination Controls */}
          {upcomingDeliveries.length > 0 && (
            <div className="mt-6 flex justify-between items-center">
              <div className="text-sm text-gray-600">
                Showing {startIndex + 1} to {Math.min(endIndex, upcomingDeliveries.length)} of {upcomingDeliveries.length} entries
              </div>
              <div className="flex gap-2">
                <button
                  onClick={goToPreviousPage}
                  disabled={currentPage === 1}
                  className={`p-2 rounded-md ${
                    currentPage === 1 
                      ? 'text-gray-400 cursor-not-allowed' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <ChevronLeft size={20} />
                </button>
                <span className="px-4 py-2 text-gray-600">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={goToNextPage}
                  disabled={currentPage === totalPages}
                  className={`p-2 rounded-md ${
                    currentPage === totalPages 
                      ? 'text-gray-400 cursor-not-allowed' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Customer Overview Section */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-bold mb-6">Customer Overview</h2>
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-gray-600 mb-1">Total Customers</h3>
                <p className="text-3xl font-bold">{metrics.totalCustomers}</p>
              </div>
              <div className="text-right">
                <p className="text-gray-600 mb-1">Percentage Increase</p>
                <p className="text-2xl font-bold text-[#4ADE80]">14%</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-gray-600 mb-1">Pending Orders Today</h3>
                <p className="text-3xl font-bold text-[#FFA500]">{metrics.pendingOrders}</p>
              </div>
              <div className="text-right">
                <h3 className="text-gray-600 mb-1">Total Orders this Month</h3>
                <p className="text-3xl font-bold">{metrics.totalOrders}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
  