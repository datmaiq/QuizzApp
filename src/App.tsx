import React, { useState } from "react";
import { Steps, Button, Radio, Result } from "antd";
import type { RadioChangeEvent } from "antd/es/radio";
import { questionData } from "./questionData";
import { Table } from "antd";
const { Step } = Steps;

interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
}

// const questionData: Question[] = [
//   {
//     question: "Câu 1: 2 + 2 = ?",
//     options: ["1", "2", "3", "4"],
//     correctAnswer: 3,
//   },
//   {
//     question: "Câu 2: Con mèo kêu như thế nào?",
//     options: ["Gâu gâu", "Chíp chíp", "Meo meo", "Ò ó o"],
//     correctAnswer: 2,
//   },
//   {
//     question: "Câu 3: Nước nào sau đây ở Châu Âu?",
//     options: ["Việt Nam", "Pháp", "Nhật Bản", "Hàn Quốc"],
//     correctAnswer: 1,
//   },
// ];

interface HomePageProps {
  onStartTest: () => void;
  onReview: () => void;
}

function HomePage({ onStartTest, onReview }: HomePageProps) {
  return (
    <div
      style={{
        backgroundImage: 'url("/bg.png")',
        backgroundSize: "cover",
        minHeight: "100vh",
        padding: "20px",
      }}
      className="flex flex-col items-center justify-center h-screen w-screen bg-cover bg-center"
    >
      <div className="bg-white/90 p-20  rounded-md shadow-lg flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-6">Trang Chủ</h1>
        <img src="/logo192.png" className=" w-20 h-10" alt="test" />
        <Button
          className="p-5 mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-white rounded-md font-bold hover:-translate-y-1 hover:shadow-lg"
          onClick={onStartTest}
        >
          Trả lời
        </Button>
        <Button
          className="p-5 bg-gradient-to-r from-green-400 to-teal-500 text-white rounded-md font-bold hover:-translate-y-1 hover:shadow-lg"
          onClick={onReview}
        >
          Ôn tập
        </Button>
      </div>
    </div>
  );
}

interface ReviewPageProps {
  questionData: Question[];
  onGoHome: () => void;
}

function ReviewPage({ questionData, onGoHome }: ReviewPageProps) {
  const columns = [
    {
      title: "Câu hỏi",
      dataIndex: "question",
      key: "question",
      render: (text: string, record: Question, index: number) => (
        <span>
          <strong>Câu {index + 1}:</strong> {text}
        </span>
      ),
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
      className="flex items-center justify-center h-screen w-screen bg-cover bg-center"
    >
      <img src="/logo192.png" className="w-10 h-10" alt="test" />
      <div className="bg-white/90 p-6 rounded-md shadow-lg max-w-4xl w-full">
        <h2 className="text-xl font-semibold mb-4">Ôn Tập</h2>

        <Table
          dataSource={questionData}
          columns={columns}
          rowKey={(record, index) => `${index}`}
          pagination={{ pageSize: 3 }}
        />
        <Button
          key="home"
          onClick={onGoHome}
          className="p-2 mt-4 bg-gradient-to-r from-gray-300 to-gray-400 text-black rounded-md font-bold hover:-translate-y-1 hover:shadow-lg"
        >
          Về Trang Chủ
        </Button>
      </div>
    </div>
  );
}

interface TestPageProps {
  questionData: Question[];
  onGoHome: () => void;
}

function TestPage({ questionData, onGoHome }: TestPageProps) {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [answers, setAnswers] = useState<number[]>(
    Array(questionData.length).fill(-1)
  );
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const score = answers.reduce((acc, ans, idx) => {
    return ans === questionData[idx].correctAnswer ? acc + 1 : acc;
  }, 0);

  const handleOptionChange = (e: RadioChangeEvent) => {
    const arr = [...answers];
    arr[currentStep] = e.target.value;
    setAnswers(arr);
  };

  const handleNext = () => setCurrentStep((prev) => prev + 1);
  const handlePrev = () => setCurrentStep((prev) => prev - 1);
  const handleSubmit = () => setIsSubmitted(true);

  if (isSubmitted) {
    return (
      <div
        style={{
          backgroundImage: 'url("/bg.png")',
          backgroundSize: "cover",
          minHeight: "100vh",
          padding: "20px",
        }}
        className="flex items-center justify-center h-screen w-screen bg-cover bg-center"
      >
        <div className="bg-white/90 p-6 rounded-md shadow-lg text-center">
          <Result
            status="success"
            title="Bạn đã nộp bài!"
            subTitle={`Điểm: ${score}/${questionData.length}`}
            extra={[
              <Button
                type="primary"
                key="back"
                onClick={() => window.location.reload()}
                className="p-2 bg-gradient-to-r from-blue-400 to-purple-500 text-white rounded-md font-bold hover:-translate-y-1 hover:shadow-lg"
              >
                Làm lại
              </Button>,
              <Button
                key="home"
                onClick={onGoHome}
                className="p-2 ml-2 bg-gradient-to-r from-gray-300 to-gray-400 text-black rounded-md font-bold hover:-translate-y-1 hover:shadow-lg"
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
      className="flex items-center justify-center h-screen w-screen bg-cover bg-center"
    >
      <div className="bg-white/90 p-6 rounded-md shadow-lg max-w-lg w-full">
        <Steps current={currentStep} size="small" className="mb-4">
          {questionData.map((_, i) => (
            <Step key={i} />
          ))}
        </Steps>

        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">
            {questionData[currentStep].question}
          </h2>
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
          {currentStep > 0 ? (
            <Button
              className="p-2 bg-gradient-to-r from-blue-400 to-purple-500 text-white rounded-md font-bold mb-2 hover:-translate-y-1 hover:shadow-lg"
              onClick={handlePrev}
            >
              Trở lại
            </Button>
          ) : (
            <div />
          )}
          {currentStep < questionData.length - 1 ? (
            <Button
              className="p-2 bg-gradient-to-r from-blue-400 to-purple-500 text-white rounded-md font-bold mb-2 hover:-translate-y-1 hover:shadow-lg"
              type="primary"
              onClick={handleNext}
              disabled={answers[currentStep] === -1}
            >
              Tiếp theo
            </Button>
          ) : (
            <Button
              className="p-2 bg-gradient-to-r from-blue-400 to-purple-500 text-white rounded-md font-bold mb-2 hover:-translate-y-1 hover:shadow-lg"
              type="primary"
              onClick={handleSubmit}
              disabled={answers[currentStep] === -1}
            >
              Nộp bài
            </Button>
          )}
        </div>
        <Button
          className="p-2 bg-gradient-to-r from-gray-300 to-gray-400 text-black rounded-md font-bold mt-4 hover:-translate-y-1 hover:shadow-lg"
          onClick={onGoHome}
        >
          Về Trang Chủ
        </Button>
      </div>
    </div>
  );
}

export default function App(): JSX.Element {
  const [page, setPage] = useState<"home" | "test" | "review">("home");

  const goHome = () => setPage("home");
  const startTest = () => setPage("test");
  const review = () => setPage("review");

  if (page === "home")
    return <HomePage onStartTest={startTest} onReview={review} />;
  if (page === "test")
    return <TestPage questionData={questionData} onGoHome={goHome} />;
  if (page === "review")
    return <ReviewPage questionData={questionData} onGoHome={goHome} />;

  return <div>404 - Page Not Found</div>;
}
