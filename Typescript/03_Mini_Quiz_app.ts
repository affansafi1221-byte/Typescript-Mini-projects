
interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
}

class QuizApp {
  private questions: Question[] = [
    {
      question: "Which keyword defines a constant in TypeScript?",
      options: ["var", "let", "const", "static"],
      correctAnswer: 2
    },
    {
      question: "Which method creates a new array by transforming items?",
      options: ["filter()", "map()", "find()", "push()"],
      correctAnswer: 1
    },
    {
      question: "Which type represents true or false?",
      options: ["string", "number", "boolean", "object"],
      correctAnswer: 2
    },
    {
      question: "Which keyword creates a class?",
      options: ["object", "class", "interface", "type"],
      correctAnswer: 1
    },
    {
      question: "Which method finds the first matching array element?",
      options: ["find()", "map()", "reduce()", "sort()"],
      correctAnswer: 0
    }
  ];

  private score = 0;

  startQuiz(): void {
    this.questions.forEach((question, index) => {
      console.log(`\nQ${index + 1}: ${question.question}`);

      question.options.forEach((option, optionIndex) => {
        console.log(`${optionIndex + 1}. ${option}`);
      });
    });

    console.log("\nQuiz loaded successfully!");
    console.log("Total questions:", this.questions.length);
  }

  submitAnswer(questionIndex: number, answer: number): void {
    const question = this.questions[questionIndex];

    if (!question) {
      console.log("Invalid question number!");
      return;
    }

    if (answer < 0 || answer >= question.options.length) {
      console.log("Invalid answer!");
      return;
    }

    if (answer === question.correctAnswer) {
      this.score++;
      console.log("Correct answer!");
    } else {
      console.log("Wrong answer!");
    }
  }

  showResult(): void {
    const total = this.questions.length;
    const percentage = (this.score / total) * 100;

    console.log("\n--- Quiz Results ---");
    console.log("Score:", `${this.score}/${total}`);
    console.log("Percentage:", `${percentage}%`);
  }
}

const quiz = new QuizApp();

quiz.startQuiz();

// Answers are zero-based indexes.
quiz.submitAnswer(0, 2);
quiz.submitAnswer(1, 1);
quiz.submitAnswer(2, 0);
quiz.submitAnswer(3, 1);
quiz.submitAnswer(4, 0);

quiz.showResult();
