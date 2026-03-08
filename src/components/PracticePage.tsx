import React, { useState, useMemo } from "react";
import { Button, Table, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import type { PracticePageProps, Question } from "../types";

export function PracticePage({ questionData, onGoHome }: PracticePageProps) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const pageSize = 10;

  // Filter questions based on search term
  const filteredData = useMemo(() => {
    if (!searchTerm.trim()) return questionData;
    
    const term = searchTerm.toLowerCase().trim();
    return questionData.filter((q) => {
      // Search in question text
      const inQuestion = q.question.toLowerCase().includes(term);
      // Search in options
      const inOptions = q.options.some((opt) =>
        opt.toLowerCase().includes(term)
      );
      return inQuestion || inOptions;
    });
  }, [questionData, searchTerm]);

  // Helper function to highlight search term
  const highlightText = (text: string, term: string) => {
    if (!term.trim()) return text;
    
    const parts = text.split(new RegExp(`(${term})`, "gi"));
    return parts.map((part, i) => 
      part.toLowerCase() === term.toLowerCase() ? (
        <span key={i} className="bg-yellow-300 font-bold">{part}</span>
      ) : (
        part
      )
    );
  };

  const columns = [
    {
      title: "Câu hỏi",
      dataIndex: "question",
      key: "question",
      render: (text: string, _record: Question, index: number) => {
        const absoluteIndex = (currentPage - 1) * pageSize + index + 1;
        return (
          <span>
            <strong>Câu {absoluteIndex}:</strong> {highlightText(text, searchTerm)}
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
                  style={{ color: isCorrect ? "green" : "inherit", fontWeight: isCorrect ? "bold" : "normal" }}
                >
                  {highlightText(option, searchTerm)}
                  {isCorrect && <span className="ml-2">✓</span>}
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
      className="flex items-start sm:items-center justify-center min-h-screen w-full py-4 sm:py-8"
    >
      <div className="bg-white/90 p-4 sm:p-6 rounded-xl shadow-xl max-w-5xl w-full mx-4 max-h-[calc(100vh-32px)] flex flex-col">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center text-gray-800">
          📚 Ôn tập toàn bộ câu hỏi
        </h2>

        {/* Search bar */}
        <div className="mb-4">
          <Input
            placeholder="🔍 Tìm kiếm câu hỏi hoặc đáp án..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1); // Reset to first page when searching
            }}
            prefix={<SearchOutlined />}
            allowClear
            className="w-full"
            size="large"
          />
          {searchTerm && (
            <div className="mt-2 text-sm text-gray-600">
              Tìm thấy <span className="font-bold text-blue-600">{filteredData.length}</span> câu hỏi
              {filteredData.length === 0 && (
                <span className="text-gray-500 ml-1">- Không có kết quả phù hợp</span>
              )}
            </div>
          )}
        </div>

        <div className="flex-1 overflow-auto">
          <Table
            dataSource={filteredData}
            columns={columns}
            rowKey={(record, index) => `${index}`}
            pagination={{
              pageSize: pageSize,
              onChange: (page) => setCurrentPage(page),
            }}
            scroll={{ x: true }}
          />
        </div>

        <Button
          onClick={onGoHome}
          className="mt-4 p-3 bg-gradient-to-r from-gray-300 to-gray-400 text-black rounded-lg font-bold w-full sm:w-auto sm:self-center"
        >
          🏠 Về Trang Chủ
        </Button>
      </div>
    </div>
  );
}

export default PracticePage;
