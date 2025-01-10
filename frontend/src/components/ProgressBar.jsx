


import * as React from "react";

function ProgressBar({ currentQuestion, totalQuestions }) {
  // Calculate the progress percentage
  const progressPercentage = (currentQuestion / totalQuestions) * 100;

  return (
    <div className="flex flex-col justify-center items-center mt-8 w-full max-md:mt-10 max-md:max-w-full">
      <div className="text-sm text-center text-zinc-900">
        Question {currentQuestion} of {totalQuestions}:
      </div>
      <div className="flex flex-col mt-3 w-full rounded-3xl max-md:max-w-full">
        <div className="flex w-full rounded-3xl bg-[#EEEEEE] h-1">
          <div
            className="bg-teal-400 rounded-3xl h-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }} // Dynamically set width
          />
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
