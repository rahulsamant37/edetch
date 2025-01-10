
// import React from 'react';
// import { ChevronDown} from 'lucide-react';
// import { Search } from 'lucide-react';
// import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
// import { useState } from 'react';
// const Header = () => {
//   const navigate = useNavigate(); // Initialize the navigate function

//   const [searchItem,setSearchItem]=useState('');
  
//     const handleKeyDown=(event)=>{
//       if(event.key==='Enter' && searchItem.trim()!==''){
//         navigate(`/search/${searchItem}`)
//       }
//     }

//   return (
//     <div className="w-full h-[8vh] bg-[#F2F3F5] flex items-center justify-between px-6 md:px-10 lg:px-16 py-4">
//       <div className="flex items-center gap-8 md:gap-12">
//         <div className="font-semibold text-xl">Logo</div>
//         <div className="flex gap-4 text-sm">
//           {[
//             { label: "Chat", path: "/bot" },
//             { label: "Psychometric Test", path: "/pschometric-test" },
//             { label: "Marketplace", path: "/explore" },
//           ].map((item) => (
//             <button
//               key={item.label}
//               className="font-semibold hover:text-[#2D9A54] transition relative group"
//               onClick={() => navigate(item.path)}
//             >
//               {item.label}
//               <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-[#2D9A54] transition-all duration-300 group-hover:w-full"></span>
//             </button>
//           ))}
//         </div>
//       </div>

         
//       <div className='w-[40vw] text-black pt-1 pb-1'>
      
//  <input
//  type='text'
//  placeholder='Search careers here'
//  value={searchItem}
//  onChange={(e)=>setSearchItem(e.target.value)}  
//  onKeyDown={handleKeyDown}

//  className='w-full max-w-md p-2 border-2 rounded-lg focus:outline-none   border-[#bebebe] '>
  
 

//  </input>
// </div>

//       <div className="flex gap-6 items-center">
    

//         <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
//           <img
//             src="https://i.pravatar.cc/300"
//             alt="User Avatar"
//             className="w-full h-full object-cover"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;









import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import axios from 'axios';
import { Search } from 'lucide-react';

const Header = () => {
  const navigate = useNavigate(); // Initialize the navigate function
  const [searchItem, setSearchItem] = useState('');
  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(false);

  // Function to fetch careers based on search input
  // const fetchCareers = async () => {
  //   try {
  //     setLoading(true); // Start loading
  //     const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/search/${searchItem}`);
  //     console.log(response.data);

  //     const fetchedCareers = response.data.careers.career;
  //     setCareers(Array.isArray(fetchedCareers) ? fetchedCareers : [fetchedCareers]);
  //   } catch (err) {
  //     console.error(err);
  //   } finally {
  //     setLoading(false); // End loading
  //   }
  // };

    const handleKeyDown=(event)=>{
      if(event.key==='Enter' && searchItem.trim()!==''){
        navigate(`/search/${searchItem}`)
      }
    }

  const fetchCareers = async () => {
    try {
      setLoading(true); // Start loading
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/search/${searchItem}`);
      console.log(response.data);
  
      // Safely handle undefined or null
      const fetchedCareers = response.data?.careers?.career;
      setCareers(
        Array.isArray(fetchedCareers) ? fetchedCareers : fetchedCareers ? [fetchedCareers] : []
      );
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false); // End loading
    }
  };
  
  // Use effect with debouncing for dynamic search
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchItem.trim() !== '') {
        fetchCareers();
      } else {
        setCareers([]); // Clear suggestions if the input is empty
      }
    }, 300); // 300ms debounce delay

    return () => clearTimeout(delayDebounceFn); // Cleanup timeout on unmount or input change
  }, [searchItem]);

  // Function to handle search suggestion click
  const handleSuggestionClick = (career) => {
    setSearchItem(career); // Set the clicked suggestion as the search item
    navigate(`/search/${career}`); // Navigate to the career page
  };

  return (
    <div className="w-full h-[8vh] bg-[#F2F3F5] flex items-center justify-between px-6 md:px-10 lg:px-16 py-4">
      <div className="flex items-center gap-8 md:gap-12">
        <div className="font-semibold text-xl">Logo</div>
        <div className="flex gap-4 text-sm">
          {[
            { label: 'Chat', path: '/bot' },
            { label: 'Psychometric Test', path: '/pschometric-test' },
            { label: 'Marketplace', path: '/explore' },
          ].map((item) => (
            <button
              key={item.label}
              className="font-semibold hover:text-[#2D9A54] transition relative group"
              onClick={() => navigate(item.path)}
            >
              {item.label}
              <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-[#2D9A54] transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </div>
      </div>

      <div className="w-[40vw] text-black relative">
      <div className="relative w-[40vw] text-black">
  {/* Search Icon */}
  <Search className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
  {/* Input */}
  <input
    type="text"
    placeholder="Search careers here"
    value={searchItem}
    onChange={(e) => setSearchItem(e.target.value)}
    className="w-full max-w-md p-2 pl-10 border-2 rounded-lg focus:outline-none border-[#bebebe]"
    onKeyDown={handleKeyDown}
  />
</div>

        {/* {loading && <div className="absolute top-full mt-2">Loading...</div>} */}
        {careers.length > 0 && (
          <ul className="absolute top-full mt-2   bg-white shadow-lg border border-[#bebebe] rounded-3xl p-3 max-h-[50vh] overflow-scroll w-[33vw]">
     {careers.map((career, index) => (
  <li
    key={index}
    className="p-2 hover:bg-[#f0f0f0] cursor-pointer text-[#808080] flex gap-3"
    onClick={() => career?.title && handleSuggestionClick(career.title)} // Check if title exists
  >
    <Search/>
    {career?.title || "Unknown Career"} {/* Fallback if title is undefined */}
  </li>
))}


          </ul>
        )}
      </div>

      <div className="flex gap-6 items-center">
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
          <img
            src="https://i.pravatar.cc/300"
            alt="User Avatar"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
