import { useState } from "react";
import ChatArea from "./components/ChatArea";
import Header from "./components/Header";
import InputArea from "./components/InputArea";
import Sidebar from "./components/Sidebar";
import type { ChatSession, Message } from "./types/message";

const App: React.FC = () => {
  const [sessions, setSessions] = useState<ChatSession[]>([
    { id: "1", title: "Python Code Refactoring", isActive: true },
    { id: "2", title: "Trip to Japan Ideas", isActive: false },
    { id: "3", title: "Marketing Strategy", isActive: false },
    { id: "4", title: "Recipe for sourdough", isActive: false },
  ]);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "ai",
      content:
        "Hello! I can help with that. Please paste the Python code you'd like me to refactor.",
      timestamp: new Date(),
    },
    {
      id: "2",
      sender: "user",
      content: "Sure, here's the code snippet I'm working on.",
      timestamp: new Date(),
    },
    {
      id: "3",
      sender: "ai",
      content:
        "Thanks. I've reviewed the code. Here is a refactored version with improved readability and efficiency. I've added comments to explain the changes.",
      timestamp: new Date(),
      codeBlock: `def calculate_area(length, width):
    """
    Calculates the area of a rectangle.
    - Renamed function for clarity.
    - Added docstring for documentation.
    """
    if length <= 0 or width <= 0:
        raise ValueError("Length and width must be positive numbers")
    return length * width`,
    },
  ]);

  const handleSendMessage = (content: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      sender: "user",
      content,
      timestamp: new Date(),
    };
    setMessages([...messages, newMessage]);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        sender: "ai",
        content:
          "This is a simulated AI response. In a real app, this would connect to an AI API.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 1000);
  };

  const handleNewChat = () => {
    const newSession: ChatSession = {
      id: Date.now().toString(),
      title: "New Chat",
      isActive: true,
    };
    setSessions(
      sessions.map((s) => ({ ...s, isActive: false })).concat(newSession),
    );
    setMessages([]);
  };

  const handleSessionClick = (id: string) => {
    setSessions(
      sessions.map((s) => ({
        ...s,
        isActive: s.id === id,
      })),
    );
  };

  const activeSession = sessions.find((s) => s.isActive);

  return (
    <div className="bg-background-light dark:bg-background-dark relative flex h-screen w-full flex-col">
      <div className="flex h-full grow">
        <Sidebar
          sessions={sessions}
          onNewChat={handleNewChat}
          onSessionClick={handleSessionClick}
        />
        <main className="flex flex-1 flex-col">
          <Header title={activeSession?.title || "AI Assistant"} />
          <ChatArea messages={messages} />
          <InputArea onSendMessage={handleSendMessage} />
        </main>
      </div>
    </div>
  );
};

export default App;
