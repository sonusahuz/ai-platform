import React, { useState } from "react";
import { generateImage } from "../../utils/chat-api";

function TextSummarization() {
  const [summaryText, setSummaryText] = useState<string>();
  const [text, setText] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);

  const handleTextSummariztion = async () => {
    if (text.trim() === "") {
      alert("Please enter a valid description");
    } else {
      setLoading(true);
      try {
        await generateImage(text, "summary").then((res) => {
          setSummaryText(res.result);
          setLoading(false);
        });
      } catch (error) {
        throw new Error("Failed to generate image");
      }
    }
  };

  return (
    <div className="flex items-center justify-center mx-auto mt-4 px-2">
      <div className="text-center border-2 shadow-2xl rounded p-4 w-[500px]">
        <h1 className="text-3xl mb-4 font-semibold">AI Text Summarization</h1>
        <div className="flex items-center justify-center flex-col w-full">
          <textarea
            placeholder="Write description...."
            className="p-2 px-4 rounded border-2 mr-2 w-full mb-4 h-60"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
          <button
            onClick={handleTextSummariztion}
            className="p-2 px-4 rounded bg-black text-white w-full "
          >
            {loading ? "Loading..." : "Generate"}
          </button>
        </div>
        <div className="mt-6">
          {loading ? (
            <div className=" space-y-2">
              <div className="h-5 w-full animate-pulse bg-gray-300 flex items-center justify-center"></div>
              <div className="h-5 w-full animate-pulse bg-gray-300 flex items-center justify-center"></div>
              <div className="h-5 w-full animate-pulse bg-gray-300 flex items-center justify-center"></div>
              <div className="h-5 w-full animate-pulse bg-gray-300 flex items-center justify-center"></div>
              <div className="h-5 w-full animate-pulse bg-gray-300 flex items-center justify-center"></div>
            </div>
          ) : (
            <div>
              <p className="text-left">{summaryText}</p>{" "}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TextSummarization;
