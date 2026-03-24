// Service for fetching trivia questions from Open Trivia Database API

export interface TriviaQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  category: string;
  difficulty?: string;
}

interface OpenTriviaQuestion {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

interface OpenTriviaResponse {
  response_code: number;
  results: OpenTriviaQuestion[];
}

// Decode HTML entities
function decodeHtml(html: string): string {
  const txt = document.createElement('textarea');
  txt.innerHTML = html;
  return txt.value;
}

// Shuffle array using Fisher-Yates algorithm
function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

export async function fetchTriviaQuestions(amount: number = 10): Promise<TriviaQuestion[]> {
  try {
    const response = await fetch(
      `https://opentdb.com/api.php?amount=${amount}&type=multiple`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch questions');
    }

    const data: OpenTriviaResponse = await response.json();

    if (data.response_code !== 0) {
      throw new Error('API returned an error');
    }

    return data.results.map((q, index) => {
      // Combine correct and incorrect answers
      const allAnswers = [...q.incorrect_answers, q.correct_answer];
      
      // Shuffle the answers
      const shuffledAnswers = shuffleArray(allAnswers);
      
      // Find the index of the correct answer after shuffling
      const correctAnswerIndex = shuffledAnswers.indexOf(q.correct_answer);

      return {
        id: index + 1,
        question: decodeHtml(q.question),
        options: shuffledAnswers.map(decodeHtml),
        correctAnswer: correctAnswerIndex,
        category: decodeHtml(q.category),
        difficulty: q.difficulty,
      };
    });
  } catch (error) {
    console.error('Error fetching trivia questions:', error);
    throw error;
  }
}

// Fetch questions with retry logic
export async function fetchTriviaQuestionsWithRetry(
  amount: number = 10,
  maxRetries: number = 3
): Promise<TriviaQuestion[]> {
  let lastError: Error | null = null;

  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fetchTriviaQuestions(amount);
    } catch (error) {
      lastError = error as Error;
      // Wait before retrying (exponential backoff)
      if (i < maxRetries - 1) {
        await new Promise(resolve => setTimeout(resolve, Math.pow(2, i) * 1000));
      }
    }
  }

  throw lastError || new Error('Failed to fetch questions after retries');
}
