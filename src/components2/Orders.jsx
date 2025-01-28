import React from 'react'

export default function Orders() {
    const orders = [
      {
        customerName: "Aman",
        address: "123 B-Block, Sector 21",
        duration: "1 month",
        contactNumber: "555-1234",
        milkType: "Whole",
      },
      {
        customerName: "Raman",
        address: "56 Green Park, Delhi",
        duration: "2 weeks",
        contactNumber: "555-5678",
        milkType: "Skim",
      },
      {
        customerName: "Raj",
        address: "15 Shanti Nagar, Mumbai",
        duration: "1 week",
        contactNumber: "555-9012",
        milkType: "2% Milk",
      },
    ]
  
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
                    <th className="py-3 px-4 text-gray-600 font-medium">Customer Name</th>
                    <th className="py-3 px-4 text-gray-600 font-medium">Address</th>
                    <th className="py-3 px-4 text-gray-600 font-medium">Duration</th>
                    <th className="py-3 px-4 text-gray-600 font-medium">Contact Number</th>
                    <th className="py-3 px-4 text-gray-600 font-medium">Milk Type</th>
                    <th className="py-3 px-4 text-gray-600 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order, index) => (
                    <tr key={index} className="border-t border-gray-100">
                      <td className="py-3 px-4">{order.customerName}</td>
                      <td className="py-3 px-4">{order.address}</td>
                      <td className="py-3 px-4">{order.duration}</td>
                      <td className="py-3 px-4">{order.contactNumber}</td>
                      <td className="py-3 px-4">{order.milkType}</td>
                      <td className="py-3 px-4">
                        <button className="px-4 py-1 text-gray-600 bg-[#9FE7E1] rounded-md hover:bg-[#8fd6d0] transition-colors">
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 text-center">
              <button className="px-6 py-2 bg-[#9FE7E1] text-gray-600 rounded-md hover:bg-[#8fd6d0] transition-colors">
                View More
              </button>
            </div>
          </div>
  
          {/* Customer Overview Section */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold mb-6">Customer Overview</h2>
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-gray-600 mb-1">Total Customers</h3>
                  <p className="text-3xl font-bold">140</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-600 mb-1">Percentage Increase</p>
                  <p className="text-2xl font-bold text-[#4ADE80]">14%</p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-gray-600 mb-1">Pending Orders Today</h3>
                  <p className="text-3xl font-bold text-[#FFA500]">13</p>
                </div>
                <div className="text-right">
                  <h3 className="text-gray-600 mb-1">Total Orders this Month</h3>
                  <p className="text-3xl font-bold">243</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
