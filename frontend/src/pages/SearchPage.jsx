import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';  
import { CircleArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Left from '../components/Left';
import Loader from '../components/Loader';

const SearchPage = () => {
  const navigate = useNavigate();
  const { searchItem } = useParams();
  console.log(searchItem);

  const [careers, setCareers] = useState([]);
  const[loading,setLoading] = useState(false);

  useEffect(() => {
    const fetchCareers = async () => {
      try {
        setLoading(true); // Start loading
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/search/${searchItem}`);
        console.log(response.data);

      
        const fetchedCareers = response.data.careers.career;
        setCareers(Array.isArray(fetchedCareers) ? fetchedCareers : [fetchedCareers]);
      } catch (err) {
        console.error(err);
      }finally{
        setLoading(false)
      }
    };

    if (searchItem) {
      fetchCareers();
    }
  }, [searchItem]);

  const handleCareerClick = (careerCode) => {
    navigate(`/careers/${careerCode}`);
  };

  return (
    <div>
      <div className='w-[100vw] h-full'>
        <Header/>
        <div className='flex'>
          <Left/>
          <div className='w-[82vw]'>

{loading ? <Loader/>:(
  <div className='col-span-1 bg-white min-h-[92vh] max-h-[92vh] shadow-lg p-6 overflow-y-auto border border-gray-200 '>
  <ul className="w-full overflow-y-scroll space-y-3">
    {careers.map((career, index) => (
      <motion.li
        key={career.code}
        onClick={() => handleCareerClick(career.code)}
        className="px-4 py-2 duration-300 flex justify-between group
        text-black hover:bg-gradient-to-r hover:bg-gray-300 rounded-lg p-4 cursor-pointer transition transform hover:scale-105 shadow-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
      >
        <span className="text-md font-medium">{career.title}</span>
        <motion.div
          className=" group-hover:scale-105 flex justify-center items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <CircleArrowRight />
        </motion.div>
      </motion.li>
    ))}
  </ul>
</div>
)}

          
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;

