import React, { useState } from "react";
import { generateImage } from "../../utils/chat-api";

function TextToSpeech() {
  const [responseAudio, setResponseAudio] = useState<{
    url: string;
    id: string;
  }>();
  const [text, setText] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);

  const handleAudio = async () => {
    setLoading(true);
    try {
      await generateImage(text, "texttospeech").then((res) => {
        setResponseAudio(res);
        setLoading(false);
      });
    } catch (error) {
      throw new Error("Failed to generate image");
    }
  };

  return (
    <div className="flex items-center justify-center mx-auto mt-4 px-2">
      <div className="text-center border-2 shadow-2xl rounded p-4 w-[500px]">
        <h1 className="text-3xl mb-4 font-semibold">
          AI Text To Speech Converter
        </h1>
        <div className="flex items-center justify-center flex-col w-full">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Write description...."
            className="px-2 py-2 rounded border-2 w-full"
          />
          <button
            onClick={handleAudio}
            className="py-2.5 px-4 rounded bg-black text-white w-full mt-2"
          >
            {loading ? "Loading..." : "Generate"}
          </button>
        </div>
        <div className="mt-6">
          {loading ? (
            <div className="space-y-2">
              <div className="h-20 w-full mx-auto animate-pulse bg-gray-300 flex items-center justify-center">
                Loading Please wait...
              </div>
            </div>
          ) : (
            <div>
              {responseAudio && (
                <>
                  <button
                    onClick={() => window.open(responseAudio.url)}
                    className="p-2 mt-4 w-full bg-blue-500 text-white rounded"
                  >
                    Listen Song
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TextToSpeech;
