import { useState, useEffect } from "react"
import { Search } from "lucide-react"
import React from "react"
import axios from "axios"
import SubscriptionModel from "./SubscriptionModel"

export default function MilkmanListings() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [currentVendor, setCurrentVendor] = useState(null)
    const [milkmen, setMilkmen] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedLocation, setSelectedLocation] = useState("")

    const openModal = () => setIsModalOpen(true)
    const closeModal = () => setIsModalOpen(false)

    // Fetch current vendor details
    useEffect(() => {
        const fetchCurrentVendor = async () => {
            try {
                // First get the current vendor's UID
                const vendorResponse = await axios.get("http://localhost:2004/currentvendor")
                console.log("Current vendor response:", vendorResponse.data)
                
                if (vendorResponse.data.status) {
                    // Then get all milkmen to find the matching vendor
                    const milkmenResponse = await axios.get("http://localhost:2004/showmilkman")
                    console.log("All milkmen response:", milkmenResponse.data)
                    
                    // Find the current vendor in the milkmen list
                    const vendorDetails = milkmenResponse.data.find(
                        vendor => vendor.uid === vendorResponse.data.milkman
                    )
                    console.log("Found vendor details:", vendorDetails)
                    
                    if (vendorDetails) {
                        setCurrentVendor(vendorDetails)
                    } else {
                        console.log("Vendor not found in milkmen list")
                    }
                } else {
                    console.log("No current vendor found in response")
                }
            } catch (err) {
                console.error("Error fetching current vendor:", err)
                setError("Failed to fetch current vendor details")
            }
        }
        fetchCurrentVendor()
    }, [])

    // Fetch all milkmen listings
    useEffect(() => {
        const fetchMilkmen = async () => {
            try {
                const response = await axios.get("http://localhost:2004/showmilkman")
                console.log("Fetched milkmen:", response.data)
                setMilkmen(response.data)
                setLoading(false)
            } catch (err) {
                console.error("Error fetching milkmen:", err)
                setError("Failed to fetch milkmen listings")
                setLoading(false)
            }
        }
        fetchMilkmen()
    }, [])

    // Filter milkmen based on search and location
    const filteredMilkmen = milkmen.filter(milkman => {
        const matchesSearch = milkman.name?.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesLocation = !selectedLocation || milkman.area?.toLowerCase().includes(selectedLocation.toLowerCase())
        return matchesSearch && matchesLocation
    })

    if (loading) return <div className="text-center p-6">Loading...</div>
    if (error) return <div className="text-center text-red-500 p-6">{error}</div>

    return (
        <div className="max-w-7xl mx-auto p-6">
            {currentVendor && (
                <div className="bg-white rounded-lg shadow-sm p-6 mb-12">
                    <div className="flex flex-col md:flex-row justify-between">
                        <div className="space-y-4">
                            <h2 className="text-xl font-semibold">Current Vendor</h2>
                            <div className="space-y-2">
                                <p>
                                    <span className="font-medium">Vendor Name:</span> {currentVendor.name || 'N/A'}
                                </p>
                                <p>
                                    <span className="font-medium">Area:</span> {currentVendor.area || 'N/A'}
                                </p>
                                <p>
                                    <span className="font-medium">Contact:</span> {currentVendor.contact || 'N/A'}
                                </p>
                                <p>
                                    <span className="font-medium">Price:</span> ${currentVendor.price || 'N/A'}/L
                                </p>
                                <p>
                                    <span className="font-medium">Milk Type:</span> {currentVendor.milktype || 'N/A'}
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4 mt-6 md:mt-0">
                            {currentVendor.picpath ? (
                                <img
                                    // src={`http://localhost:2004/uploads/${currentVendor.picpath}`}
                                    alt="Vendor profile"
                                    className="w-32 h-32 rounded-lg object-cover"
                                    onError={(e) => {
                                        e.target.onerror = null
                                        e.target.src = '/placeholder.jpg'
                                    }}
                                />
                            ) : (
                                <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                                    <span className="text-gray-400">No Image</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            <h1 className="text-3xl font-bold text-center mb-8">Milkman Listings</h1>

            <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search milkman"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9FE7E1]"
                    />
                </div>
                <select 
                    className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9FE7E1] min-w-[150px]"
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                >
                    <option value="">All Locations</option>
                    <option value="pune">Pune</option>
                    <option value="mumbai">Mumbai</option>
                    <option value="delhi">Delhi</option>
                </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredMilkmen.map((milkman) => (
                    <div key={milkman.uid} className="flex gap-4 bg-white rounded-lg p-4">
                        <div className="flex-1">
                            <h3 className="text-xl font-semibold mb-2">{milkman.name}</h3>
                            <p className="text-sm text-gray-600 mb-1">
                                {milkman.milktype}, ${milkman.price}/L
                            </p>
                            <p className="text-sm text-gray-600 mb-4">
                                Delivers to {milkman.area}
                            </p>
                            <button
                                onClick={openModal}
                                className="px-4 py-2 bg-[#9FE7E1] text-gray-700 rounded-md hover:bg-[#8fd6d0] transition-colors text-sm"
                            >
                                Subscribe
                            </button>
                        </div>
                        {milkman.picpath ? (
                            <img
                                // src={`http://localhost:2004/uploads/${milkman.picpath}`}
                                alt={`${milkman.name} products`}
                                className="w-32 h-32 rounded-lg object-cover"
                                onError={(e) => {
                                    e.target.onerror = null
                                    e.target.src = '/placeholder.jpg'
                                }}
                            />
                        ) : (
                            <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                                <span className="text-gray-400">No Image</span>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <SubscriptionModel isOpen={isModalOpen} onClose={closeModal} />
        </div>
    )
}