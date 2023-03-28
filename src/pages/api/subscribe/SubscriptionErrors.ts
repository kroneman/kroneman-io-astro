export class ValidationError extends Error {
  private type: string;
  constructor(message?: string) {
    super(message);

    this.message = message || 'ValidationError';
    this.type = 'ValidationError';
  }
}
