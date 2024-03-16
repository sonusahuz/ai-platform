import React from "react";
import ChatResponse from "./ChatResponse";
import Home from "./Home";
import { Chat, chatMessage } from "../utils/chat-api";

function ChatBox() {
  const [message, setMessage] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);
  const [aiResponse, setAiResponse] = React.useState<Chat[]>([]);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      await chatMessage(message).then((res) => {
        setLoading(false);
        setMessage("");
        setAiResponse([
          ...aiResponse,
          {
            id: Date.now().toString(),
            question: message,
            answer: res,
          },
        ]);
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex items-center justify-center mx-auto mb-40">
      <div className="w-[800px]">
        {/* question  */}
        {aiResponse.length === 0 && <Home />}
        {aiResponse.map((item) => (
          <ChatResponse
            key={item.id}
            question={item.question}
            answer={item.answer}
            id={item.id}
          />
        ))}
        <h1 className="text-center animate-pulse">{loading && "Loading..."}</h1>
        <form
          onSubmit={handleSubmit}
          className="bottom-7 right-0 left-0 rounded m-2 fixed flex items-center justify-between p-2 bg-white "
        >
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="px-2 py-2 mr-2 rounded border-2 w-full"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-black text-white rounded  "
          >
            Send
          </button>
        </form>
        <div className=" mx-auto bottom-1 right-0 left-0 rounded m-2 fixed bg-white">
          <h1 className="text-xs text-center">
            Designed & Developed by{" "}
            <a href="https://sonusahu.vercel.app" className="text-blue-500">
              Sonu Sahu
            </a>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default ChatBox;
