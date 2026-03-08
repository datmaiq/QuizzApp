import React from "react";
import { Button } from "antd";
import type { HomePageProps } from "../types";

export function HomePage({ onStartTest, onPractice }: HomePageProps) {
  return (
    <div
      style={{
        backgroundImage: 'url("/bg.png")',
        backgroundSize: "cover",
        minHeight: "100vh",
        padding: "20px",
      }}
      className="flex flex-col items-center justify-center min-h-screen w-full"
    >
      <div className="bg-white/90 p-8 sm:p-12 md:p-16 rounded-xl shadow-xl flex flex-col items-center max-w-md w-full mx-4">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-center text-gray-800">
          Trang Chủ
        </h1>
        <p className="text-gray-500 mb-8 text-center">Kiểm tra kiến thức an toàn điện</p>
        <Button
          className="w-full p-4 sm:p-5 mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-white rounded-lg font-bold text-lg shadow-md hover:shadow-lg transition-shadow"
          onClick={onStartTest}
        >
          📝 Trả lời
        </Button>
        <Button
          className="w-full p-4 sm:p-5 bg-gradient-to-r from-green-400 to-teal-500 text-white rounded-lg font-bold text-lg shadow-md hover:shadow-lg transition-shadow"
          onClick={onPractice}
        >
          📚 Ôn tập
        </Button>
      </div>
    </div>
  );
}

export default HomePage;
