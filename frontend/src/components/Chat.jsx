// import React from 'react'
// import HeadingWithTypingEffect from './HeadingWithTypingEffect';
// import { BriefcaseBusiness, Lightbulb } from 'lucide-react';
// import { GraduationCap } from 'lucide-react';
// import { BookOpenText } from 'lucide-react';
// import { School } from 'lucide-react';
// import { LibraryBig } from 'lucide-react';
// import { useState } from 'react';
// import { Mic } from 'lucide-react';
// import { SendHorizontal } from 'lucide-react';
// const Chat = () => {

//     const [searchQuery, setSearchQuery] = useState('Ask XZAYOGN about scholarships or jobs');

//   return (
//     <div className='h-[92vh] w-[82vw] flex flex-col items-center justify-center'>
//       <HeadingWithTypingEffect
//                     text="Heeyy, What are we looking today?"
//                     className={`text-3xl text-center fixed top-[15vh] left-[88vh]`}
//                   />

//                   <div className='flex gap-8 h-[15vh] text-sm '>
//                     <div className='bg-[#F2F3F5] h-[15vh] w-[13vw] flex flex-col gap-1 items-center justify-center'>

//                         <BriefcaseBusiness size={30}  className='text-[#C69A00] ' />
//                         <p>Find paid internships for students</p>
//                     </div>

//                     <div className='bg-[#F2F3F5] h-[15vh] w-[13vw] flex flex-col gap-1 items-center justify-center'>
//                             <GraduationCap size={30}  className='text-blue-500'/>
//                         <p>Find scholarships for undergraduate students</p>
//                     </div>

//                     <div className='bg-[#F2F3F5] h-[15vh] w-[13vw] flex flex-col gap-1 items-center justify-center'>

//                             <BookOpenText size={30}  className='text-[#00C614]'/>
//                         <p>
//                             Access study materials for students
//                         </p>
//                     </div>

//                     <div className='bg-[#F2F3F5] h-[15vh] w-[13vw] flex flex-col gap-1 items-center justify-center'>

//                             <BookOpenText size={30}  className='text-red-500'/>
//                         <p>
//                             Access study materials for students
//                         </p>
//                     </div>
//                   </div>
                  
//                   <div className='w-full h-[8vh] flex items-center justify-center gap-8 mt-[10vh]'>
//                         <button className='bg-[#F2F3F5] rounded-md flex gap-2 items-center justify-center'>
//                             <Lightbulb size={20} className='text-red-500'/>
//                             Skills</button>
//                         <button className='bg-[#F2F3F5] rounded-md flex gap-2 items-center justify-center'>
//                             <BookOpenText size={20} className='text-[#0B9AD7]'/>
//                             Coursess</button>
//                         <button className='bg-[#F2F3F5] rounded-md flex gap-2 items-center justify-center'>
//                             <School size={20} className='text-[#00C614]'/>
//                             Career</button>
//                         <button className='bg-[#F2F3F5] rounded-md flex gap-2 items-center justify-center'>
//                             <LibraryBig size={20} className='text-[#C69A00] '/>
//                             Learning</button>
//                   </div>


//                   <div className="w-[60vw]  bottom-14 fixed">
//       <form  className="flex items-center border bg-[#F2F3F5] border-gray-300 rounded-lg p-2 pl-4 pr-4">
//         <Mic/>
//         <input
//           type="text"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           className="ml-2 w-full p-2 text-sm text-gray-700 border-none focus:outline-none bg-[#F2F3F5]"
//           placeholder="Search..."
//         />

// <SendHorizontal />
//       </form>
//     </div>

//     </div>
//   )
// }

// export default Chat



import React, { useState } from 'react';
import HeadingWithTypingEffect from './HeadingWithTypingEffect';
import { BriefcaseBusiness, Lightbulb, GraduationCap, BookOpenText, School, LibraryBig, Mic, SendHorizontal } from 'lucide-react';

const Chat = () => {
  const [searchQuery, setSearchQuery] = useState('Ask XZAYOGN about scholarships or jobs');
  
  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search logic (e.g., API call, state update, etc.)
    console.log('Search for:', searchQuery);
  };

  return (
    <div className='h-[92vh] w-[82vw] flex flex-col items-center justify-center relative'>
      <HeadingWithTypingEffect
        text="Heeyy, What are we looking today?"
        className={`text-3xl text-center fixed top-[15vh] left-[88vh]`}
      />
      <div className='flex gap-8 h-[15vh] text-sm mb-10'>
        {['Find paid internships for students', 'Find scholarships for undergraduate students', 'Access study materials for students', 'Access study materials for students'].map((text, index) => (
          <div key={index} className='bg-[#F2F3F5] h-[15vh] w-[13vw] flex flex-col gap-1 items-center justify-center  transition-all duration-300 hover:scale-105 cursor-pointer'>
            <div className={`text-[${index === 0 ? '#C69A00' : index === 1 ? '#0000FF' : '#00C614'}]`}>
              {index === 0 ? <BriefcaseBusiness size={30} /> : index === 1 ? <GraduationCap size={30} /> : <BookOpenText size={30} />}
            </div>
            <p className='text-center'>{text}</p>
          </div>
        ))}
      </div>
      
      <div className='w-full h-[8vh] flex items-center justify-center gap-4 mt-[10vh]'>
        {['Skills', 'Courses', 'Career', 'Learning'].map((label, index) => (
          <button
            key={index}
            className='bg-[#F2F3F5] rounded-md flex gap-2 items-center justify-center hover:bg-gray-200 transition-all duration-300 h-[6vh] w-[8vw] p-1'
          >
            {index === 0 && <Lightbulb size={20} className='text-red-500' />}
            {index === 1 && <BookOpenText size={20} className='text-[#0B9AD7]' />}
            {index === 2 && <School size={20} className='text-[#00C614]' />}
            {index === 3 && <LibraryBig size={20} className='text-[#C69A00]' />}
            {label}
          </button>
        ))}
      </div>

      <div className="w-[60vw] bottom-14 fixed">
        <form onSubmit={handleSearch} className="flex items-center border bg-[#F2F3F5] border-gray-300 rounded-lg p-2 pl-4 pr-4  transition-all duration-300">
          <Mic className='cursor-pointer' />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="ml-2 w-full p-2 text-sm text-gray-700 border-none focus:outline-none bg-[#F2F3F5] transition-all duration-300"
            placeholder="Search..."
          />
          {searchQuery && (
            <button type="button" onClick={() => setSearchQuery('')} className="text-gray-500 p-2">
              ✖
            </button>
          )}
          <SendHorizontal className='cursor-pointer' onClick={handleSearch} />
        </form>
      </div>
    </div>
  );
};

export default Chat;
