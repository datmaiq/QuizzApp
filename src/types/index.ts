// -------------------------------------------------------------
// Data Types
// -------------------------------------------------------------
export interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface TestSession {
  questions: Question[];
  answers: number[];
  score: number;
}

export interface HomePageProps {
  onStartTest: () => void;
  onPractice: () => void;
}

export interface TestPageProps {
  questionData: Question[];
  onSubmitTest: (answers: number[], questions: Question[]) => void;
  onGoHome: () => void;
}

export interface ReviewPageProps {
  session: TestSession;
  onGoHome: () => void;
  onRetry: () => void;
}

export interface PracticePageProps {
  questionData: Question[];
  onGoHome: () => void;
}
