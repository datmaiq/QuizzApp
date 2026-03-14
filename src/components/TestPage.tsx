import React, { useState } from "react";
import { Button, Radio, Result } from "antd";
import { CaretLeft, CaretRight, CheckCircle, House } from "phosphor-react";
import type { RadioChangeEvent } from "antd/es/radio";
import type { TestPageProps } from "../types";

export function TestPage({ questionData, onSubmitTest, onGoHome }: TestPageProps) {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [answers, setAnswers] = useState<number[]>(
    Array(questionData.length).fill(-1)
  );
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleOptionChange = (e: RadioChangeEvent) => {
    const newAnswers = [...answers];
    newAnswers[currentStep] = e.target.value;
    setAnswers(newAnswers);
  };

  const handleNext = () => setCurrentStep((prev) => prev + 1);
  const handlePrev = () => setCurrentStep((prev) => prev - 1);

  const handleSubmit = () => {
    setIsSubmitted(true);
    onSubmitTest(answers, questionData);
  };

  if (isSubmitted) {
    return (
      <div
        style={{
          backgroundColor: "#f5f5f5",
          minHeight: "100vh",
          padding: "20px",
        }}
        className="flex items-center justify-center min-h-screen w-full"
      >
        <div className="bg-white/90 p-6 rounded-md shadow-lg text-center max-w-md w-full">
          <Result
            status="success"
            title="Bạn đã nộp bài!"
            extra={[
              <Button
                key="home"
                onClick={onGoHome}
                className="p-3 bg-white text-slate-700 border border-slate-300 rounded-md font-medium hover:bg-slate-50 transition-all duration-300"
              >
                <span className="flex items-center gap-1"><House size={18} /> Về Trang Chủ</span>
              </Button>,
            ]}
          />
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
        padding: "16px",
      }}
      className="flex items-start sm:items-center justify-center min-h-screen w-full py-4 sm:py-8"
    >
      <div className="bg-white/90 p-4 sm:p-6 rounded-lg shadow-lg max-w-2xl w-full flex flex-col max-h-[calc(100vh-32px)]">
        {/* Header - Question counter */}
        <div className="mb-3 flex-shrink-0">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg font-semibold">
              Câu {currentStep + 1}/{questionData.length}
            </h2>
            <span className="text-sm text-gray-500">
              {Math.round(((currentStep + 1) / questionData.length) * 100)}%
            </span>
          </div>
          {/* Progress bar */}
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-blue-400 to-purple-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / questionData.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Scrollable content area */}
        <div className="flex-1 overflow-y-auto min-h-0 mb-4 pr-1">
          {/* Question */}
          <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
            <p className="text-base sm:text-lg font-medium text-gray-800 whitespace-pre-wrap break-words">
              {questionData[currentStep].question}
            </p>
          </div>

          {/* Options */}
          <Radio.Group
            onChange={handleOptionChange}
            value={answers[currentStep]}
            className="flex flex-col space-y-3 w-full"
          >
            {questionData[currentStep].options.map((option, idx) => (
              <Radio 
                key={idx} 
                value={idx}
                className="flex items-start p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <span className="whitespace-pre-wrap break-words text-sm sm:text-base">
                  {option}
                </span>
              </Radio>
            ))}
          </Radio.Group>
        </div>

        {/* Footer - Navigation buttons */}
        <div className="flex-shrink-0 border-t pt-4">
          <div className="flex justify-between items-center mb-3">
            <Button
              className="px-4 py-2 bg-slate-100 text-slate-600 rounded-md font-medium disabled:opacity-40 hover:bg-slate-200 transition-all duration-300 border border-slate-200"
              onClick={handlePrev}
              disabled={currentStep === 0}
            >
              <span className="flex items-center gap-1"><CaretLeft size={18} /> Trở lại</span>
            </Button>
            
            {currentStep < questionData.length - 1 ? (
              <Button
                className="px-4 py-2 bg-slate-800 text-white rounded-md font-medium disabled:opacity-50 hover:bg-slate-700 transition-all duration-300 shadow-sm"
                onClick={handleNext}
                disabled={answers[currentStep] === -1}
              >
                <span className="flex items-center gap-1">Tiếp theo <CaretRight size={18} /></span>
              </Button>
            ) : (
              <Button
                className="px-4 py-2 bg-slate-800 text-white rounded-md font-medium disabled:opacity-50 hover:bg-slate-700 transition-all duration-300 shadow-sm"
                onClick={handleSubmit}
                disabled={answers[currentStep] === -1}
              >
                <span className="flex items-center gap-1"><CheckCircle size={18} /> Nộp bài</span>
              </Button>
            )}
          </div>
          
          <Button
            className="w-full p-2 bg-transparent text-slate-500 hover:text-slate-700 font-medium transition-colors duration-300"
            onClick={onGoHome}
          >
            <span className="flex items-center gap-1"><House size={18} /> Về Trang Chủ</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default TestPage;
