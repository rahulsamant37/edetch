import * as React from "react";

function QuestionOption({ text, imageSrc }) {
  return (
    <div className="flex overflow-hidden flex-col justify-center items-start px-3 py-3 mt-[1.4vh] w-[31VW] whitespace-nowrap rounded-lg border-2 border-teal-400 border-solid max-md:px-5 max-md:max-w-full first:mt-0 h-[7.5vh] hover:bg-[#4CC9B3] hover:text-white">
      <div className="flex gap-3 items-center ">
        <img
          loading="lazy"
          src={imageSrc}
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square  hover:text-white"
        />
        <div className=" text-[14px] leading-[16px] ">{text}</div>
      </div>
    </div>
  );
}

export default QuestionOption;