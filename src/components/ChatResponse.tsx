import React from "react";
function ChatResponse({
  question,
  answer,
  id,
}: {
  question: string;
  answer: string;
  id: string;
}) {
  return (
    <div>
      <div
        className="p-2 rounded bg-blue-600 text-white lg:ml-96 w-auto"
        key={id}
      >
        <p>{question}</p>
      </div>

      {/* answer  */}
      <div className="p-2 my-2 mb-8 border-2 rounded lg:mr-96 w-auto">
        <p>{answer}</p>
      </div>
    </div>
  );
}

export default ChatResponse;
