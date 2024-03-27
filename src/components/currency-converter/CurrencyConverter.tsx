import React, { useState } from "react";
import { countryData, currenyConverter } from "../../utils/chat-api";

function CurrenyConverter() {
  const [amount, setAmount] = useState<string>("");
  const [from, setFrom] = useState<string>("");
  const [to, setTo] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<string>("");

  const translateText = async () => {
    if (from.trim() === "" || to.trim() === "" || amount.trim() === "") {
      alert("Please enter all the fields");
    } else {
      try {
        setLoading(true);
        const response = await currenyConverter(from, to, amount);
        setResult(response);
      } catch (error) {
        console.error("Error translating text:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="lg:h-[80vh] flex items-center justify-center">
      <div>
        <h1 className="text-center text-3xl font-bold tracking-wider my-6">
          Currency Converter
        </h1>
        <div className="flex items-start justify-between lg:gap-10 gap-10 flex-wrap lg:flex-nowrap mx-auto">
          <div className="flex items-center justify-between flex-col w-full">
            <h1>From ({from})</h1>
            <select
              onChange={(e) => setFrom(e.target.value)}
              value={from}
              className="border-2 rounded lg:w-96 w-80 p-3 cursor-pointer"
            >
              {countryData.map((item) => (
                <option value={item.code} key={item.code}>
                  {item.currency}
                </option>
              ))}
            </select>
            <input
              onChange={(e) => setAmount(e.target.value)}
              className="border-2 lg:w-96 font-bold w-80 p-2 mt-2 rounded"
              placeholder="Enter Text..."
              value={amount}
            ></input>
          </div>
          <div className="flex items-center justify-between flex-col w-full">
            <h1>To ({to})</h1>
            <select
              onChange={(e) => setTo(e.target.value)}
              value={to}
              className="border-2 rounded lg:w-96 w-80 p-3 cursor-pointer"
            >
              {countryData.map((item) => (
                <option value={item.code} key={item.code}>
                  {item.currency}
                </option>
              ))}
            </select>
            <input
              className="border-2 lg:w-96 font-bold w-80 p-2 mt-2 rounded"
              placeholder="Translation"
              value={result}
              readOnly
            ></input>
          </div>
        </div>
        <button
          onClick={translateText}
          className="lg:w-full w-80 mx-auto block rounded bg-black text-white py-3 my-6"
        >
          {loading ? "Translating Please Wait..." : "Convert"}
        </button>
      </div>
    </div>
  );
}

export default CurrenyConverter;
