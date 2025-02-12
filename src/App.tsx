import React, { useState } from "react";
import { Button, Radio, Table, Result } from "antd";
import type { RadioChangeEvent } from "antd/es/radio";
import { CheckCircleTwoTone, CloseCircleTwoTone } from "@ant-design/icons";
import { questionData } from "./questionData";

// -------------------------------------------------------------
// Data Types
// -------------------------------------------------------------
interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
}

interface TestSession {
  questions: Question[];
  answers: number[];
  score: number;
}

interface HomePageProps {
  onStartTest: () => void;
  onPractice: () => void;
}

function HomePage({ onStartTest, onPractice }: HomePageProps) {
  return (
    <div
      style={{
        backgroundImage: 'url("/bg.png")',
        backgroundSize: "cover",
        minHeight: "100vh",
        padding: "20px",
      }}
      className="flex flex-col items-center justify-center h-screen w-screen"
    >
      <div className="bg-white/90 p-20 rounded-md shadow-lg flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-6">Trang Chủ</h1>
        <Button
          className="p-5 mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-white rounded-md font-bold"
          onClick={onStartTest}
        >
          Trả lời
        </Button>
        <Button
          className="p-5 bg-gradient-to-r from-green-400 to-teal-500 text-white rounded-md font-bold"
          onClick={onPractice}
        >
          Ôn tập
        </Button>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// TestPage Component (for taking the test)
// -------------------------------------------------------------
interface TestPageProps {
  questionData: Question[];
  onSubmitTest: (answers: number[], questions: Question[]) => void;
  onGoHome: () => void;
}

function TestPage({ questionData, onSubmitTest, onGoHome }: TestPageProps) {
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
          backgroundImage: 'url("/bg.png")',
          backgroundSize: "cover",
          minHeight: "100vh",
          padding: "20px",
        }}
        className="flex items-center justify-center h-screen w-screen"
      >
        <div className="bg-white/90 p-6 rounded-md shadow-lg text-center">
          <Result
            status="success"
            title="Bạn đã nộp bài!"
            extra={[
              <Button
                key="home"
                onClick={onGoHome}
                className="p-2 bg-gradient-to-r from-gray-300 to-gray-400 text-black rounded-md font-bold"
              >
                Về Trang Chủ
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
        backgroundImage: 'url("/bg.png")',
        backgroundSize: "cover",
        minHeight: "100vh",
        padding: "20px",
      }}
      className="flex items-center justify-center h-screen w-screen"
    >
      <div className="bg-white/90 p-6 rounded-md shadow-lg max-w-lg w-full">
        {/* Display current question number */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">
            Câu {currentStep + 1}/{questionData.length}
          </h2>
          <p className="mb-4">{questionData[currentStep].question}</p>
          <Radio.Group
            onChange={handleOptionChange}
            value={answers[currentStep]}
            className="flex flex-col space-y-2"
          >
            {questionData[currentStep].options.map((option, idx) => (
              <Radio key={idx} value={idx}>
                {option}
              </Radio>
            ))}
          </Radio.Group>
        </div>
        <div className="flex justify-between">
          {currentStep > 0 && (
            <Button
              className="p-2 bg-gradient-to-r from-blue-400 to-purple-500 text-white rounded-md font-bold"
              onClick={handlePrev}
            >
              Trở lại
            </Button>
          )}
          {currentStep < questionData.length - 1 ? (
            <Button
              className="p-2 bg-gradient-to-r from-blue-400 to-purple-500 text-white rounded-md font-bold"
              onClick={handleNext}
              disabled={answers[currentStep] === -1}
            >
              Tiếp theo
            </Button>
          ) : (
            <Button
              className="p-2 bg-gradient-to-r from-blue-400 to-purple-500 text-white rounded-md font-bold"
              onClick={handleSubmit}
              disabled={answers[currentStep] === -1}
            >
              Nộp bài
            </Button>
          )}
        </div>
        <Button
          className="p-2 bg-gradient-to-r from-gray-300 to-gray-400 text-black rounded-md font-bold mt-4"
          onClick={onGoHome}
        >
          Về Trang Chủ
        </Button>
      </div>
    </div>
  );
}

interface ReviewPageProps {
  session: TestSession;
  onGoHome: () => void;
  onRetry: () => void;
}

function ReviewPage({ session, onGoHome, onRetry }: ReviewPageProps) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize = 4;

  const columns = [
    {
      title: "Câu hỏi",
      dataIndex: "question",
      key: "question",
      render: (text: string, record: Question, index: number) => {
        const absoluteIndex = (currentPage - 1) * pageSize + index + 1;
        return (
          <span>
            <strong>Câu {absoluteIndex}:</strong> {text}
          </span>
        );
      },
    },
    {
      title: "Đáp án của bạn",
      key: "userAnswer",
      render: (_: any, record: Question, index: number) => {
        const userAnswer = session.answers[index];
        const answeredText =
          userAnswer !== -1 ? record.options[userAnswer] : "Chưa trả lời";
        const isCorrect = userAnswer === record.correctAnswer;
        return (
          <span>
            {answeredText}{" "}
            {userAnswer !== -1 &&
              (isCorrect ? (
                <CheckCircleTwoTone twoToneColor="#52c41a" />
              ) : (
                // If you wish to not color incorrect answers red,
                // simply remove the icon or style accordingly.
                <CloseCircleTwoTone twoToneColor="#ff4d4f" />
              ))}
          </span>
        );
      },
    },
    {
      title: "Đáp án đúng",
      dataIndex: "correctAnswer",
      key: "correctAnswer",
      render: (correctAnswer: number, record: Question) => (
        <span style={{ color: "green" }}>{record.options[correctAnswer]}</span>
      ),
    },
  ];

  return (
    <div
      style={{
        backgroundImage: 'url("/bg.png")',
        backgroundSize: "cover",
        minHeight: "100vh",
        padding: "20px",
      }}
      className="flex items-center justify-center h-screen w-screen"
    >
      <div className="bg-white/90 p-6 rounded-md shadow-lg max-w-4xl w-full">
        <h2 className="text-xl font-semibold mb-4">
          Kết quả: Điểm {session.score}/{session.questions.length}
        </h2>
        <Table
          dataSource={session.questions}
          columns={columns}
          rowKey={(record, index) => `${index}`}
          pagination={{
            pageSize: pageSize,
            onChange: (page) => setCurrentPage(page),
          }}
        />
        <div className="mt-4">
          <Button
            onClick={onRetry}
            className="p-2 bg-gradient-to-r from-blue-400 to-purple-500 text-white rounded-md font-bold"
          >
            Làm lại
          </Button>
          <Button
            onClick={onGoHome}
            className="p-2 ml-2 bg-gradient-to-r from-gray-300 to-gray-400 text-black rounded-md font-bold"
          >
            Về Trang Chủ
          </Button>
        </div>
      </div>
    </div>
  );
}

interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
}

interface PracticePageProps {
  questionData: Question[];
  onGoHome: () => void;
}

export function PracticePage({ questionData, onGoHome }: PracticePageProps) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize = 2;

  const columns = [
    {
      title: "Câu hỏi",
      dataIndex: "question",
      key: "question",
      render: (text: string, record: Question, index: number) => {
        const absoluteIndex = (currentPage - 1) * pageSize + index + 1;
        return (
          <span>
            <strong>Câu {absoluteIndex}:</strong> {text}
          </span>
        );
      },
    },
    {
      title: "Các đáp án",
      key: "options",
      render: (_: any, record: Question) => {
        return (
          <div>
            {record.options.map((option, idx) => {
              const isCorrect = idx === record.correctAnswer;
              return (
                <div
                  key={idx}
                  style={{ color: isCorrect ? "green" : "inherit" }}
                >
                  {option}
                </div>
              );
            })}
          </div>
        );
      },
    },
  ];

  return (
    <div
      style={{
        backgroundImage: 'url("/bg.png")',
        backgroundSize: "cover",
        minHeight: "100vh",
        padding: "20px",
      }}
      className="flex items-center justify-center h-screen w-screen"
    >
      <div className="bg-white/90 p-6 rounded-md shadow-lg max-w-4xl w-full">
        <h2 className="text-xl font-semibold mb-4">Ôn tập toàn bộ câu hỏi</h2>

        <Table
          dataSource={questionData}
          columns={columns}
          rowKey={(record, index) => `${index}`}
          pagination={{
            pageSize: pageSize,
            onChange: (page) => setCurrentPage(page),
          }}
        />

        <Button
          onClick={onGoHome}
          className="p-2 mt-4 bg-gradient-to-r from-gray-300 to-gray-400 text-black rounded-md font-bold"
        >
          Về Trang Chủ
        </Button>
      </div>
    </div>
  );
}

function shuffleArray<T>(array: T[]): T[] {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// -------------------------------------------------------------
// Main App Component
// -------------------------------------------------------------
export default function App(): JSX.Element {
  const [page, setPage] = useState<"home" | "test" | "review" | "practice">(
    "home"
  );
  const [testSession, setTestSession] = useState<TestSession | null>(null);
  const [selectedQuestions, setSelectedQuestions] = useState<Question[]>([]);

  const goHome = () => setPage("home");

  const startTest = () => {
    const shuffled = shuffleArray(questionData);
    const selected = shuffled.length >= 40 ? shuffled.slice(0, 40) : shuffled;
    setSelectedQuestions(selected);
    setTestSession(null);
    setPage("test");
  };

  const submitTest = (answers: number[], questions: Question[]) => {
    const score = answers.reduce(
      (acc, ans, idx) => (ans === questions[idx].correctAnswer ? acc + 1 : acc),
      0
    );
    setTestSession({ questions, answers, score });
    setPage("review");
  };

  const retryTest = () => {
    startTest();
  };

  const goPractice = () => setPage("practice");

  return (
    <>
      {page === "home" && (
        <HomePage onStartTest={startTest} onPractice={goPractice} />
      )}
      {page === "test" && (
        <TestPage
          questionData={selectedQuestions}
          onSubmitTest={submitTest}
          onGoHome={goHome}
        />
      )}
      {page === "review" && testSession && (
        <ReviewPage
          session={testSession}
          onGoHome={goHome}
          onRetry={retryTest}
        />
      )}
      {page === "practice" && (
        <PracticePage questionData={questionData} onGoHome={goHome} />
      )}
      {page !== "home" &&
        page !== "test" &&
        page !== "review" &&
        page !== "practice" && <div>404 - Page Not Found</div>}
    </>
  );
}
