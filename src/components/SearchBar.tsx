import { Search } from "lucide-react";
import React from "react";

function SearchBar() {
  return (
    // <div className=" relative flex items-center">
    //   <input
    //     type="text"
    //     placeholder="Search..."
    //     className="border py-1.5 px-2.5 rounded "
    //   />
    //   <Search className="absolute right-6  bottom-2 size-5" />
    // </div>
    <div className="relative flex items-center">
      <input
        type="text"
        placeholder="Search..."
        className="border py-1.5 px-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-red-400"
      />
      <Search className="absolute right-3 text-gray-500 size-5 pointer-events-none" />
    </div>
  );
}

export default SearchBar;
