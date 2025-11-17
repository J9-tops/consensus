import type { Message } from "../types/message";
type Props = { message: Message };

export default function ChatMessage({ message }: Props) {
  const isAI = message.sender === "ai";
  const avatarUrl = isAI
    ? "https://lh3.googleusercontent.com/aida-public/AB6AXuDrNyFBafPfhvhF3a8lO7tjyqCZasnm3UdOI_g5IyROvy8lg6AjRWrP8DDnvRdTl0hLXB72ei1NjbweDw17Y8HL0L2SVZEsQB2m15i4wFjpTm6HPiQUBELt0xAgSsu-ocz_yKZUdWcfHRoTqcA1d_2AKFzGorTJu72cGJyBxXWvM0Az2-NyZjAc4idzMfudhDnA9KG0ZQ2SYwRQ5HoezDvcE_PmYDp70PinFTMM-obmnFuy9QTfLcjo4KxpLEoUx_zMrkqBJ-ryqeej"
    : "https://lh3.googleusercontent.com/aida-public/AB6AXuBH2-rzP-DPG7UCOXWyh3xos0qxwAgBz5ZMXv9RNRpu37yEMx1RBX5cNXKPeLCxcXmUnmGy5hY9nbMXsWovwL4JXTUTJrG2Gx8iWDDe5YDcTKUUE9o5efvKldVMP_gO6Wg7Tap_YCzagCWiYsz8eRaWM2MjGzBsMCTcyOZsslfmnM3lkr6XQxTqydECpiJQcQDTKqqfvQm66AEP0sAQNnKZdBrFToADV34neV3EDuiNW4R_tajiz4G7YO9VzqvqVc9weUlyugG3qYZz";
  return (
    <div
      className={`flex max-w-2xl items-end gap-3 ${
        !isAI ? "ml-auto justify-end" : ""
      }`}
    >
      {isAI && (
        <div
          className="aspect-square w-10 shrink-0 self-start rounded-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url("${avatarUrl}")` }}
        />
      )}
      <div
        className={`flex flex-1 flex-col gap-2 ${isAI ? "items-start" : "items-end"}`}
      >
        <p
          className={`text-sm leading-normal font-medium text-slate-600 dark:text-[#92a9c9] ${!isAI ? "text-right" : ""}`}
        >
          {isAI ? "AI Assistant" : "You"}
        </p>
        <div
          className={`flex max-w-xl rounded-lg px-4 py-3 text-base leading-normal font-normal ${
            isAI
              ? "rounded-bl-none bg-slate-100 text-slate-900 dark:bg-[#233348] dark:text-white"
              : "bg-primary rounded-br-none text-white"
          }`}
        >
          {message.content}
        </div>
        {message.codeBlock && (
          <div className="w-full max-w-xl rounded-lg bg-slate-200/50 p-4 dark:bg-black/50">
            <pre className="overflow-x-auto text-sm text-slate-800 dark:text-slate-200">
              <code>{message.codeBlock}</code>
            </pre>
          </div>
        )}
      </div>
      {!isAI && (
        <div
          className="aspect-square w-10 shrink-0 rounded-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url("${avatarUrl}")` }}
        />
      )}
    </div>
  );
}
