import type { ChatSession } from "../types/message";

type Props = {
  sessions: ChatSession[];
  onNewChat: () => void;
  onSessionClick: (id: string) => void;
};

export default function Sidebar({
  sessions,
  onNewChat,
  onSessionClick,
}: Props) {
  return (
    <aside className="flex h-full w-full max-w-[280px] flex-col border-r border-slate-400 bg-white/5 dark:bg-black/10">
      <div className="flex h-full flex-col justify-between p-4">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <div
              className="aspect-square size-10 rounded-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCmQNacqrBWV0P2_O1GHFa0sfNsS0m1X868lDjc1V6LuLgb5h4nkOLzb7BkWjwvXJn7pseyUmyuC_X5P_1dFQd9loX43vORoTCPkeYPXSJkTkF9ePjpGK2gFd2eD4SYuBItIsMHo15xxr2DRYOYYA6uQq5GimvnDvw2gyBkvDdP1VRVJipwWGZtiYDXK4X9hn2pu7umSkEGMGWfa3rdoDX7FJBQzF9KPqAFTchOp4BslPA8ie513gkygDEsZiWykFgDM0DXJ21JYiAQ")',
              }}
            />
            <div className="flex flex-col">
              <h1 className="text-base leading-normal font-medium text-slate-900 dark:text-white">
                AI Assistant
              </h1>
              <p className="text-sm leading-normal font-normal text-slate-500 dark:text-[#92a9c9]">
                Your personal AI
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            {sessions.map((session) => (
              <div
                key={session.id}
                onClick={() => onSessionClick(session.id)}
                className={`flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 ${
                  session.isActive
                    ? "bg-primary/10 dark:bg-[#233348]"
                    : "hover:bg-slate-100 dark:hover:bg-white/5"
                }`}
              >
                <span
                  className={`material-symbols-outlined text-xl ${
                    session.isActive
                      ? "text-primary dark:text-white"
                      : "text-slate-600 dark:text-white"
                  }`}
                >
                  chat
                </span>
                <p
                  className={`text-sm leading-normal font-medium ${
                    session.isActive
                      ? "text-primary dark:text-white"
                      : "text-slate-800 dark:text-white"
                  }`}
                >
                  {session.title}
                </p>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={onNewChat}
          className="bg-primary flex h-10 max-w-[480px] min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg px-4 text-sm leading-normal font-bold tracking-[0.015em] text-white"
        >
          <span className="truncate">New Chat</span>
        </button>
      </div>
    </aside>
  );
}
