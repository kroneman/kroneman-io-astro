export class ValidationError extends Error {
  private type: string;
  constructor(message?: string) {
    super(message);

    this.message = message || 'ValidationError';
    this.type = 'ValidationError';
  }
}

export class MemberExistsError extends Error {
  private type: string;
  constructor(message?: string) {
    super(message);

    this.message = message || 'MemberExistsError';
    this.type = 'MemberExistsError';
  }
}
