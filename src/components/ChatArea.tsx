import type { Message } from "../types/message";
import ChatMessage from "./ChatMessage";

type Props = { messages: Message[] };

export default function ChatArea({ messages }: Props) {
  return (
    <div className="flex-1 overflow-y-auto p-6">
      <div className="flex flex-col gap-6">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
      </div>
    </div>
  );
}
