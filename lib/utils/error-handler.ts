export class AppError extends Error {
  constructor(
    message: string,
    public code: string,
    public status: number = 500
  ) {
    super(message);
    this.name = "AppError";
  }
}

export function handleError(error: unknown): AppError {
  if (error instanceof AppError) {
    return error;
  }

  if (error instanceof Error) {
    return new AppError(error.message, "UNKNOWN_ERROR");
  }

  return new AppError("An unexpected error occurred", "UNKNOWN_ERROR");
}

export function isNetworkError(error: unknown): boolean {
  return error instanceof Error && 
    (error.message.includes("network") || error.message.includes("fetch"));
}