import React from "react";
import { FaReply } from "react-icons/fa";

interface ChatMessageProps {
  id: number;
  username: string;
  avatarUrl: string;
  message: string;
  isReply?: boolean;
  repliedTo?: string;
  onReply?: (id: number) => void;
}

const ChatMessage: React.FC<ChatMessageProps> = ({
  id,
  username,
  avatarUrl,
  message,
  isReply = false,
  repliedTo,
  onReply,
}) => {
  const containerClass = `flex items-start space-x-4 p-3 bg-gray-800 rounded-xl shadow-md w-full ${
    isReply ? "pl-16" : ""
  }`;

  const avatarClass = `w-12 h-12 rounded-full object-cover ${
    isReply ? "opacity-80" : ""
  }`;

  const usernameClass = "font-semibold text-white";

  const repliedToClass = "mt-1 p-2 bg-gray-700 rounded-l-lg text-gray-300 text-sm";

  const messageClass = "mt-2 text-white text-sm";

  const replyButtonClass =
    "flex items-center gap-1 text-gray-400 text-xs hover:text-blue-400 cursor-pointer";

  return (
    <div className={containerClass}>
      {/* Profile Section */}
      <img src={avatarUrl} alt={username} className={avatarClass} />

      {/* Message Content */}
      <div className="flex flex-col w-full">
        {/* Top row: username + reply button */}
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className={usernameClass}>{username}</span>
            {isReply && (
              <span className="text-xs text-gray-400 bg-gray-700 px-2 py-0.5 rounded-full">
                Replied
              </span>
            )}
          </div>

          {/* Reply Button on right */}
          {/* <div
            className={replyButtonClass}
            onClick={() => onReply && onReply(id)}
          >
            <FaReply className="w-3 h-3" /> Reply
          </div> */}
        </div>

        {/* Replied-to UI */}
        {isReply && repliedTo && (
          <div className={repliedToClass}>Replied to {repliedTo}</div>
        )}

        {/* Actual message */}
        <p className={messageClass}>{message}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
