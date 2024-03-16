import React, { useState, useRef } from "react";
import { Files, Pause, Volume2 } from "lucide-react";

function ChatResponse({
  question,
  answer,
  id,
}: {
  question: string;
  answer: string;
  id: string;
}) {
  const [textToCopy, setTextToCopy] = useState("");
  const [isSpeaking, setIsSpeaking] = useState(false);
  const speechRef = useRef<SpeechSynthesis>();

  const handleCopyText = () => {
    navigator.clipboard.writeText(answer);
    setTextToCopy(answer);
  };

  const handleStartSpeak = () => {
    if (!isSpeaking) {
      const speech = new SpeechSynthesisUtterance(answer);
      speechRef.current = window.speechSynthesis;
      speechRef.current.speak(speech);
      setIsSpeaking(true);
    }
  };

  const handleStopSpeak = () => {
    if (isSpeaking && speechRef.current) {
      speechRef.current.cancel();
      setIsSpeaking(false);
    }
  };

  return (
    <div>
      <div
        className="p-2 rounded bg-blue-600 text-white lg:ml-96 w-auto"
        key={id}
      >
        <p>{question}</p>
      </div>

      {/* answer */}
      <div className="p-2 my-2 mb-8 border-2 rounded lg:mr-96 w-auto">
        {answer}
        <div className="flex items-center justify-end mt-5 gap-5">
          <Files
            className="text-gray-700 cursor-pointer bg-slate-300 rounded-full p-1 hover:bg-red-400"
            size={28}
            onClick={handleCopyText}
          />
          {isSpeaking ? (
            <Pause
              className="text-gray-700 cursor-pointer bg-red-300 rounded-full p-1"
              size={28}
              onClick={handleStopSpeak}
            />
          ) : (
            <Volume2
              className="text-gray-700 cursor-pointer bg-gray-300 rounded-full p-1"
              size={28}
              onClick={handleStartSpeak}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default ChatResponse;
