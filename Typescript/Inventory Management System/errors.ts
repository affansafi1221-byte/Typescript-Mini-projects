
export class AppError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "AppError";
  }
}

export class ValidationError extends AppError {
  constructor(message: string) {
    super(message);
    this. = "ValidationError";
  }
}

export class NotFoundError extends AppError {
  constructor(message: string) {
    super(message);
    this.name = "NotFoundError";
  }
}
