import React, { useState } from "react";
import { generateImage, passwordGenerator } from "../../utils/chat-api";
import { Copy } from "lucide-react";

function PasswordGenerator() {
  const [password, setPassword] = useState<string>();
  const [text, setText] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);
  const handleImage = async () => {
    setLoading(true);
    try {
      await passwordGenerator(text).then((res: any) => {
        setPassword(res.random_password);
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
          AI Random Password Generator
        </h1>
        <div className="flex items-center justify-center flex-col w-full">
          <input
            placeholder="Enter Length of the password"
            className="p-2 px-4 rounded border-2 mr-2 w-full mb-4 "
            onChange={(e) => setText(e.target.value)}
            value={text}
            type="number"
          />
          <button
            onClick={handleImage}
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
            </div>
          ) : (
            <div>
              {password && (
                <div>
                  <p className="text-left">{password}</p>
                  <Copy
                    className=" float-right text-gray-600 cursor-pointer"
                    onClick={() => navigator.clipboard.writeText(password!)}
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PasswordGenerator;
