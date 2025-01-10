import React from 'react';
import { Plus } from 'lucide-react';
import { RotateCw } from 'lucide-react';
import { Clock } from 'lucide-react';
import { CircleHelp } from 'lucide-react';

const Left = () => {
  return (
    <div className='h-[92vh] w-[20.25vw] bg-[#F2F3F5] flex flex-col items-center py-4'>
      <div className='flex flex-col gap-6 font-semibold mt-8 text-sm'>
        <button className='flex items-center justify-center bg-[#EBEDEF] w-[15vw] h-[6vh] gap-2 rounded-lg hover:bg-[#D1D7DB] transition'>
          <Plus className='w-[1.5vw] cursor-pointer hover:text-[#2D9A54] transition' />
          Start new chat
        </button>

        <button className='flex items-center justify-center bg-[#EBEDEF] w-[15vw] h-[6vh] gap-4 rounded-lg hover:bg-[#D1D7DB] transition'>
          <RotateCw className='w-[1.25vw] cursor-pointer hover:text-[#2D9A54] transition' />
          Refresh chat
        </button>
      </div>

      <div className='bg-[#F2F3F5] w-[15vw] text-sm mt-[5vh]'>
        <h3 className='font-semibold flex gap-2 mb-2'>
          <Clock className='w-[1.25vw]' />
          Chat History
        </h3>
        <div className='bg-[#EBEDEF] flex items-center justify-center h-[25vh] rounded-lg shadow-md hover:shadow-lg transition'>
          <p className='text-sm text-gray-600'>
            No chat history found. Start a new chat with XZAYOGN
          </p>
        </div>
      </div>

      <CircleHelp className='absolute bottom-2 left-4 h-10 cursor-pointer transition' />
    </div>
  );
};

export default Left;
