export interface User {
  firstname: string;
  lastname: string;
  email: string;
  imageUrl: string;
  password: string;
  resetToken?: string;
  tokenExpiration?: number;
}

export interface Message {
  message: string;
  type: string;
}

