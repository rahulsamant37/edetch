// import React, { useState } from "react";
// import ProgressBar from "./ProgressBar";
// import { Footer } from "./Footer";
// import { useNavigate } from "react-router-dom";
// import { ChevronLeft, ChevronRight} from 'lucide-react';

// const optionEmojis = {
//   1: (
//     <svg className="hover:fill-[#4CC9B3]" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width={30} viewBox="0 0 24 24">
//       <g>
//         <path d="M9.704 7.54a2 2 0 0 1-.318.712c-.184.263-.42.461-.72.541c-.298.08-.602.027-.893-.108a2 2 0 0 1-.631-.459l-1.131.986c.229.262.625.598 1.13.833c.51.237 1.183.393 1.914.197c.732-.196 1.236-.667 1.56-1.128c.319-.455.494-.944.561-1.286zm4.593 0c.03.154.13.444.318.712c.184.263.42.461.72.541c.298.08.602.027.893-.108c.298-.139.528-.34.631-.459l1.131.986a3.5 3.5 0 0 1-1.13.833c-.51.237-1.182.393-1.914.197c-.731-.196-1.236-.667-1.56-1.128a3.5 3.5 0 0 1-.56-1.286z"></path>
//         <path fillRule="evenodd" d="M8.641 12.641A4.75 4.75 0 0 1 16.75 16v.75h-9.5V16c0-1.26.5-2.468 1.391-3.359M12 12.75a3.25 3.25 0 0 0-3.162 2.5h6.324A3.25 3.25 0 0 0 12 12.75" clipRule="evenodd"></path>
//         <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2M4 12a8 8 0 1 1 16 0a8 8 0 0 1-16 0" clipRule="evenodd"></path>
//       </g>
//     </svg>
//   ), // Strongly Like
//   2: (
//     <svg className="hover:fill-[white]" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width={30} viewBox="0 0 24 24">
//       <g fillRule="evenodd">
//         <path fill="currentColor" d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></path>
//         <path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16m0 9c1.267 0 2.427.473 3.308 1.25a1 1 0 1 1-1.324 1.5A3 3 0 0 0 12 15c-.761 0-1.455.282-1.984.75a1 1 0 1 1-1.323-1.5A5 5 0 0 1 12 13M8.5 8a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m7 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"></path>
//       </g>
//     </svg>
//   ), // Like
//   3: (
//     <svg className="hover:fill-[white]" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width={30} viewBox="0 0 24 24">
//       <g>
//         <path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></path>
//         <path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16m-1.832 11.445c1.201-1.801 3.61-3.032 6.075-2.415a1 1 0 1 1-.485 1.94c-1.535-.384-3.127.386-3.926 1.585a1 1 0 0 1-1.664-1.11M9.5 8a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m6-1a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"></path>
//       </g>
//     </svg>
//   ), // Unsure
//   4: (
//     <svg className="hover:fill-[white]" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width={30} viewBox="0 0 24 24">
//       <path d="M8.36 15.33a1 1 0 0 0-.13 1.4a1 1 0 0 0 1.41.13a3.76 3.76 0 0 1 4.72 0a1 1 0 0 0 .64.23a1 1 0 0 0 .64-1.76a5.81 5.81 0 0 0-7.28 0m.85-4.79a1 1 0 0 0 1.41 0a1 1 0 0 0 0-1.41a3.08 3.08 0 0 0-4.24 0a1 1 0 1 0 1.41 1.41a1 1 0 0 1 1.42 0M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8m5.62-10.87a3.08 3.08 0 0 0-4.24 0a1 1 0 0 0 1.41 1.41a1 1 0 0 1 1.42 0a1 1 0 0 0 1.41 0a1 1 0 0 0 0-1.41"></path>
//     </svg>
//   ), // Like
//   5: (
//     <svg className="hover:fill-[white]" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width={30} viewBox="0 0 24 24">
//       <path className="hover:fill-[white]" fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2m0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8s8 3.589 8 8s-3.589 8-8 8"></path>
//       <circle  cx={8.5} cy={9.5} r={1.5} fill="currentColor"></circle>
//       <circle cx={15.493} cy={9.493} r={1.493} fill="currentColor"></circle>
//       <path fill="currentColor" d="M12 18c5 0 6-5 6-5H6s1 5 6 5"></path>
//     </svg>
//   ), // Strongly Like
// };



// const options = [
//   { id: 1, text: "Strongly Like",emoji: optionEmojis[1] },
//   { id: 2, text: "Like",emoji: optionEmojis[2] },
//   { id: 3, text: "Not sure",emoji: optionEmojis[3] },
//   { id: 4, text: "Like",  emoji: optionEmojis[4] },
//   { id: 5, text: "Strongly like", emoji: optionEmojis[5]  },
// ];


// const questions = [
//   { index: 1, area: "Realistic", text: "Build kitchen cabinets" },
//   { index: 2, area: "Realistic", text: "Lay brick or tile" },
//   { index: 3, area: "Investigative", text: "Develop a new medicine" },
//   { index: 4, area: "Investigative", text: "Study ways to reduce water pollution" },
//   { index: 5, area: "Artistic", text: "Write books or plays" },
//   { index: 6, area: "Artistic", text: "Play a musical instrument" },
//   { index: 7, area: "Social", text: "Teach an individual an exercise routine" },
//   { index: 8, area: "Social", text: "Help people with personal or emotional problems" },
//   { index: 9, area: "Enterprising", text: "Buy and sell stocks and bonds" },
//   { index: 10, area: "Enterprising", text: "Manage a retail store" },
//   { index: 11, area: "Conventional", text: "Develop a spreadsheet using computer software" },
//   { index: 12, area: "Conventional", text: "Proofread records or forms" },
//   { "index": 13, "area": "Realistic", "text": "Repair household appliances" },
//   { "index": 14, "area": "Realistic", "text": "Raise fish in a fish hatchery" },
//   { "index": 15, "area": "Investigative", "text": "Conduct chemical experiments" },
//   { "index": 16, "area": "Investigative", "text": "Study the movement of planets" },
//   { "index": 17, "area": "Artistic", "text": "Compose or arrange music" },
//   { "index": 18, "area": "Artistic", "text": "Draw pictures" },
//   { "index": 19, "area": "Social", "text": "Give career guidance to people" },
//   { "index": 20, "area": "Social", "text": "Perform rehabilitation therapy" },
//   { "index": 21, "area": "Enterprising", "text": "Operate a beauty salon or barber shop" },
//   { "index": 22, "area": "Enterprising", "text": "Manage a department within a large company" },
//   { "index": 23, "area": "Conventional", "text": "Install software across computers on a large network" },
//   { "index": 24, "area": "Conventional", "text": "Operate a calculator" },
//   { "index": 25, "area": "Realistic", "text": "Assemble electronic parts" },
//   { "index": 26, "area": "Realistic", "text": "Drive a truck to deliver packages to offices and homes" },
//   { "index": 27, "area": "Investigative", "text": "Examine blood samples using a microscope" },
//   { "index": 28, "area": "Investigative", "text": "Investigate the cause of a fire" },
//   { "index": 29, "area": "Artistic", "text": "Create special effects for movies" },
//   { "index": 30, "area": "Artistic", "text": "Paint sets for plays" },
//   { "index": 31, "area": "Social", "text": "Do volunteer work at a non-profit organization" },
//   { "index": 32, "area": "Social", "text": "Teach children how to play sports" },
//   { "index": 33, "area": "Enterprising", "text": "Start your own business" },
//   { "index": 34, "area": "Enterprising", "text": "Negotiate business contracts" },
//   { "index": 35, "area": "Conventional", "text": "Keep shipping and receiving records" },
//   { "index": 36, "area": "Conventional", "text": "Calculate the wages of employees" },
//   { "index": 37, "area": "Realistic", "text": "Test the quality of parts before shipment" },
//   { "index": 38, "area": "Realistic", "text": "Repair and install locks" },
//   { "index": 39, "area": "Investigative", "text": "Develop a way to better predict the weather" },
//   { "index": 40, "area": "Investigative", "text": "Work in a biology lab" },
//   { "index": 41, "area": "Artistic", "text": "Write scripts for movies or television shows" },
//   { "index": 42, "area": "Artistic", "text": "Perform jazz or tap dance" },
//   { "index": 43, "area": "Social", "text": "Teach sign language to people who are deaf or hard of hearing" },
//   { "index": 44, "area": "Social", "text": "Help conduct a group therapy session" },
//   { "index": 45, "area": "Enterprising", "text": "Represent a client in a lawsuit" },
//   { "index": 46, "area": "Enterprising", "text": "Market a new line of clothing" },
//   { "index": 47, "area": "Conventional", "text": "Inventory supplies using a hand-held computer" },
//   { "index": 48, "area": "Conventional", "text": "Record rent payments" },
//   { "index": 49, "area": "Realistic", "text": "Set up and operate machines to make products" },
//   { "index": 50, "area": "Realistic", "text": "Put out forest fires" },
//   { "index": 51, "area": "Investigative", "text": "Invent a replacement for sugar" },
//   { "index": 52, "area": "Investigative", "text": "Do laboratory tests to identify diseases" },
//   { "index": 53, "area": "Artistic", "text": "Sing in a band" },
//   { "index": 54, "area": "Artistic", "text": "Edit movies" },
//   { "index": 55, "area": "Social", "text": "Take care of children at a day-care center" },
//   { "index": 56, "area": "Social", "text": "Teach a high-school class" },
//   { "index": 57, "area": "Enterprising", "text": "Sell merchandise at a department store" },
//   { "index": 58, "area": "Enterprising", "text": "Manage a clothing store" },
//   { "index": 59, "area": "Conventional", "text": "Keep inventory records" },
//   { "index": 60, "area": "Conventional", "text": "Stamp, sort, and distribute mail for an organization" }
// ];

// function PsychometricTest() {


//   const navigate=useNavigate();

  

//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [answers, setAnswers] = useState("");

//   const handleAnswer = (answer) => {
//     // Concatenate the new answer directly to the string
//     setAnswers((prev) => prev + answer);

//     if (currentQuestionIndex < questions.length - 1) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//     } else {
//       console.log("Final answers:", answers + answer);
//       // Perform your final submit logic here if needed
//     }
//   };

//   const goToPreviousQuestion = () => {
//     if (currentQuestionIndex > 0) {
//       setCurrentQuestionIndex(currentQuestionIndex - 1);
//     }
//   };

//   const goToNextQuestion=()=>{
//     if( currentQuestionIndex<59){
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//     }
//   }

//   const submitAnswer = async () => {
 
//     try {
//       console.log(answers)
//       console.log("reached here")
    
//       navigate('/psychometric-test/result', { state: { answers } });
//     } catch (error) {
//       setError('Failed to submit answers. Please try again.');
//     } f
//   };

//   const isLastQuestion = currentQuestionIndex === questions.length - 1;
//   const allQuestionsAnswered = answers.length === questions.length; 

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen px-4 pt-16">
//       <div className="flex flex-col text-center text-zinc-900 max-w-[35vw] w-full">
//         <h1 className="text-lg font-extrabold tracking-tight">Psychometric Test</h1>
//         <p className="mt-1 text-sm font-normal">
//           Indicate your likings about these specific works
//         </p>
//       </div>

//       <div className="flex flex-col items-center justify-center mt-8 w-full max-w-[35vw] text-zinc-900">
//         <h2 className="text-[18px] font-extrabold tracking-tight text-center w-[30vw] leading-[20px] h-[6vh] flex items-center justify-center">
//           {questions[currentQuestionIndex].text}
//         </h2>

//         <div className="flex flex-col w-[95%]">
        
//           {options.map((option) => (
//             <div
            
//               key={option.id}
//               className={`h-12 cursor-pointer flex flex-col justify-center mt-[1.4vh] w-[95%] rounded-lg select-none border-2 hover:bg-[#4CC9B3] ${
//                 answers[currentQuestionIndex] === option.id
//                   ? "bg-teal-400 text-white"
//                   : "border-teal-400"
//               }`}
//               onClick={() => handleAnswer(option.id)}
//             >
//               <div className="flex justify-start items-center p-4 gap-3 hover:text-white">
//               <div className=" hover:fill-white ">
//         {option.emoji}
//       </div>
//               {option.text}
//                 </div>
//             </div>
//           ))}
//         </div>

//         <ProgressBar
//           currentQuestion={currentQuestionIndex + 1}
//           totalQuestions={questions.length}
//         />

//         <div className="flex items-center justify-center gap-6 mt-4 w-full max-w-full">
//           <button
//             className="rounded-md disabled:opacity-50"
//             onClick={goToPreviousQuestion}
//             disabled={currentQuestionIndex === 0}
//           >
//             <div className="flex gap-1 hover:scale-105 select-none text-base items-center justify-center">
//             <ChevronLeft className="text-black " size={20}/>
//             <span className="text-[14px] leading-[16px]">Prev</span>
//             </div>

           
//           </button>

//           <button
//             className="rounded-md disabled:opacity-50"
//             onClick={goToNextQuestion}
//             disabled={currentQuestionIndex === 59}
//           >
//             <div className="flex gap-1 hover:scale-105 select-none text-base items-center justify-center">
//             <span className="text-[14px] leading-[16px]">Next</span>
//             <ChevronRight className="text-black " size={20}/>
            
//             </div>

           
//           </button>
          
//         </div>
//         {isLastQuestion && allQuestionsAnswered ? (
//             <button
//               className="px-4 py-2 bg-green-500 text-white rounded-md mt-5"
//               onClick={ submitAnswer}
//             >
//               Submit
//             </button>
//           ) : null}
//       </div>

//       <Footer />
//     </div>
//   );
// }

// export default PsychometricTest;











import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import { ChevronLeft,ChevronRight, Linkedin } from 'lucide-react';
import {Footer} from './Footer';
import { Navigate, useNavigate } from "react-router-dom";



const PsychometricTest = () => {

  const navigate=useNavigate();



    const questions = [
    {
      text: "Build kitchen cabinets",
      options: ["Strongly Like", "Like", "Not sure", "Dislike", "Strongly Dislike"],
    },
    {
      text: "Lay brick or tile",
      options: ["Strongly Like", "Like", "Not sure", "Dislike", "Strongly Dislike"],
    },
    {
      text: "Develop a new medicine",
      options: ["Strongly Like", "Like", "Not sure", "Disikely", "Strongly Dislike"],
    },
    {
      text: "Study ways to reduce water pollution",
      options: ["Strongly Like", "Like", "Not sure", "Dislike", "Strongly Dislike"],
    },

    {
      text: "Write books or plays",
      options: ["Strongly Like", "Like", "Not sure", "Dislike", "Strongly Dislike"],
    },

    {
      text: "Play a musical instrument",
      options: ["Strongly Like", "Like", "Not sure", "Dislike", "Strongly Dislike"],
    },

    {
      text: "Teach an individual an exercise routine",
      options: ["Strongly Like", "Like", "Not sure", "Dislike", "Strongly Dislike"],
    },

    {
      text: "Help people with personal or emotional problems",
      options: ["Strongly Like", "Like", "Not sure","Dislike", "Strongly Dislike"],
    },

    {
      text: "Buy and sell stocks and bonds",
      options: ["Strongly Like", "Like", "Not sure","Dislike", "Strongly Dislike"],
    },

    {
      text: "Manage a retail store",
      options: ["Strongly Like", "Like", "Not sure","Dislike" ,"Strongly Dislike"],
    },

    {
      text: "Develop a spreadsheet using computer software",
      options: ["Strongly Like", "Like", "Not sure","Dislike", "Strongly Dislike"],
    },

    {
      text: "Proofread records or forms",
      options: ["Strongly Like", "Like", "Not sure", "Dislike", "Strongly Dislike"],
    },

    {
      text: "Repair household appliances",
      options: ["Strongly Like", "Like", "Not sure", "Dislike", "Strongly Dislike"],
    },

    {
      text: "Raise fish in a fish hatchery",
      options: ["Strongly Like", "Like", "Not sure", "Dislike", "Strongly Dislike"],
    },

    {
      text: "Conduct chemical experiments",
      options: ["Strongly Like", "Like", "Not sure","Dislike", "Strongly Dislike"],
    },

    {
      text: "Study the movement of planets",
      options: ["Strongly Like", "Like", "Not sure", "Dislike", "Strongly Dislike"],
    },

    {
      text: "Compose or arrange music",
      options: ["Strongly Like", "Like", "Not sure","Dislike", "Strongly Dislike"],
    },

    {
      text: "Draw pictures",
      options: ["Strongly Like", "Like", "Not sure", "Dislike", "Strongly Dislike"],
    },

    {
      text: "Give career guidance to people",
      options: ["Strongly Like", "Like", "Not sure", "Dislike", "Strongly Dislike"],
    },

    {
      text: "Perform rehabilitation therapy",
      options: ["Strongly Like", "Like", "Not sure","Dislike", "Strongly Dislike"],
    },

    {
      text: "Operate a beauty salon or barber shop",
      options: ["Strongly Like", "Like", "Not sure","Dislike", "Strongly Dislike"],
    },

    {
      text: "Manage a department within a large company",
      options: ["Strongly Like", "Like", "Not sure", "Dislike", "Strongly Dislike"],
    },

    {
      text: "Install software across computers on a large network",
      options: ["Strongly Like", "Like", "Not sure", "Dislike", "Strongly Dislike"],
    },

    {
      text: "Operate a calculator",
      options: ["Strongly Like", "Like", "Not sure","Dislike", "Strongly Dislike"],
    },
    {
      text: "Assemble electronic parts",
      options: ["Strongly Like", "Like", "Not sure","Dislike", "Strongly Dislike"],
    },
    {
      text: "Drive a truck to deliver packages to offices and homes",
      options: ["Strongly Like", "Like", "Not sure", "Dislike", "Strongly Dislike"],
    },
    {
      text: "Examine blood samples using a microscope",
      options: ["Strongly Like", "Like", "Not sure", "Dislike", "Strongly Dislike"],
    },
    {
      text: "Investigate the cause of a fire",
      options: ["Strongly Like", "Like", "Not sure", "Dislike", "Strongly Dislike"],
    },
    {
      text: "Create special effects for movies",
      options: ["Strongly Like", "Like", "Not sure", "Dislike", "Strongly Dislike"],
    },
    {
      text: "Paint sets for plays",
      options: ["Strongly Like", "Like", "Not sure", "Dislike", "Strongly Dislike"],
    },
    {
      text: "Do volunteer work at a non-profit organization",
      options: ["Strongly Like", "Like", "Not Sure","Dislike", "Strongly Dislike"],
    },
    {
      text: "Teach children how to play sports",
      options: ["Strongly Like", "Like", "Not Sure", "Dislike", "Strongly Dislike"],
    },
    {
      text: "Start your own business",
      options: ["Strongly Like", "Like", "Not Sure", "Dislike", "Strongly Dislike"],
    },
    {
      text: "Negotiate business contracts",
      options: ["Strongly Like", "Like", "Not Sure", "Dislike", "Strongly Dislike"],
    },
    {
      text: "Keep shipping and receiving records",
      options: ["Strongly Like", "Like", "Not Sure", "Dislike", "Strongly Dislike"],
    },
    {
      text: "Calculate the wages of employees",
      options: ["Strongly Like", "Like", "Not Sure","Dislike", "Strongly Dislike"],
    },
    {
      text: "Test the quality of parts before shipment",
      options: ["Strongly Like", "Like", "Not Sure", "Dislike", "Strongly Dislike"],
    },
    {
      text: "Repair and install locks",
      options: ["Strongly Like", "Like", "Not Sure","Dislike", "Strongly Dislike"],
    },
    {
      text: "Develop a way to better predict the weather",
      options: ["Strongly Like", "Like", "Not Sure", "Dislike", "Strongly Dislike"],
    },
    {
      text: "Work in a biology lab",
      options: ["Strongly Like", "Like", "Not Sure","Dislike", "Strongly Dislike"],
    },
    {
      text: "Write scripts for movies or television shows",
      options: ["Strongly Like", "Like", "Not Sure","Dislike", "Strongly Dislike"],
    },
    {
      text: "Perform jazz or tap dance",
      options: ["Strongly Like", "Like", "Not Sure", "Dislike", "Strongly Dislike"],
    },
    {
      text: "Teach sign language to people who are deaf or hard of hearing",
      options: ["Strongly Like", "Like", "Not Sure", "Dislike", "Strongly Dislike"],
    },
    {
      text: "Help conduct a group therapy session",
      options: ["Strongly Like", "Like", "Not Sure", "Dislike", "Strongly Dislike"],
    },
    {
      text: "Represent a client in a lawsuit",
      options: ["Strongly Like", "Like", "Not Sure", "Dislike", "Strongly Dislike"],
    },
    {
      text: "Market a new line of clothing",
      options: ["Strongly Like", "Like", "Not Sure", "Dislike", "Strongly Dislike"],
    },
    {
      text: "Inventory supplies using a hand-held computer",
      options: ["Strongly Like", "Like", "Not Sure", "Dislike", "Strongly Dislike"],
    },
    {
      text: "Record rent payments",
      options: ["Strongly Like", "Like", "Not Sure", "Dislike", "Strongly Dislike"],
    },
    {
      text: "Set up and operate machines to make products",
      options: ["Strongly Like", "Like", "Not Sure", "Dislike", "Strongly Dislike"],
    },
    {
      text: "Put out forest fires",
      options: ["Strongly Like", "Like", "Not Sure","Dislike", "Strongly Dislike"],
    },
    {
      text: "Invent a replacement for sugar",
      options: ["Strongly Like", "Like", "Not Sure", "Dislike", "Strongly Dislike"],
    },
    {
      text: "Do laboratory tests to identify diseases",
      options: ["Strongly Like", "Like", "Not Sure", "Dislike", "Strongly Dislike"],
    },
    {
      text: "Sing in a band",
      options: ["Strongly Like", "Like", "Not Sure", "Dislike", "Strongly Dislike"],
    },
    {
      text: "Edit movies",
      options: ["Strongly Like", "Like", "Not Sure", "Dislike", "Strongly Dislike"],
    },
    {
      text: "Take care of children at a day-care center",
      options: ["Strongly Like", "Like", "Not Sure", "Dislike", "Strongly Dislike"],
    },
    {
      text: "Teach a high-school class",
      options: ["Strongly Like", "Like", "Not Sure","Dislike", "Strongly Dislike"],
    },
    {
      text: "Sell merchandise at a department store",
      options: ["Strongly Like", "Like", "Not Sure", "Dislike", "Strongly Dislike"],
    },
    {
      text: "Manage a clothing store",
      options: ["Strongly Like", "Like", "Not Sure", "Dislike", "Strongly Dislike"],
    },
    {
      text: "Keep inventory records",
      options: ["Strongly Like", "Like", "Not Sure","Dislike", "Strongly Dislike"],
    },
    {
      text: "Stamp, sort, and distribute mail for an organization",
      options: ["Strongly Like", "Like", "Not Sure", "Dislike", "Strongly Dislike"],
    },
  ];


  const optionEmojis = {
  1: (
    <svg className="hover:fill-[white]" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width={30} viewBox="0 0 24 24">
    <path className="hover:fill-[white]" fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2m0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8s8 3.589 8 8s-3.589 8-8 8"></path>
    <circle  cx={8.5} cy={9.5} r={1.5} fill="currentColor"></circle>
    <circle cx={15.493} cy={9.493} r={1.493} fill="currentColor"></circle>
    <path fill="currentColor" d="M12 18c5 0 6-5 6-5H6s1 5 6 5"></path>
  </svg>
   
  ), // Strongly Like
  2: (
    <svg className="hover:fill-[white]" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width={30} viewBox="0 0 24 24">
    <path d="M8.36 15.33a1 1 0 0 0-.13 1.4a1 1 0 0 0 1.41.13a3.76 3.76 0 0 1 4.72 0a1 1 0 0 0 .64.23a1 1 0 0 0 .64-1.76a5.81 5.81 0 0 0-7.28 0m.85-4.79a1 1 0 0 0 1.41 0a1 1 0 0 0 0-1.41a3.08 3.08 0 0 0-4.24 0a1 1 0 1 0 1.41 1.41a1 1 0 0 1 1.42 0M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8m5.62-10.87a3.08 3.08 0 0 0-4.24 0a1 1 0 0 0 1.41 1.41a1 1 0 0 1 1.42 0a1 1 0 0 0 1.41 0a1 1 0 0 0 0-1.41"></path>
  </svg>
    
  ), // Like
  3: (
    <svg className="hover:fill-[white]" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width={30} viewBox="0 0 24 24">
      <g>
        <path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></path>
        <path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16m-1.832 11.445c1.201-1.801 3.61-3.032 6.075-2.415a1 1 0 1 1-.485 1.94c-1.535-.384-3.127.386-3.926 1.585a1 1 0 0 1-1.664-1.11M9.5 8a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m6-1a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"></path>
      </g>
    </svg>
  ), // Unsure
  4: (
    <svg className="hover:fill-[white]" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width={30} viewBox="0 0 24 24">
      <g fillRule="evenodd">
        <path fill="currentColor" d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></path>
        <path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16m0 9c1.267 0 2.427.473 3.308 1.25a1 1 0 1 1-1.324 1.5A3 3 0 0 0 12 15c-.761 0-1.455.282-1.984.75a1 1 0 1 1-1.323-1.5A5 5 0 0 1 12 13M8.5 8a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m7 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"></path>
      </g>
    </svg>
  ), // Like
  5: (
    <svg className="hover:fill-[#4CC9B3]" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width={30} viewBox="0 0 24 24">
    <g>
      <path d="M9.704 7.54a2 2 0 0 1-.318.712c-.184.263-.42.461-.72.541c-.298.08-.602.027-.893-.108a2 2 0 0 1-.631-.459l-1.131.986c.229.262.625.598 1.13.833c.51.237 1.183.393 1.914.197c.732-.196 1.236-.667 1.56-1.128c.319-.455.494-.944.561-1.286zm4.593 0c.03.154.13.444.318.712c.184.263.42.461.72.541c.298.08.602.027.893-.108c.298-.139.528-.34.631-.459l1.131.986a3.5 3.5 0 0 1-1.13.833c-.51.237-1.182.393-1.914.197c-.731-.196-1.236-.667-1.56-1.128a3.5 3.5 0 0 1-.56-1.286z"></path>
      <path fillRule="evenodd" d="M8.641 12.641A4.75 4.75 0 0 1 16.75 16v.75h-9.5V16c0-1.26.5-2.468 1.391-3.359M12 12.75a3.25 3.25 0 0 0-3.162 2.5h6.324A3.25 3.25 0 0 0 12 12.75" clipRule="evenodd"></path>
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2M4 12a8 8 0 1 1 16 0a8 8 0 0 1-16 0" clipRule="evenodd"></path>
    </g>
  </svg>
  ), // Strongly Like
};


  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(Array(questions.length).fill(undefined));
  const [answerString, setAnswerString] = useState("");

  // const handleOptionSelect = (optionIndex) => {
  //   const updatedSelections = [...selectedOptions];
  //   updatedSelections[currentQuestionIndex] = optionIndex;
  //   setSelectedOptions(updatedSelections);

  //   // Update the answer string
  //   const updatedAnswers = updatedSelections
  //     .map((opt) => (opt !== undefined ? String(opt + 1) : "-"))
  //     .join("");
  //   setAnswerString(updatedAnswers);

  //   // Automatically move to the next question if not the last one
  //   if (currentQuestionIndex < questions.length - 1) {
  //     setCurrentQuestionIndex(currentQuestionIndex + 1);
  //   }
  // };

  const handleOptionSelect = (optionIndex) => {
    const updatedSelections = [...selectedOptions];
    updatedSelections[currentQuestionIndex] = optionIndex;
    setSelectedOptions(updatedSelections);
  
    // Map optionIndex to specific values
    const valueMap = [5,4, 3, 2, 1]; // Map optionIndex 0 -> 4, 1 -> 3, 2 -> 2, 3 -> 1
    const mappedValue = valueMap[optionIndex];
  
    // Update the answer string with mapped values
    const updatedAnswers = updatedSelections
      .map((opt) => (opt !== undefined ? String(valueMap[opt]) : "-"))
      .join("");
    setAnswerString(updatedAnswers);
  
    // Automatically move to the next question if not the last one
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }

    if (updatedSelections.every((opt) => opt !== undefined)) {
      navigate('/psychometric-test/result', { state: { answerString: updatedAnswers } });
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const submitAnswer = async () => {
    try {
      if (answerString.length < 60) {
        alert("Please attempt all questions before submitting.");
        return; // Exit the function if the condition is not met
      }
  
      console.log(answerString);
      console.log("reached here");
  
      navigate('/psychometric-test/result', { state: { answerString } });
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <div className="w-[100vw] min-h-[100vh] flex items-center justify-center flex-col gap-10 p-[10vh] select-none">
      <div className="flex items-center justify-center flex-col">
      <h1 className="text-lg font-bold tracking-tight">Psychometric Test</h1>
      <p className="mt-1 text-sm font-normal">
           Indicate your likings about these specific works
         </p>
      </div>

      <div className="max-w-[35vw] flex flex-col items-center justify-center gap-2">
        <h1 className="text-[18px] font-bold tracking-tight text-center w-[35vw] leading-[20px] h-[6vh] flex items-center justify-center select-none">{questions[currentQuestionIndex].text}</h1>
        <div className="flex-col " >
         


      {questions[currentQuestionIndex].options.map((option, index) => (
        <div
          key={index}
          className={`option flex  w-[30vw] h-[7.5vh] rounded-md items-center justify-start gap-2 p-4 select-none border-[#4CC9B3] border-2  ${selectedOptions[currentQuestionIndex] === index ? "bg-[#e0e0e0]" : "hover:bg-[#4CC9B3]"} hover:text-white`}
          
          style={{
           
            alignItems: "center",
            marginBottom: "10px",
            cursor: "pointer",
            fontSize: "17px",
          
          }}
          
          onClick={() => handleOptionSelect(index)}
        >
          {optionEmojis[index + 1]}
          <div style={{ marginLeft: "8px" }}>{option}</div>
        </div>
      ))}
        </div>
       
        <p className="w-[35vw]">
        <ProgressBar
           currentQuestion={currentQuestionIndex + 1}
           totalQuestions={questions.length}
         />
        </p>

        <div className="flex gap-8 text-sm mt-[5vh]">
          <button
            onClick={handlePrev}
            disabled={currentQuestionIndex === 0}
            style={{
              
              
              border: "none",
              borderRadius: "5px",
             
              cursor: currentQuestionIndex === 0 ? "not-allowed" : "pointer",
            }}
            className="flex items-center justify-center text-black text-sm"
          >
            <ChevronLeft size={18}/>
            Prev
          </button>
          <button
            onClick={handleNext}
            disabled={currentQuestionIndex === questions.length - 1}
            style={{
            
              border: "none",
              borderRadius: "5px",
            
              
              cursor:
                currentQuestionIndex === questions.length - 1
                  ? "not-allowed"
                  : "pointer",
            }}
            className="flex text-sm items-center justify-center"
          >
             Next
            <ChevronRight size={18}/>
           
          </button>
        </div>

        
  <button
    className="px-4 py-2 bg-green-500 text-white rounded-md mt-5"
    onClick={submitAnswer}
  >
    Submit
  </button>


        <div className="w-[full] h-1 flex justify-center">
          <Footer/>
        </div>
      </div>
      <div>
       
      
      </div>
    </div>
  );
};

export default PsychometricTest;
