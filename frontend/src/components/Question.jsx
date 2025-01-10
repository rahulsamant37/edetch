import React from 'react';

const Question = ({
  question,
  answerOptions,
  selectedAnswer,
  onAnswerChange,
  questionsAttempted,
}) => {
  const progressPercentage = Math.floor((questionsAttempted / 60) * 100);

  // Emoji SVGs for each option
  const optionEmojis = {
    1: (
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
        <g fill="#4CC9B3">
          <path d="M9.704 7.54a2 2 0 0 1-.318.712c-.184.263-.42.461-.72.541c-.298.08-.602.027-.893-.108a2 2 0 0 1-.631-.459l-1.131.986c.229.262.625.598 1.13.833c.51.237 1.183.393 1.914.197c.732-.196 1.236-.667 1.56-1.128c.319-.455.494-.944.561-1.286zm4.593 0c.03.154.13.444.318.712c.184.263.42.461.72.541c.298.08.602.027.893-.108c.298-.139.528-.34.631-.459l1.131.986a3.5 3.5 0 0 1-1.13.833c-.51.237-1.182.393-1.914.197c-.731-.196-1.236-.667-1.56-1.128a3.5 3.5 0 0 1-.56-1.286z"></path>
          <path fillRule="evenodd" d="M8.641 12.641A4.75 4.75 0 0 1 16.75 16v.75h-9.5V16c0-1.26.5-2.468 1.391-3.359M12 12.75a3.25 3.25 0 0 0-3.162 2.5h6.324A3.25 3.25 0 0 0 12 12.75" clipRule="evenodd"></path>
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2M4 12a8 8 0 1 1 16 0a8 8 0 0 1-16 0" clipRule="evenodd"></path>
        </g>
      </svg>
    ), // Strongly Dislike
    2: (
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
        <g fill="none" fillRule="evenodd">
          <path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></path>
          <path fill="#4CC9B3" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16m0 9c1.267 0 2.427.473 3.308 1.25a1 1 0 1 1-1.324 1.5A3 3 0 0 0 12 15c-.761 0-1.455.282-1.984.75a1 1 0 1 1-1.323-1.5A5 5 0 0 1 12 13M8.5 8a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m7 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"></path>
        </g>
      </svg>
    ), // Dislike
    3: (
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
        <g fill="none">
          <path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></path>
          <path fill="#4CC9B3" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16m-1.832 11.445c1.201-1.801 3.61-3.032 6.075-2.415a1 1 0 1 1-.485 1.94c-1.535-.384-3.127.386-3.926 1.585a1 1 0 0 1-1.664-1.11M9.5 8a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m6-1a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"></path>
        </g>
      </svg>
    ), // Unsure
    4: (
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
        <path fill="#4CC9B3" d="M8.36 15.33a1 1 0 0 0-.13 1.4a1 1 0 0 0 1.41.13a3.76 3.76 0 0 1 4.72 0a1 1 0 0 0 .64.23a1 1 0 0 0 .64-1.76a5.81 5.81 0 0 0-7.28 0m.85-4.79a1 1 0 0 0 1.41 0a1 1 0 0 0 0-1.41a3.08 3.08 0 0 0-4.24 0a1 1 0 1 0 1.41 1.41a1 1 0 0 1 1.42 0M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8m5.62-10.87a3.08 3.08 0 0 0-4.24 0a1 1 0 0 0 1.41 1.41a1 1 0 0 1 1.42 0a1 1 0 0 0 1.41 0a1 1 0 0 0 0-1.41"></path>
      </svg>
    ), // Like
    5: (
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
        <path fill="#4CC9B3" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2m0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8s8 3.589 8 8s-3.589 8-8 8"></path>
        <circle cx={8.5} cy={9.5} r={1.5} fill="#4CC9B3"></circle>
        <circle cx={15.493} cy={9.493} r={1.493} fill="#4CC9B3"></circle>
        <path fill="#4CC9B3" d="M12 18c5 0 6-5 6-5H6s1 5 6 5"></path>
      </svg>
    ), // Strongly Like
  };

  return (
    <div className="mb-4 mt-5 text-black flex flex-col items-center relative justify-center w-full">
      <p className="font-bold text-lg w-[25vw] text-center min-h-[6vh] flex items-center justify-center">{question.text}</p>
      <div className="mt-3 flex flex-col gap-2 w-[29vw]">
        {answerOptions.map((option) => (
          <label
            key={option.value}
            className="border-2 hover:bg-[#82D9CA] rounded-md h-[7.5vh] flex items-center text-black text-md cursor-pointer select-none border-[#4CC9B3] "
          >
            <input
              className="hidden"
              type="radio"
              name={`question-${question.index}`}
              value={option.value}
              onChange={() => onAnswerChange(question.index, option.value)}
              checked={selectedAnswer === option.value}
            />
            <span className="ml-2 mr-3">{optionEmojis[option.value]}</span>
            {option.label}
          </label>
        ))}
      </div>

      {questionsAttempted < 60 && (
        <div className="fixed bottom-[12vh] w-[90%] max-w-[400px]">
          <div className="w-full bg-gray-300 rounded-full h-2">
            <div
              className="bg-[#4CC9B3] h-2 rounded-full"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          <p className="text-center text-sm mt-1">{`Question ${questionsAttempted} of 60`}</p>
        </div>
      )}
    </div>
  );
};

export default Question;
