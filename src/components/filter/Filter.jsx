import { useState } from "react";

import { FaSearch, FaTimes } from "react-icons/fa";
import "../../App.css";

function Filter() {
  const [searchTerm, setSearchTerm] = useState(null);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <div className="container mx-auto">
        <div className="rounded-lg border border-gray-200 bg-gray-100 p-5 drop-shadow-xl">
          <div>
            <div>
              <div className=" grid grid-cols-6 items-center gap-4 md:grid-cols-3 xl:grid-cols-6">
                <div className="search-bar col-span-3">
                  <div className="search-input-container">
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={handleSearchChange}
                      placeholder="Search..."
                      className="search-input w-full"
                    />

                    {searchTerm ? (
                      <FaTimes
                        className="clear-icon"
                        onClick={() => setSearchTerm("")}
                      />
                    ) : (
                      <FaSearch className="search-icon" />
                    )}
                  </div>
                  <ul className="search-results"></ul>
                  <div></div>
                </div>

                <div className="col-span-1 p-2">
                  <button className="rounded-md border-2 border-teal-600 bg-white px-4 py-2 text-sm text-teal-500">
                    Upload
                  </button>
                </div>

                <select className="col-span-1 h-12 w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-3  text-sm focus:border-gray-400 focus:bg-white focus:ring-0">
                  <option value="Filter">Filter</option>
                  <option value="Lorem 1">Lorem 1</option>
                  <option value="Lorem 2">Lorem 2</option>
                  <option value="Lorem 3">Lorem 3</option>
                </select>
                <select className="col-span-1 h-12 w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-3  text-sm focus:border-gray-400 focus:bg-white focus:ring-0">
                  <option value="Sortby">Sort by</option>
                  <option value="Lorem 1">Lorem 1</option>
                  <option value="Lorem 2">Lorem 2</option>
                  <option value="Lorem 3">Lorem 3</option>
                </select>
              </div>
            </div>

            <div>
              <div className=" mt-2 flex gap-4">
                <select className="h-12 w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-3  text-sm focus:border-gray-400 focus:bg-white focus:ring-0">
                  <option value="All categories">All categories</option>
                  <option value="Facilities Management">
                    Facilities Management
                  </option>
                  <option value="Cleaning Suplies">Cleaning Suplies</option>
                  <option value="Cutting Tools">Cutting Tools</option>
                  <option value="Food&Beverage">Food&Beverage</option>
                  <option value="Furnature">Furnature</option>
                  <option value="Maintance,Repair And Operations">
                    Maintance,Repair And Operations
                  </option>
                  <option value="Inks&Toners">Inks&Toners</option>
                  <option value="Hand Tools">Hand Tools</option>
                  <option value="Office Furnature&Supplies">
                    Office Furnature&Supplies
                  </option>
                  <option value="Office Suplies">Office Suplies</option>
                </select>
                <select className="h-12 w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-3  text-sm focus:border-gray-400 focus:bg-white focus:ring-0">
                  <option value="Fruits">Fruits</option>
                </select>
                <select className="h-12 w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-3  text-sm focus:border-gray-400 focus:bg-white focus:ring-0">
                  <option value="Vegitables">Vegitables</option>
                </select>
                <select className="h-12 w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-3  text-sm focus:border-gray-400 focus:bg-white focus:ring-0">
                  <option value="Dairy">Dairy</option>
                </select>
                <select className="h-12 w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-3  text-sm focus:border-gray-400 focus:bg-white focus:ring-0">
                  <option value="Meat&Poultry">Meat&Poultry</option>
                </select>
                <select className="w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-3  text-sm focus:border-gray-400 focus:bg-white focus:ring-0">
                  <option value="Sea food">Sea food</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
