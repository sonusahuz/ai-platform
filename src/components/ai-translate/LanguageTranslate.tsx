import React, { useState } from "react";
import { speakLanguages, translate } from "../../utils/chat-api";

function Translate() {
  const [text, setText] = useState<string>("");
  const [from, setFrom] = useState<string>("");
  const [to, setTo] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [translatedText, setTranslatedText] = useState<string>("");

  const translateText = async () => {
    try {
      setLoading(true);
      const response = await translate(from, to, text);
      if (response && response.trans) {
        setTranslatedText(response.trans);
      }
    } catch (error) {
      console.error("Error translating text:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="lg:h-[80vh] flex items-center justify-center">
      <div>
        <h1 className="text-center text-3xl font-bold tracking-wider my-6">
          AI Languages Translate
        </h1>
        <div className="flex items-start justify-between lg:gap-10 gap-4 flex-wrap lg:flex-nowrap mx-auto">
          <div className="flex items-center justify-between flex-col w-full">
            <select
              onChange={(e) => setFrom(e.target.value)}
              value={from}
              className="border-2 rounded lg:w-96 w-80 p-3 cursor-pointer"
            >
              {speakLanguages.map((item) => (
                <option value={item.code} key={item.code}>
                  {item.name}
                </option>
              ))}
            </select>
            <textarea
              onChange={(e) => setText(e.target.value)}
              className="lg:w-96 w-80 border-2 p-2 h-60 mt-2 rounded"
              placeholder="Enter Text..."
              value={text}
            ></textarea>
          </div>
          <div className="flex items-center justify-between flex-col w-full">
            <select
              onChange={(e) => setTo(e.target.value)}
              value={to}
              className="border-2 rounded lg:w-96 w-80 p-3 cursor-pointer"
            >
              {speakLanguages.map((item) => (
                <option value={item.code} key={item.code}>
                  {item.name}
                </option>
              ))}
            </select>
            <textarea
              className="lg:w-96 w-80 border-2 p-2 h-60 mt-2 rounded"
              placeholder="Translation"
              value={translatedText}
              readOnly
            ></textarea>
          </div>
        </div>
        <button
          onClick={translateText}
          className="lg:w-full w-80 mx-auto block rounded bg-black text-white py-3 my-6"
        >
          {loading ? "Translating Please Wait..." : "Translate"}
        </button>
      </div>
    </div>
  );
}

export default Translate;
