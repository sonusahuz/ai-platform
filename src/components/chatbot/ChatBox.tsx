import { Chat, chatBot } from "../../utils/chat-api";
import React, { useState, useRef } from "react";
import { Files, Pause, Volume2 } from "lucide-react";

function ChatBot() {
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [aiResponse, setAiResponse] = useState<Chat[]>([]);
  const [textToCopy, setTextToCopy] = useState("");
  const [isSpeaking, setIsSpeaking] = useState(false);
  const speechRef = useRef<SpeechSynthesis>();

  const handleCopyText = (answer: string) => {
    navigator.clipboard.writeText(answer);
    setTextToCopy(answer);
  };

  const handleStartSpeak = (answer: string) => {
    if (!isSpeaking) {
      const speech = new SpeechSynthesisUtterance(answer);
      speechRef.current = window.speechSynthesis;
      speechRef.current.speak(speech);
      setIsSpeaking(true);
    }
  };

  const handleStopSpeak = (answer: string) => {
    if (isSpeaking && speechRef.current) {
      speechRef.current.cancel();
      setIsSpeaking(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      await chatBot(message).then((res) => {
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
      throw new Error("Failed to generate image");
    }
  };
  return (
    <div className="px-2 mx-auto">
      <div className="text-center">
        <h1 className="text-5xl font-bold py-8">AI ChatBot</h1>
        {aiResponse.length === 0 && (
          <h1 className="text-3xl font-bold pt-56">
            How can I help you today?
          </h1>
        )}
      </div>
      <div className="flex items-center justify-center mx-auto mb-40">
        <div className="w-[800px]">
          {/* question  */}
          {aiResponse.map((item) => (
            <div>
              <div
                className="p-2 rounded bg-blue-600 text-white lg:ml-96 w-auto"
                key={item.id}
              >
                <p>{item.question}</p>
              </div>
              {/* answer */}
              <div className="p-2 my-2 mb-8 border-2 rounded lg:mr-96 w-auto">
                {item.answer}
                <div className="flex items-center justify-end mt-5 gap-5">
                  <Files
                    className="text-gray-700 cursor-pointer bg-slate-300 rounded-full p-1 hover:bg-red-400"
                    size={28}
                    onClick={() => handleCopyText(item.answer)}
                  />
                  {isSpeaking ? (
                    <Pause
                      className="text-gray-700 cursor-pointer bg-red-300 rounded-full p-1"
                      size={28}
                      onClick={() => handleStopSpeak(item.answer)}
                    />
                  ) : (
                    <Volume2
                      className="text-gray-700 cursor-pointer bg-gray-300 rounded-full p-1"
                      size={28}
                      onClick={() => handleStartSpeak(item.answer)}
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
          <h1 className="text-center animate-pulse">
            {loading && "Loading..."}
          </h1>
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
    </div>
  );
}

export default ChatBot;
