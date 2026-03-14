import React from "react";
import { Button } from "antd";
import { PencilSimple, BookOpen } from "phosphor-react";
import type { HomePageProps } from "../types";

export function HomePage({ onStartTest, onPractice }: HomePageProps) {
  return (
    <div
      style={{
        backgroundImage: 'url("/bg.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        padding: "20px",
      }}
      className="flex flex-col items-center justify-center min-h-screen w-full"
    >
      <div className="bg-white/90 p-8 sm:p-12 md:p-16 rounded-xl shadow-xl flex flex-col items-center max-w-md w-full mx-4 mt-32 sm:mt-0">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-center text-gray-800">
          Trang Chủ
        </h1>
        <p className="text-gray-500 mb-8 text-center">Kiểm tra kiến thức an toàn điện</p>
        <Button
          className="w-full p-4 sm:p-5 mb-4 bg-slate-800 text-white rounded-md font-medium text-lg shadow-sm hover:shadow-md hover:bg-slate-700 transition-all duration-300 tracking-wide"
          onClick={onStartTest}
        >
          <span className="flex items-center justify-center gap-2"><PencilSimple size={20} /> Trả lời</span>
        </Button>
        <Button
          className="w-full p-4 sm:p-5 bg-white text-slate-800 border border-slate-300 rounded-md font-medium text-lg shadow-sm hover:shadow-md hover:bg-slate-50 transition-all duration-300 tracking-wide"
          onClick={onPractice}
        >
          <span className="flex items-center justify-center gap-2"><BookOpen size={20} /> Ôn tập</span>
        </Button>
      </div>
    </div>
  );
}

export default HomePage;
