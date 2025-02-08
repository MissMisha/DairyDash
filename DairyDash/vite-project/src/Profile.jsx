import { User, MapPin, Phone, UserPlus } from "lucide-react";
import React, { useState } from "react";
import axios from "axios";

export default function ProfilePage() {
  const [obj, setObj] = useState({
    uid: "",
    name: "",
    area: "",
    price: "",
    milktype: "",
    contact: "",
    ppic: null,
  });

  const [preview, setPreview] = useState(null); 

  function doUpdate(event) {
    const { name, value } = event.target;
    setObj({ ...obj, [name]: value });
  }

  function updatePic(event) {
    const file = event.target.files[0];
    if (file) {
      setObj({ ...obj, ppic: file });

      const reader = new FileReader();
      reader.onload = (e) => {
        setPreview(e.target.result); 
      };
      reader.readAsDataURL(file);
    }
  }

  async function doSaveWithPic() {
    let url = "http://localhost:2004/savemilkman";
    let fd = new FormData();

    for (let prop in obj) {
      if (prop !== "ppic") {
        fd.append(prop, obj[prop]);
      }
    }

    if (obj.ppic) {
      fd.append("ppic", obj.ppic);
    }

    try {
      const resp = await axios.post(url, fd, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (resp.data.status === true) {
        alert("Saved: " + resp.data.msg);

        setObj({
          uid: "",
          name: "",
          area: "",
          price: "",
          milktype: "",
          contact: "",
          ppic: null,
        });

        setPreview(null); 
        document.querySelector("form").reset();
      } else {
        alert("Error: " + resp.data.msg);
      }
    } catch (err) {
      console.error("Error during save:", err);
      alert("An error occurred: " + err.message);
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-2xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center mb-8">
          <div className="relative mb-4 px-4">
            {/* Display Image Preview */}
            <div className="w-32 h-32 bg-[#9FE7E1] rounded-full flex items-center justify-center overflow-hidden">
              {preview ? (
                <img
                  src={preview}
                  alt="Preview"
                  className="object-cover w-full h-full"
                />
              ) : (
                <UserPlus size={48} className="text-gray-600" />
              )}
            </div>
            <input
              type="file"
              name="ppic"
              onChange={updatePic}
              className="mt-4 px-4 py-2 bg-[#9FE7E1] text-gray-600 rounded-md hover:bg-[#8fd6d0] transition-colors flex items-center justify-center gap-2 mx-auto"
            />
          </div>
          <h1 className="text-2xl font-bold">Sign Up</h1>
        </div>

        <form className="space-y-6">
          <div className="relative">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              name="uid"
              placeholder="Email"
              className="w-full pl-10 pr-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9FE7E1]"
              value={obj.uid}
              onChange={doUpdate}
            />
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <MapPin className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full pl-10 pr-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9FE7E1]"
              value={obj.name}
              onChange={doUpdate}
            />
          </div>
          <div className="relative">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <MapPin className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              name="area"
              placeholder="Area"
              className="w-full pl-10 pr-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9FE7E1]"
              value={obj.area}
              onChange={doUpdate}
            />
          </div>
          
          <div className="relative">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <MapPin className="h-5 w-5 text-gray-400" />
            </div>
          <input
              type="text"
              name="price"
              placeholder="Price"
              className="w-full pl-10 pr-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9FE7E1]"
              onChange={doUpdate}
            />
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-gray-400" />
            </div>
            <select
              name="milktype"
              className="w-full pl-10 pr-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9FE7E1] appearance-none bg-white"
              onChange={doUpdate}
            >
              <option value="">Milk Type</option>
              <option value="whole">Whole Milk</option>
              <option value="skim">Skim Milk</option>
              <option value="2%">2% Milk</option>
            </select>
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Phone className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="number"
              name="contact"
              placeholder="Contact Number"
              className="w-full pl-10 pr-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9FE7E1]"
              onChange={doUpdate}
            />
          </div>

          <div className="flex items-center justify-center gap-4 pt-4">
            <input
              type="button"
              value="Save"
              className="px-8 py-2 bg-[#9FE7E1] text-gray-600 rounded-md hover:bg-[#8fd6d0] transition-colors"
              onClick={doSaveWithPic}
            />
            <button
              type="button"
              className="px-8 py-2 text-gray-600 border rounded-md hover:bg-gray-50"
            >
              Cancel
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
