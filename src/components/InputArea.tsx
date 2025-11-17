import React, { useState } from "react";

type Props = {
  onSendMessage: (message: string) => void;
};

export default function InputArea({ onSendMessage }: Props) {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (input.trim()) {
      onSendMessage(input);
      setInput("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="border-t border-slate-200/10 p-4">
      <div className="relative">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          className="focus:ring-primary h-12 w-full rounded-lg border-transparent bg-slate-100 px-4 pr-12 text-slate-900 placeholder-slate-500 focus:border-transparent focus:ring-2 focus:outline-none dark:bg-white/10 dark:text-white dark:placeholder-slate-400"
          placeholder="Ask me anything..."
          type="text"
        />
        <button
          onClick={handleSubmit}
          className="text-primary hover:bg-primary/10 absolute inset-y-0 right-0 flex w-12 items-center justify-center rounded-r-lg dark:text-white dark:hover:bg-white/10"
        >
          <span className="material-symbols-outlined">send</span>
        </button>
      </div>
    </div>
  );
}
