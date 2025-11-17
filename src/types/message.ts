export interface Message {
  id: string;
  sender: "ai" | "user";
  content: string;
  timestamp: Date;
  codeBlock?: string;
}

export interface ChatSession {
  id: string;
  title: string;
  isActive: boolean;
}
