import React, { useState } from "react";
import { questionData } from "./questionData";
import { shuffleArray } from "./utils/shuffleArray";
import { HomePage, TestPage, ReviewPage, PracticePage } from "./components";
import type { Question, TestSession } from "./types";

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
