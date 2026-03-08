import React, { useState } from "react";
import { Button, Table } from "antd";
import { CheckCircleTwoTone, CloseCircleTwoTone } from "@ant-design/icons";
import type { ReviewPageProps, Question } from "../types";

export function ReviewPage({ session, onGoHome, onRetry }: ReviewPageProps) {
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
          userAnswer !== -1 ? record.options[userAnswer] : "Chưa trả lờii";
        const isCorrect = userAnswer === record.correctAnswer;
        return (
          <span>
            {answeredText}{" "}
            {userAnswer !== -1 &&
              (isCorrect ? (
                <CheckCircleTwoTone twoToneColor="#52c41a" />
              ) : (
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
      className="flex items-start sm:items-center justify-center min-h-screen w-full py-4 sm:py-8"
    >
      <div className="bg-white/90 p-4 sm:p-6 rounded-xl shadow-xl max-w-5xl w-full mx-4 max-h-[calc(100vh-32px)] flex flex-col">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center text-gray-800">
          Kết quả: {session.score}/{session.questions.length} điểm
          <span className="block text-sm font-normal text-gray-500 mt-1">
            ({Math.round((session.score / session.questions.length) * 100)}%)
          </span>
        </h2>
        <div className="flex-1 overflow-auto">
          <Table
            dataSource={session.questions}
            columns={columns}
            rowKey={(record, index) => `${index}`}
            pagination={{
              pageSize: pageSize,
              onChange: (page) => setCurrentPage(page),
            }}
            scroll={{ x: true }}
          />
        </div>
        <div className="mt-4 flex flex-col sm:flex-row gap-2">
          <Button
            onClick={onRetry}
            className="flex-1 p-3 bg-gradient-to-r from-blue-400 to-purple-500 text-white rounded-lg font-bold"
          >
            🔄 Làm lại
          </Button>
          <Button
            onClick={onGoHome}
            className="flex-1 p-3 bg-gradient-to-r from-gray-300 to-gray-400 text-black rounded-lg font-bold"
          >
            🏠 Về Trang Chủ
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ReviewPage;
