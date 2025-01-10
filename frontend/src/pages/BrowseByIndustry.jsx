
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Loader from '../components/Loader';
import { motion } from 'framer-motion';
import { CircleArrowRight } from 'lucide-react';
import Left from '../components/Left';
import Header from '../components/Header';

const BrowseByIndustry = () => {
  const location = useLocation();
  const { industryCode } = location.state || {};
  const navigate = useNavigate();

  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCareers = async () => {
      try {
        setLoading(true); // Start loading
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/industry/${industryCode}`);
        setCareers(response.data.careers.career);
      } catch (err) {
        setError('Failed to fetch careers');
      } finally {
        setLoading(false); // Stop loading
      }
    };

    if (industryCode) {
      fetchCareers();
    }
  }, [industryCode]);

  const handleCareerClick = (careerCode) => {
    navigate(`/careers/${careerCode}`);
  };

  return (
    <div className="w-[100vw] h-[100vh] overflow-x-hidden overflow-y-hidden">
      <Header />

      <div className="w-full h-screen overflow-hidden flex justify-center">
        <Left />
        <div className="w-[82vw] flex h-auto">
          <div className="col-span-1 shadow-lg p-6 overflow-y-auto border border-gray-200 w-full scrollbar-hidden">
            {loading ? (
              <Loader />
            ) : error ? (
              <p className="text-center text-red-600">{error}</p>
            ) : careers.length > 0 ? (
              <ul className="w-full space-y-4 mb-[6vh]">
                {careers.map((career, index) => (
                  <motion.li
                    key={career.code}
                    onClick={() => handleCareerClick(career.code)}
                    className="text-black hover:bg-gradient-to-r hover:bg-gray-300 rounded-lg p-4 cursor-pointer transition transform hover:scale-105 shadow-md"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <div className="flex justify-between items-center w-full">
                      <h3 className="text-md font-medium">{career.title}</h3>
                      <motion.div
                        className=""
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <CircleArrowRight />
                      </motion.div>
                    </div>
                  </motion.li>
                ))}
              </ul>
            ) : (
              <p className="text-center text-gray-500">No careers found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseByIndustry;
