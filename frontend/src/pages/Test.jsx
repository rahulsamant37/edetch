import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Question from '../components/Question';
import SubmitButton from '../components/SubmitButton';
import Header from '../components/Header';
import { Footer } from '../components/Footer';

const answerOptions = [
  { value: 1, label: 'Strongly Dislike' },
  { value: 2, label: 'Dislike' },
  { value: 3, label: 'Not sure' },
  { value: 4, label: 'Like' },
  { value: 5, label: 'Strongly Like' }
];

const questions = [
  { index: 1, area: "Realistic", text: "Build kitchen cabinets" },
  { index: 2, area: "Realistic", text: "Lay brick or tile" },
  { index: 3, area: "Investigative", text: "Develop a new medicine" },
  { index: 4, area: "Investigative", text: "Study ways to reduce water pollution" },
  { index: 5, area: "Artistic", text: "Write books or plays" },
  { index: 6, area: "Artistic", text: "Play a musical instrument" },
  { index: 7, area: "Social", text: "Teach an individual an exercise routine" },
  { index: 8, area: "Social", text: "Help people with personal or emotional problems" },
  { index: 9, area: "Enterprising", text: "Buy and sell stocks and bonds" },
  { index: 10, area: "Enterprising", text: "Manage a retail store" },
  { index: 11, area: "Conventional", text: "Develop a spreadsheet using computer software" },
  { index: 12, area: "Conventional", text: "Proofread records or forms" },
  { "index": 13, "area": "Realistic", "text": "Repair household appliances" },
  { "index": 14, "area": "Realistic", "text": "Raise fish in a fish hatchery" },
  { "index": 15, "area": "Investigative", "text": "Conduct chemical experiments" },
  { "index": 16, "area": "Investigative", "text": "Study the movement of planets" },
  { "index": 17, "area": "Artistic", "text": "Compose or arrange music" },
  { "index": 18, "area": "Artistic", "text": "Draw pictures" },
  { "index": 19, "area": "Social", "text": "Give career guidance to people" },
  { "index": 20, "area": "Social", "text": "Perform rehabilitation therapy" },
  { "index": 21, "area": "Enterprising", "text": "Operate a beauty salon or barber shop" },
  { "index": 22, "area": "Enterprising", "text": "Manage a department within a large company" },
  { "index": 23, "area": "Conventional", "text": "Install software across computers on a large network" },
  { "index": 24, "area": "Conventional", "text": "Operate a calculator" },
  { "index": 25, "area": "Realistic", "text": "Assemble electronic parts" },
  { "index": 26, "area": "Realistic", "text": "Drive a truck to deliver packages to offices and homes" },
  { "index": 27, "area": "Investigative", "text": "Examine blood samples using a microscope" },
  { "index": 28, "area": "Investigative", "text": "Investigate the cause of a fire" },
  { "index": 29, "area": "Artistic", "text": "Create special effects for movies" },
  { "index": 30, "area": "Artistic", "text": "Paint sets for plays" },
  { "index": 31, "area": "Social", "text": "Do volunteer work at a non-profit organization" },
  { "index": 32, "area": "Social", "text": "Teach children how to play sports" },
  { "index": 33, "area": "Enterprising", "text": "Start your own business" },
  { "index": 34, "area": "Enterprising", "text": "Negotiate business contracts" },
  { "index": 35, "area": "Conventional", "text": "Keep shipping and receiving records" },
  { "index": 36, "area": "Conventional", "text": "Calculate the wages of employees" },
  { "index": 37, "area": "Realistic", "text": "Test the quality of parts before shipment" },
  { "index": 38, "area": "Realistic", "text": "Repair and install locks" },
  { "index": 39, "area": "Investigative", "text": "Develop a way to better predict the weather" },
  { "index": 40, "area": "Investigative", "text": "Work in a biology lab" },
  { "index": 41, "area": "Artistic", "text": "Write scripts for movies or television shows" },
  { "index": 42, "area": "Artistic", "text": "Perform jazz or tap dance" },
  { "index": 43, "area": "Social", "text": "Teach sign language to people who are deaf or hard of hearing" },
  { "index": 44, "area": "Social", "text": "Help conduct a group therapy session" },
  { "index": 45, "area": "Enterprising", "text": "Represent a client in a lawsuit" },
  { "index": 46, "area": "Enterprising", "text": "Market a new line of clothing" },
  { "index": 47, "area": "Conventional", "text": "Inventory supplies using a hand-held computer" },
  { "index": 48, "area": "Conventional", "text": "Record rent payments" },
  { "index": 49, "area": "Realistic", "text": "Set up and operate machines to make products" },
  { "index": 50, "area": "Realistic", "text": "Put out forest fires" },
  { "index": 51, "area": "Investigative", "text": "Invent a replacement for sugar" },
  { "index": 52, "area": "Investigative", "text": "Do laboratory tests to identify diseases" },
  { "index": 53, "area": "Artistic", "text": "Sing in a band" },
  { "index": 54, "area": "Artistic", "text": "Edit movies" },
  { "index": 55, "area": "Social", "text": "Take care of children at a day-care center" },
  { "index": 56, "area": "Social", "text": "Teach a high-school class" },
  { "index": 57, "area": "Enterprising", "text": "Sell merchandise at a department store" },
  { "index": 58, "area": "Enterprising", "text": "Manage a clothing store" },
  { "index": 59, "area": "Conventional", "text": "Keep inventory records" },
  { "index": 60, "area": "Conventional", "text": "Stamp, sort, and distribute mail for an organization" }
];

const Test = () => {
  const [answers, setAnswers] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (questionIndex, value) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: value,
    }));

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const generateAnswerString = () => {
    return questions.map((_, i) => answers[i + 1] || '0').join('');
  };

  const submitAnswer = async () => {
    setLoading(true);
    setError(null);
    try {
      const answerString = generateAnswerString();
      navigate('/psychometric-test/result', { state: { answerString } });
    } catch (error) {
      setError('Failed to submit answers. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Header className="fixed top-0" />
      <div className="bg-[#FFFFFF] flex flex-col items-center justify-center w-full py-12">
        <h2 className="text-xl font-bold">Psychometric Test</h2>
        <div className="flex flex-col items-center mt-4">
          {questions.length > 0 && (
            <Question
              question={questions[currentQuestionIndex]}
              answerOptions={answerOptions}
              onAnswerChange={handleChange}
              currentQuestionIndex={currentQuestionIndex}
              totalQuestions={questions.length}
            />
          )}
        </div>
        {error && <div className="text-red-500">{error}</div>}
        <div className="mt-6">
          <SubmitButton
            onClick={submitAnswer}
            disabled={loading}
            loading={loading}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Test;
