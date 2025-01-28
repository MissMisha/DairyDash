import { useState } from "react"
import { Search } from "lucide-react"
import React from "react"
// import SubscriptionModel from "./SubscriptionModel"
import SubscriptionModel from "./SubscriptionModel"

export default function MilkmanListings() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => setIsModalOpen(true)
    const closeModal = () => setIsModalOpen(false)

    return (
        <div className="max-w-7xl mx-auto p-6">

            <div className="bg-white rounded-lg shadow-sm p-6 mb-12">
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold">Current Vendor</h2>
                        <div className="space-y-2">
                            <p>
                                <span className="font-medium">Vendor Name:</span> Aman
                            </p>
                            <p>
                                <span className="font-medium">Area:</span> 45 Ashok Vihar, Pune
                            </p>
                            <p>
                                <span className="font-medium">Email:</span> aman@gmail.com
                            </p>
                            <p>
                                <span className="font-medium">Plan:</span> 1 week
                            </p>
                        </div>
                        
                    </div>
                    <div className="flex gap-4 mt-6 md:mt-0">
                        <img
                            src="/src/images/list1.png"
                            alt="Vendor profile"
                            className="w-32 h-32 rounded-lg object-cover"
                        />

                    </div>
                </div>
            </div>
            <h1 className="text-3xl font-bold text-center mb-8">Milkman Listings</h1>


            <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search milkman"
                        className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9FE7E1]"
                    />
                </div>
                <select className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9FE7E1] min-w-[150px]">
                    <option value="">Location</option>
                    <option value="pune">Pune</option>
                    <option value="mumbai">Mumbai</option>
                    <option value="delhi">Delhi</option>
                </select>
                <button className="px-6 py-2 bg-[#9FE7E1] text-gray-700 rounded-md hover:bg-[#8fd6d0] transition-colors">
                    Search
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex gap-4 bg-white rounded-lg p-4">
                    <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">Vijay Dairy</h3>
                        <p className="text-sm text-gray-600 mb-1">Organic Cow Milk, $2/L</p>
                        <p className="text-sm text-gray-600 mb-4">Delivers to Main Bazaar City Centre</p>
                        <button
                            onClick={openModal}
                            className="px-4 py-2 bg-[#9FE7E1] text-gray-700 rounded-md hover:bg-[#8fd6d0] transition-colors text-sm"
                        >
                            Subscribe
                        </button>
                    </div>
                    <img
                        src="/src/images/list2.png"
                        alt="Vijay Dairy products"
                        className="w-32 h-32 rounded-lg object-cover"
                    />
                </div>

                <div className="flex gap-4 bg-white rounded-lg p-4">
                    <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">Sharma's Farm</h3>
                        <p className="text-sm text-gray-600 mb-1">Almond & Soy Milk, $3/L</p>
                        <p className="text-sm text-gray-600 mb-4">Delivers to Central Nagar-Sadar Area</p>
                        <button
                            onClick={openModal}
                            className="px-4 py-2 bg-[#9FE7E1] text-gray-700 rounded-md hover:bg-[#8fd6d0] transition-colors text-sm"
                        >
                            Subscribe
                        </button>
                    </div>
                    <img
                        src="/src/images/list3.png"

                        alt="Sharma's Farm products"
                        className="w-32 h-32 rounded-lg object-cover"
                    />
                </div>

                <div className="flex gap-4 bg-white rounded-lg p-4">
                    <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">Verma Diary</h3>
                        <p className="text-sm text-gray-600 mb-1">Goat & Camel Milk, $4/L</p>
                        <p className="text-sm text-gray-600 mb-4">Delivers to Central Residency Rajmarg Zone</p>
                        <button
                            onClick={openModal}
                            className="px-4 py-2 bg-[#9FE7E1] text-gray-700 rounded-md hover:bg-[#8fd6d0] transition-colors text-sm"
                        >
                            Subscribe
                        </button>
                    </div>
                    <img
                        src="/src/images/list4.png"
                        alt="Verma Diary milkman"
                        className="w-32 h-32 rounded-lg object-cover"
                    />
                </div>


                <div className="flex gap-4 bg-white rounded-lg p-4">
                    <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">OM Dairy</h3>
                        <p className="text-sm text-gray-600 mb-1">Buffalo & A2 Milk, $2.5/L</p>
                        <p className="text-sm text-gray-600 mb-4">Delivers to Gram Vihar, Vihar Colony</p>
                        <button
                            onClick={openModal}
                            className="px-4 py-2 bg-[#9FE7E1] text-gray-700 rounded-md hover:bg-[#8fd6d0] transition-colors text-sm"
                        >
                            Subscribe
                        </button>
                    </div>
                    <img
                        src="/src/images/list5.png"
                    alt="OM Dairy products"
                    className="w-32 h-32 rounded-lg object-cover"
                    />
                </div>
            </div>


            <SubscriptionModel isOpen={isModalOpen} onClose={closeModal} />
        </div>
    )
}

