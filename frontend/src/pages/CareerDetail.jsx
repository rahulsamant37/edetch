import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import Left from "../components/Left";
import { BriefcaseBusiness, Compass, GraduationCap } from "lucide-react";
import Loader from "../components/Loader";
import { Footer } from "../components/Footer";
import { Bar } from 'react-chartjs-2';
const CareerDetail = () => {

  const [hoveredZone, setHoveredZone] = useState(null);

 
  const jobZoneDetails = {
    1: [
      { header: "Education:", content: "Some of these occupations may require a high school diploma or GED certificate." },
      { header: "Related Experience:", content: "Little or no previous work-related skill, knowledge, or experience is needed for these occupations. For example, a person can become a waiter or waitress even if they have never worked before." },
      { header: "Job Training:", content: "Employees in these occupations need anywhere from a few days to a few months of training. Usually, an experienced worker could show you how to do the job." },
      { header: "Job Zone Examples:", content: "These occupations involve following instructions and helping others. Examples include agricultural equipment operators, dishwashers, floor sanders and finishers, landscaping and groundskeeping workers, logging equipment operators, baristas, and maids and housekeeping cleaners." }
    ],
    2: [{ header: "Education", content: "These occupations usually require a high school diploma." },
      { header: "Related Experience:", content: "Some previous work-related skill, knowledge, or experience is usually needed. For example, a teller would benefit from experience working directly with the public." },
      { header: "Job Training:", content: "Employees in these occupations need anywhere from a few months to one year of working with experienced employees. A recognized apprenticeship program may be associated with these occupations." },
      { header: "Job Zone Examples:", content: "These occupations often involve using your knowledge and skills to help others. Examples include orderlies, counter and rental clerks, customer service representatives, security guards, upholsterers, tellers, and dental laboratory technicians." }
    ],
    3: [{ header: "Education", content: "Most occupations in this zone require training in vocational schools, related on-the-job experience, or an associate's degree." },
      { header: "Related Experience:", content: "Previous work-related skill, knowledge, or experience is required for these occupations. For example, an electrician must have completed three or four years of apprenticeship or several years of vocational training, and often must have passed a licensing exam, in order to perform the job." },
      { header: "Job Training:", content: "Employees in these occupations usually need one or two years of training involving both on-the-job experience and informal training with experienced workers. A recognized apprenticeship program may be associated with these occupations." },
      { header: "Job Zone Examples:", content: "These occupations usually involve using communication and organizational skills to coordinate, supervise, manage, or train others to accomplish goals. Examples include hydroelectric production managers, desktop publishers, electricians, agricultural technicians, barbers, court reporters and simultaneous captioners, and medical assistants." }],
    4: [{ header: "Education", content: "Most of these occupations require a four-year bachelor's degree, but some do not." },
      { header: "Related Experience:", content: "A considerable amount of work-related skill, knowledge, or experience is needed for these occupations. For example, an accountant must complete four years of college and work for several years in accounting to be considered qualified." },
      { header: "Job Training:", content: "Employees in these occupations usually need several years of work-related experience, on-the-job training, and/or vocational training." },
      { header: "Job Zone Examples:", content: "Many of these occupations involve coordinating, supervising, managing, or training others. Examples include real estate brokers, sales managers, database administrators, graphic designers, conservation scientists, art directors, and cost estimators." }],
    5: [{ header: "Education", content: "Most of these occupations require graduate school. For example, they may require a master's degree, and some require a Ph.D., M.D., or J.D. (law degree)." },
      { header: "Related Experience:", content: "Extensive skill, knowledge, and experience are needed for these occupations. Many require more than five years of experience. For example, surgeons must complete four years of college and an additional five to seven years of specialized medical training to be able to do their job." },
      { header: "Job Training:", content: "Employees may need some on-the-job training, but most of these occupations assume that the person will already have the required skills, knowledge, work-related experience, and/or training." },
      { header: "Job Zone Examples:", content: "These occupations often involve coordinating, training, supervising, or managing the activities of others to accomplish goals. Very advanced communication and organizational skills are required. Examples include pharmacists, lawyers, astronomers, biologists, clergy, physician assistants, and veterinarians." }]
  };

  const { careerCode } = useParams();
  const [careerDetail, setCareerDetail] = useState(null);
  const navigate = useNavigate();
  const[loading,setLoading]=useState(false);

  const [isSliding, setIsSliding] = useState(false);


  const handleClick = (path, state = {}) => {
    setIsSliding(true);
    setTimeout(() => {
      navigate(path, { state });
    }, 300); // Wait for the animation to complete before navigating
  };

  useEffect(() => {
    const fetchCareerDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/careers/${careerCode}`
        );
        console.log(response.data);
        setCareerDetail(response.data.career);
      } catch (err) {
        console.log(err);
      }
      finally {
        setLoading(false); // Stop loading
      }
    };

    fetchCareerDetails();
  }, [careerCode]);

  const [knowledge, setKnowledge] = useState(null);

  useEffect(() => {
    const fetchEducationDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/careers/${careerCode}/knowledge`
        );
        console.log(response.data);
        setKnowledge(response.data.knowledge.group);
      } catch (err) {
        console.log(err);
      }
      finally {
        setLoading(false); // Stop loading
      }
    };

    fetchEducationDetails();
  }, [careerCode]);

  const [skills, setSkills] = useState(null);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/careers/${careerCode}/skills`
        );
        console.log(response.data);
        setSkills(response.data.skills.group);
      } catch (err) {
        console.log(err);
      }
      finally {
        setLoading(false); // Stop loading
      }
    };

    fetchSkills();
  }, [careerCode]);

  const [abilities, setAbilities] = useState(null);

  useEffect(() => {
    const fetchAbilities = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/careers/${careerCode}/abilities`
        );
        console.log(response.data);
        setAbilities(response.data.abilities.group);
      } catch (err) {
        console.log(err);
      }
      finally {
        setLoading(false); // Stop loading
      }
    };

    fetchAbilities();
  }, [careerCode]);

  const [personality, setPersonality] = useState(null);

  useEffect(() => {
    const fetchPersonality = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${
            import.meta.env.VITE_API_URL
          }/api/careers/${careerCode}/personality`
        );
        console.log(response.data);
        setPersonality(response.data.personality);
      } catch (err) {
        console.log(err);
      }
      finally {
        setLoading(false); // Stop loading
      }
    };

    fetchPersonality();
  }, [careerCode]);

  const [technology, setTechnology] = useState(null);

  useEffect(() => {
    const fetchTechnology = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/careers/${careerCode}/technology`
        );
        console.log(response.data);
        setTechnology(response.data.technology);
      } catch (err) {
        console.log(err);
      }
      finally {
        setLoading(false); // Stop loading
      }
    };

    fetchTechnology();
  }, [careerCode]);

  const [jobOutlook, setJobOutlook] = useState(null);

  useEffect(() => {
    const fetchJobOutlook = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${
            import.meta.env.VITE_API_URL
          }/api/careers/${careerCode}/job_outlook`
        );
        console.log(response.data);
        setJobOutlook(response.data.job_outlook);
      } catch (err) {
        console.log(err);
      }
      finally {
        setLoading(false); // Stop loading
      }
    };

    fetchJobOutlook();
  }, [careerCode]);

  const [exploreMore, setExploreMore] = useState(null);

  useEffect(() => {
    const fetchExploreMore = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${
            import.meta.env.VITE_API_URL
          }/api/careers/${careerCode}/explore_more`
        );
        console.log(response.data);
        setExploreMore(response.data.explore_more);
      } catch (err) {
        console.log(err);
      }
      finally {
        setLoading(false); // Stop loading
      }

    };

    fetchExploreMore();
  }, [careerCode]);

  const navigationItems = [
    "FAQ",
    "Privacy Policy",
    "Terms of Service",
    "Contact Us"
  ];

  const [careerVideo, setCareerVideo] = useState(null);
  useEffect(() => {
    const fetchCareerVideo = async () => {
      try {
        setLoading(true);
        console.log(careerCode);
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/careerVideos/${careerCode}`
        );
        console.log(response.data);
        setCareerVideo(response.data.youtubeVideoPage);
      } catch (err) {
        console.log(err);
      }
      finally {
        setLoading(false); // Stop loading
      }
    };
    fetchCareerVideo();
  }, [careerCode]);

  const [education, setEducation] = useState(null);

  useEffect(() => {
    const fetchEducation = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/careers/${careerCode}/education`
        );
        console.log(response.data);
        setEducation(response.data.education);
      } catch (err) {
        console.log(err);
      }
      finally {
        setLoading(false); // Stop loading
      }
    };

    fetchEducation();
  }, [careerCode]);

  const chartData = jobOutlook?.salary
    ? {
        labels: ['10th Percentile', 'Median', '90th Percentile'],
        datasets: [
          {
            label: 'Annual Salary',
            data: [
              jobOutlook.salary.annual_10th_percentile,
              jobOutlook.salary.annual_median,
              jobOutlook.salary.annual_90th_percentile,
            ],
            backgroundColor: ['#F87171', '#4CC9C9', '#34D399'], // Custom colors
            borderWidth: 1,
          },
          {
            label: 'Hourly Salary',
            data: [
              jobOutlook.salary.hourly_10th_percentile,
              jobOutlook.salary.hourly_median,
              jobOutlook.salary.hourly_90th_percentile,
            ],
            backgroundColor: ['#FBBF24', '#60A5FA', '#A78BFA'], // Custom colors
            borderWidth: 1,
          },
        ],
      }
    : null;

  return (
    <div className="w-full max-h-screen overflow-hidden  justify-center  text-black">
        <Header className="w-[100vw]"/>
      <div className="w-full flex">
        <Left/>

        <div className="w-[79.75vw] flex flex-col items-center">
          
          
          {loading ? (<Loader/>) : <div
            className="w-full h-screen overflow-y-scroll"
            
          >
            <motion.h1
              className="text-3xl text-black font-bold pt-[4vh] w-full flex items-center justify-center mb-[3.10vh] select-none"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {careerDetail?.title}
            </motion.h1>

<div className="w-full ">

<div  className="flex items-center justify-center w-[79.75vw]">
             {/* {careerVideo && ( 
               <div className="w-[489px] h-[276px] rounded-2xl overflow-hidden  mb-[3.5vh]">
               <iframe 
                
                 src="https://www.youtube.com/embed/aK2PVtgWLp8?rel=0&autoplay=1&mute=1"  
                 title="YouTube video player" 
                 frameborder="0" 
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                 allowfullscreen
                 className="w-full h-full"
               >
               </iframe>
             </div>
             
                 )}  */}

<div className="w-[489px] h-[275px] rounded-2xl overflow-hidden  mb-[3.5vh]">
               <iframe 
                
                 src="https://www.youtube.com/embed/aK2PVtgWLp8?rel=0&autoplay=1&mute=1"  
                 title="YouTube video player" 
                 frameborder="0" 
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                 allowfullscreen
                 className="w-full h-full"
               >
               </iframe>
             </div>
            </div>

           <div className="w-full flex gap-2 pl-9 pr-9">
           <div className="w-[65%]  flex flex-col">
            
              <h1 className="font-bold text-[22px] leading-[16px]"> Career Overview</h1>

              <motion.div
                className="flex gap-1"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-[14px] mt-4 leading-2">
                  <p className=" ">
                    Also called as:
                  </p>

                  {Array.isArray(careerDetail?.also_called?.title)
                    ? careerDetail?.also_called?.title.join(", ")
                    : "N/A"}
                </div>

                
              </motion.div>


              <motion.div
                className="gap-8 mt-4"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-[14px]">
                  <h1 className="text-[14px]">
                    Role in Society:
                  </h1>
                  <p className="">{careerDetail?.what_they_do}</p>
                </div>

                </motion.div>



              </div>

              <div className="w-[40%] h-full  flex flex-col items-start">
             


            <motion.div
                className="text-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6 }}
              >
               
                <div>
                  <h1 className="font-bold text-[22px] leading-[16px]">
                    Core Expertise:
                  </h1>
                  <ul className="flex flex-col list-disc gap-4 pl-5 mt-4">
                    {careerDetail?.on_the_job?.task?.map((task, index) => (
                      <li key={index} className="">
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>



                </div>
           </div>
</div>


          

           

            <div className="max-h-[100vh] mt-1">
              <motion.div
                className="grid grid-cols-3 gap-2 p-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6 }}
              >
                
                <div className="border-2 border-[#BEBEBE] rounded-lg p-6 pl-9 pt-9 transform transition-all duration-300 h-[80vh] w-[24vw] hover:border-[#4C6FC9]">

                  <h1 className="font-extrabold text-[20px] mb-4 text-[#4C6FC9] uppercase">
                    Knowledge
                  </h1>
                  {knowledge ? (
                    knowledge.map((group, index) => (
                      <div key={index} className="mb-4">
                        <h3 className="font-bold text-sm text-[#4C6FC9] mb-1">
                          {group.title._}
                        </h3>
                        <ul className="list-disc text-sm pl-5 flex flex-col gap-1 leading-tight">
                          {Array.isArray(group.element) ? (
                            group.element.map((item, subIndex) => (
                              <li className="capitalize" key={subIndex}>{item._}</li>
                            ))
                          ) : (
                            <li className="capitalize">{group.element._}</li>
                          )}
                        </ul>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-300">Loading...</p>
                  )}
                </div>

                <div className="border-2 border-[#BEBEBE] rounded-lg p-6 transform transition-transform duration-300 h-[80vh] w-[24vw] hover:border-[#C94C79]
                pl-9 pt-9">
                  <h1 className="font-extrabold text-[20px] mb-4 text-[#C94C79] uppercase">
                    Skills
                  </h1>
                  {skills ? (
                    skills.map((group, index) => (
                      <div key={index} className="mb-4">
                        <h3 className="font-bold text-sm text-[#C94C79] capitalize mb-1">
                          {group.title._}
                        </h3>
                        <ul className="list-disc pl-5 flex flex-col gap-1 text-sm capitalize leading-tight">
                          {Array.isArray(group.element) ? (
                            group.element.map((item, subIndex) => (
                              <li key={subIndex}>{item._}</li>
                            ))
                          ) : (
                            <li>{group.element._}</li>
                          )}
                        </ul>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-300">Loading...</p>
                  )}
                </div>

                <div className="border-2 border-[#BEBEBE] rounded-lg p-6 transform transition-transform duration-300 h-[80vh] w-[24vw] hover:border-[#4CC959]
                pl-9 pt-9">
                  <h1 className="font-extrabold text-[20px] mb-4 text-[#4CC959] uppercase">
                    Abilities
                  </h1>
                  {abilities ? (
                    abilities.map((group, index) => (
                      <div key={index} className="mb-4">
                        <h3 className="font-bold text-sm mb-1 text-[#4CC959]">
                          {group.title._}
                        </h3>
                        <ul className="list-disc pl-5 flex flex-col gap-1 text-sm capitalize leading-tight">
                          {Array.isArray(group.element) ? (
                            group.element.map((item, subIndex) => (
                              <li key={subIndex}>{item._}</li>
                            ))
                          ) : (
                            <li>{group.element._}</li>
                          )}
                        </ul>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-300">Loading...</p>
                  )}
                </div>
              </motion.div>
            </div>

            <div className="max-h-[80vh] -mt-1">
              <motion.div
                className="grid grid-cols-2 gap-4 pl-8 pr-8 pb-8 "
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6 }}
              >
                <div className="border-2 border-[#BEBEBE] rounded-lg p-6  transform transition-transform duration-300 w-[37vw] pl-9 pt-9 leading-tight hover:border-[#8B4CC9]">
                  <h1 className="font-extrabold text-[20px] mb-4 text-[#8B4CC9]  uppercase">
                    Personality
                  </h1>
                  {personality ? (
                    <>
                      <p className="text-sm">
                        {personality.top_interest.description}
                      </p>
                      <p className="mt-4 text-sm">
                        They do well at jobs that need:
                      </p>
                      <div className="mt-4">
                        <ul className="pl-9 flex flex-col list-disc text-[15px] gap-2 text-[#8B4CC9]">
                          {personality.work_styles?.element
                            .slice(0, 3)
                            .map((item, index) => (
                              <li key={index}>{item._}</li>
                            ))}
                        </ul>
                        <ul className="pl-9 flex flex-col list-disc gap-2 text-[15px] mt-1 text-[#8B4CC9]">
                          {personality.work_styles?.element
                            .slice(3)
                            .map((item, index) => (
                              <li key={index}>{item._}</li>
                            ))}
                        </ul>
                      </div>
                    </>
                  ) : (
                    <p className="text-gray-300">Loading...</p>
                  )}
                </div>

                <div className="border-2 border-[#BEBEBE] rounded-lg p-6  transform transition-transform duration-300 w-[37vw] pl-9 pt-9 hover:border-[#F9BC5F]">
                  <h1 className="font-extrabold text-[20px] uppercase  text-2xl mb-4 text-[#F9BC5F]">
                    Technology
                  </h1>
                  <p className="text-sm">
                    You might use software like this on the job:
                  </p>
                  {technology ? (
                    <div className="flex flex-col gap-4 mt-4">
                      {technology.category.map((cat, index) => (
                        <div key={index} className="">
                          <h3 className="font-bold text-sm text-[#F9BC5F]">
                            {cat.title}
                          </h3>
                          <ul className="list-disc pl-9 flex flex-col gap-1 text-sm leading-tight">
                            {Array.isArray(cat.example) ? (
                              cat.example.map((item, idx) => (
                                <li key={idx}>{item._ || item}</li> 
                              ))
                            ) : (
                              <li>{cat.example._}</li> 
                            )}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-300">Loading...</p>
                  )}
                </div>
              </motion.div>
            </div>

            <div className="min-h-[65vh] pl-10 pr-10">
              <motion.div
                className="grid grid-cols-3 gap-4 text-white justify-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6 }}
              >
                <div className="border-2 border-[#BEBEBE]  rounded-lg transform transition-transform duration-300 hover:border-[#8B4CC9] shadow-lg text-black pt-9">
                  <h1 className="uppercase font-bold text-[22px] text-[#8B4CC9] flex items-center justify-center flex-col text-center mb-4">
                  <BriefcaseBusiness size={58} className=" pb-3 "/>
                    Job Outlook
                  </h1>

                  {jobOutlook ? (
                    <>
                    
                      <div className="mb-6 flex flex-col pl-9 pr-9">
                        <p className="text-sm ">
                          {" "}
                          {jobOutlook.outlook.description}
                        </p>
                        <p className="mt-2 text-sm text-black">
                          <span className="font-bold text-[#8B4CC9] text-sm">
                            Category:
                          </span>{" "}
                          {jobOutlook?.outlook?.category}
                        </p>
                      </div>

                   
                      <div className="mb-6 pl-9 pr-9">
                      <p className="text-sm">
  <span className="font-bold text-[#8B4CC9] text-sm">
    Bright Outlook:
  </span>{" "}
  {jobOutlook?.bright_outlook?.description || "Career has a steady demand"}
</p>

                        {/* <p className="mt-2 text-sm">
                          <span className="font-bold text-base text-[#8B4CC9]">
                            Category:
                          </span>{" "}
                          {jobOutlook?.bright_outlook?.category}
                        </p> */}
                      </div>

                     
                      {/* <div className="mb-6 pl-9 pr-9">
                        <p className="text-sm">
                          <span className="font-bold text-[#8B4CC9] text-sm">
                            Annual Salary 10th Percentile:
                          </span>{" "}
                          ${jobOutlook.salary.annual_10th_percentile}
                        </p>
                        <p className=" mt-2 text-sm">
                          <span className="font-bold text-[#8B4CC9] text-sm">
                            Annual Median Salary:
                          </span>{" "}
                          ${jobOutlook.salary.annual_median}
                        </p>
                        <p className=" mt-2 text-sm">
                          <span className="font-bold text-[#8B4CC9] text-sm">
                            Annual Salary 90th Percentile:
                          </span>{" "}
                          ${jobOutlook.salary.annual_90th_percentile}
                        </p>
                        <p className=" mt-2 text-sm">
                          <span className="font-bold text-[#8B4CC9] text-sm">
                            Hourly Salary 10th Percentile:
                          </span>{" "}
                          ${jobOutlook.salary.hourly_10th_percentile}
                        </p>
                        <p className="mt-2 text-sm">
                          <span className="font-bold text-[#8B4CC9] text-sm">
                            Hourly Median Salary:
                          </span>{" "}
                          ${jobOutlook.salary.hourly_median}
                        </p>
                        <p className="mt-2 text-sm">
                          <span className="font-bold text-[#8B4CC9] text-sm">
                            Hourly Salary 90th Percentile:
                          </span>{" "}
                          ${jobOutlook.salary.hourly_90th_percentile}
                        </p>
                      </div> */}

{jobOutlook?.salary && (
  <div className="mb-6 pl-9 pr-9">
    {jobOutlook.salary.annual_10th_percentile && (
      <p className="text-sm">
        <span className="font-bold text-[#8B4CC9] text-sm">
          Annual Salary 10th Percentile:
        </span>{" "}
        ${jobOutlook.salary.annual_10th_percentile}
      </p>
    )}
    {jobOutlook.salary.annual_median && (
     <p className="mt-2 text-sm">
     <span className="font-bold text-[#8B4CC9] text-sm">
       Annual Median Salary:
     </span>{" "}
     ${jobOutlook.salary?.annual_median || "NA"}
   </p>
   
    )}
    {jobOutlook.salary.annual_90th_percentile && (
      <p className="mt-2 text-sm">
        <span className="font-bold text-[#8B4CC9] text-sm">
          Annual Salary 90th Percentile:
        </span>{" "}
        ${jobOutlook.salary.annual_90th_percentile}
      </p>
    )}
    {jobOutlook.salary.hourly_10th_percentile && (
      <p className="mt-2 text-sm">
        <span className="font-bold text-[#8B4CC9] text-sm">
          Hourly Salary 10th Percentile:
        </span>{" "}
        ${jobOutlook.salary.hourly_10th_percentile}
      </p>
    )}
    {jobOutlook.salary.hourly_median && (
      <p className="mt-2 text-sm">
        <span className="font-bold text-[#8B4CC9] text-sm">
          Hourly Median Salary:
        </span>{" "}
        ${jobOutlook.salary.hourly_median}
      </p>
    )}
    {jobOutlook.salary.hourly_90th_percentile && (
      <p className="mt-2 text-sm">
        <span className="font-bold text-[#8B4CC9] text-sm">
          Hourly Salary 90th Percentile:
        </span>{" "}
        ${jobOutlook.salary.hourly_90th_percentile}
      </p>
    )}
  </div>
)}

                    </>
                  ) : (
                    <p className="text-gray-300">Loading...</p>
                  )}
                </div>



<div className="border-2 border-[#BEBEBE]  p-6 rounded-lg transform transition-transform duration-300  shadow-lg pt-9 hover:border-[#C94C79]">
  <h1 className="uppercase font-bold text-[22px] text-[#C94C79] flex flex-col items-center justify-center text-center mb-4">
  <Compass size={58} className="pb-3"/>
    Explore More
  </h1>

  {exploreMore?.careers?.career?.length > 0 ? (
    <div className="mb-6">
      <ul className="space-y-2">
        <div className="mb-6 pl-9">
          <h2 className="font-semibold text-sm text-black flex  flex-col mb-1">
            
            Related Careers:
          </h2>
          <ul className="pl-3 list-disc flex flex-col gap-1">
            {exploreMore.careers.career.map((career, index) => {
              const careerCode = career.code;
              return (
                <li key={index} className=" rounded-lg text-sm underline">
                  <a
                    href={`/careers/${careerCode}`} // Use a regular anchor tag for full reload
                    className="text-[#1684D4] hover:underline w-full text-left"
                  >
                    {career.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </ul>
    </div>
  ) : (
    <p className="text-[#1684D4] text-center">No related careers available.</p>
  )}

  {exploreMore?.industries?.industry?.length > 0 ? (
    <div className=" p-3 text-sm rounded-lg pl-9">
      <h2 className="font-bold text-sm text-black ">
        Related Industries:
      </h2>
      {exploreMore.industries.industry.map((industry, index) => {
        const industryName = encodeURIComponent(
          industry.title.replace(/\s+/g, "-").toLowerCase()
        ); // Format industry title for URL
        return (
          <div key={index} className="pl-3">
            <a
              
              onClick={() =>
                navigate(`/careers/browse/${industryName}`, {
                  state: { industryCode: industry.code },
                })
              }// Use a regular anchor tag for full reload
              className="block cursor-pointer text-[#1684D4] underline hover:underline w-full"
            >
              {industry.title}
            </a>
            <p className="text-gray-300 text-sm mb-2">
              <span className="font-bold">Percent Employed:</span> {industry["$"].percent_employed}%
            </p>
          </div>
        );
      })}
    </div>
  ) : (
    <p className="text-teal-400 text-center">No related industries available.</p>
  )}
</div>



                <div className="border-2 border-[#BEBEBE] p-6 rounded-lg transform transition-transform duration-300  shadow-lg pt-9 min-h-[100vh] hover:border-[#4CC9C9]">
                  <h1 className="uppercase font-bold text-[22px] text-[#4CC9C9] text-center mb-4 flex flex-col items-center justify-center ">
                  <GraduationCap size={58} pb-3/>
                    Education
                  </h1>

                  {/* Education Section */}
                  {education && (
                    <div className="mb-6 pl-9">
                      <p className="text-red-400 capitalize text-sm">
                        <span className="font-bold text-black text-sm ">
                          Education Needed:
                        </span>
                        <br/>
                        {Array.isArray(
                          education?.education_usually_needed?.category
                        ) ? (
                          education.education_usually_needed.category.map(
                            (category, index) => (
                              <span key={index}>
                                {category}
                                {index <
                                  education.education_usually_needed.category
                                    .length -
                                    1 && ", "}
                              </span>
                            )
                          )
                        ) : (
                          <span>
                            {education?.education_usually_needed?.category}
                          </span>
                        )}
                      </p>
                      <p className="text-black mt-2">
                        <span className="font-bold text-blac text-sm">
                          Job Zone:
                        </span>{" "}
                        {education.job_zone}
                      </p>
                  
                      {/* <div className="flex flex-col gap-3 mt-6 text-black font-semibold">
                        <div className="hover:bg-gray-400 h-[6vh] w-full border-2 rounded-lg flex items-center justify-center cursor-pointer">
                          Find Certification
                        </div>

                        <div className="hover:bg-gray-400 h-[6vh] w-full border-2 rounded-lg flex items-center justify-center cursor-pointer">
                          Find Licenses
                        </div>

                        <div className="h-[6vh] w-full border-2 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-400">
                          Apprenticeship.gov
                        </div>
                      </div> */}
{/* 
<div className="flex flex-col gap-3 text-black text-[12.5px] mt-6">
  <div className="cursor-pointer">
    <h1><strong>Job Zone 1:</strong></h1>
  <h1> Little or No Preparation Needed</h1>
  </div>

  <div className="cursor-pointer">
    <h1><strong>Job Zone 2:</strong> </h1>
 <h1>Some Preparation Needed</h1>
  </div>

  <div className="cursor-pointer">
    <h1><strong>Job Zone 3:</strong> </h1>
<h1>Medium Preparation Needed</h1>
  </div>

  <div className="cursor-pointer">
    <h1><strong>Job Zone 4:</strong> </h1>
<h1>High Preparation Needed</h1>
  </div>

  <div className="cursor-pointer">
    <h1><strong>Job Zone 5:</strong> </h1>
  <h1>Extensive Preparation Needed</h1>
  </div>
</div> */}



{/* <div className="flex flex-col gap-3 text-black text-[12.5px] mt-6">
      {Object.keys(jobZoneDetails).map((zone) => (
        <div
          key={zone}
          className="cursor-pointer relative group"
          onMouseEnter={() => setHoveredZone(zone)}
          onMouseLeave={() => setHoveredZone(null)}
        >
          <h1>
            <strong>Job Zone {zone}:</strong>
          </h1>
          <h1>{zone === "1" ? "Little or No Preparation Needed" : "Preparation Needed"}</h1>
          
          {hoveredZone === zone && (
            <div className="absolute top-[-150px] left-0 bg-white text-black text-[11px] p-2  rounded shadow-xl w-[300px] z-10 transition-all duration-300 ease-in-out transform border border-gray-100 ">
              {jobZoneDetails[zone].map((detail, index) => (
                <div key={index} className="mb-2">
                  {detail.header && <h1 className="font-bold">{detail.header}</h1>}
                  <p>{detail.content}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div> */}

<div className="flex flex-col gap-4 text-black text-sm mt-6">
  <div
    className="cursor-pointer relative group"
    onMouseEnter={() => setHoveredZone("1")}
    onMouseLeave={() => setHoveredZone(null)}
  >
    <h1 className="font-bold text-[12.5px]">Job Zone 1:</h1>
    <h2 className="text-gray-600 text-[12.5px]">Little or No Preparation Needed</h2>
    {hoveredZone === "1" && (
      <div className="absolute left-0 bg-white text-gray-800 text-[12.5px] p-4 rounded-lg shadow-lg w-[300px] z-10 transition-all duration-300 ease-in-out transform opacity-100 visible">
        {jobZoneDetails["1"].map((detail, index) => (
          <div key={index} className="mb-3">
            {detail.header && <h1 className="font-semibold text-black">{detail.header}</h1>}
            <p className="text-gray-700">{detail.content}</p>
          </div>
        ))}
      </div>
    )}
  </div>

  <div
    className="cursor-pointer relative group"
    onMouseEnter={() => setHoveredZone("2")}
    onMouseLeave={() => setHoveredZone(null)}
  >
    <h1 className="font-bold text-[12.5px]">Job Zone 2:</h1>
    <h2 className="text-gray-600 text-[12.5px]">Some Preparation Needed</h2>
    {hoveredZone === "2" && (
      <div className="absolute left-0 bg-white text-gray-800 text-[12.5px] p-4 rounded-lg shadow-lg w-[300px] z-10 transition-all duration-300 ease-in-out transform opacity-100 visible">
        {jobZoneDetails["2"].map((detail, index) => (
          <div key={index} className="mb-3">
            {detail.header && <h1 className="font-semibold text-black">{detail.header}</h1>}
            <p className="text-gray-700">{detail.content}</p>
          </div>
        ))}
      </div>
    )}
  </div>

  <div
    className="cursor-pointer relative group"
    onMouseEnter={() => setHoveredZone("3")}
    onMouseLeave={() => setHoveredZone(null)}
  >
    <h1 className="font-bold text-[12.5px]">Job Zone 3:</h1>
    <h2 className="text-gray-600 text-[12.5px]">Medium Preparation Needed</h2>
    {hoveredZone === "3" && (
      <div className="absolute left-0 bg-white text-gray-800 text-[12.5px] p-4 rounded-lg shadow-lg w-[300px] z-10 transition-all duration-300 ease-in-out transform opacity-100 visible">
        {jobZoneDetails["3"].map((detail, index) => (
          <div key={index} className="mb-3">
            {detail.header && <h1 className="font-semibold text-black">{detail.header}</h1>}
            <p className="text-gray-700">{detail.content}</p>
          </div>
        ))}
      </div>
    )}
  </div>

  <div
    className="cursor-pointer relative group"
    onMouseEnter={() => setHoveredZone("4")}
    onMouseLeave={() => setHoveredZone(null)}
  >
    <h1 className="font-bold text-[12.5px]">Job Zone 4:</h1>
    <h2 className="text-gray-600 text-[12.5px]">High Preparation Needed</h2>
    {hoveredZone === "4" && (
      <div className="absolute left-0 bg-white text-gray-800 text-[12.5px] p-4 rounded-lg shadow-lg w-[300px] z-10 transition-all duration-300 ease-in-out transform opacity-100 visible">
        {jobZoneDetails["4"].map((detail, index) => (
          <div key={index} className="mb-3">
            {detail.header && <h1 className="font-semibold text-black">{detail.header}</h1>}
            <p className="text-gray-700">{detail.content}</p>
          </div>
        ))}
      </div>
    )}
  </div>

  <div
    className="cursor-pointer relative group "
    onMouseEnter={() => setHoveredZone("5")}
    onMouseLeave={() => setHoveredZone(null)}
  >
    <h1 className="font-bold text-[12.5px]">Job Zone 5:</h1>
    <h2 className="text-gray-600 text-[12.5px]">Extensive Preparation Needed</h2>
    {hoveredZone === "5" && (
      <div className="absolute left-0 bg-white text-gray-800 text-[12.5px] p-4 rounded-lg shadow-lg w-[300px] z-10 transition-all duration-300 ease-in-out transform opacity-100 visible ">
        {jobZoneDetails["5"].map((detail, index) => (
          <div key={index} className="mb-3">
            {detail.header && <h1 className="font-semibold text-black">{detail.header}</h1>}
            <p className="text-gray-700">{detail.content}</p>
          </div>
        ))}
      </div>
    )}
  </div>
</div>

                    </div>
                  )}

                  {/* Apprenticeships Section */}
                  {/* {education?.apprenticeships?.title &&
                    Array.isArray(education.apprenticeships.title) && (
                      <div className="bg-gray-700 p-3 text-sm rounded-lg mt-6">
                        <h2 className="font-bold text-lg text-teal-400 mb-4 text-center">
                          Apprenticeships
                        </h2>
                        {education.apprenticeships.title.map((item, index) => (
                          <div key={index} className="mb-2">
                            <p className="text-gray-300 text-center">
                              {item._}
                            </p>
                          </div>
                        ))}
                      </div>
                    )} */}
                </div>
              </motion.div>
            </div>

            {/* salary card */}

   
<div className="flex items-center justify-center h-[55vh] mt-[10vh] ">
  <div className="bg-white rounded-xl shadow-2xl p-6 flex flex-col items-center justify-center h-[60vh] w-[50%]">
    <h2 className="text-lg font-bold mb-4 text-gray-800">Salary Statistics</h2>
    {chartData && (
      <div className="h-[70%] w-full">
        <Bar
          data={chartData}
          options={{
            plugins: {
              legend: { display: true, position: "top" },
            },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true,
                title: {
                  display: true,
                  text: "Amount ($)",
                  color: "#374151",
                  font: {
                    weight: "bold",
                    size: 14,
                  },
                },
                grid: {
                  color: "rgba(55, 65, 81, 0.2)",
                },
              },
              x: {
                title: {
                  display: true,
                  text: "Salary Percentiles",
                  color: "#374151",
                  font: {
                    weight: "bold",
                    size: 14,
                  },
                },
                grid: {
                  color: "rgba(55, 65, 81, 0.2)",
                },
              },
            },
            elements: {
              bar: {
                borderRadius: 5, // Rounded edges for bars
                backgroundColor: (context) => {
                  const gradient = context.chart.ctx.createLinearGradient(
                    0,
                    0,
                    0,
                    300
                  );
                  gradient.addColorStop(0, "#4e73df");
                  gradient.addColorStop(0.5, "#224abe");
                  gradient.addColorStop(1, "#11297d");
                  return gradient;
                },
                borderColor: "rgba(0, 0, 0, 0.1)", // Add border for 3D effect
                borderWidth: 2,
              },
            },
          }}
        />
      </div>
    )}
  </div>
</div>

            

             <div className="h-[29vh] w-full flex items-center justify-center mb-3">
<Footer className=""/>
             </div>
          </div>}
        

         
        </div>
      </div>
    </div>
  );
};

export default CareerDetail;
