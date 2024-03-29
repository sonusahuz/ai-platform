import React, { useState } from "react";
import { generateImage } from "../../utils/chat-api";

function ImageGenerator() {
  const [image, setImage] = useState<string>();
  const [text, setText] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);

  const handleImageGenerator = async () => {
    if (text.trim() === "") {
      alert("Please enter a valid description");
    } else {
      setLoading(true);
      try {
        await generateImage(text, "texttoimage2").then((res) => {
          setImage(res.generated_image);
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
        <h1 className="text-3xl mb-4 font-semibold">AI Image Generator</h1>
        <div>
          <input
            placeholder="Enter image description"
            type="text"
            className="p-2 px-4 rounded border-2 mr-2 lg:w-[300px] w-full mb-4"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
          <button
            onClick={handleImageGenerator}
            className="p-2 px-4 rounded bg-black text-white w-full lg:w-36"
          >
            {loading ? "Loading..." : "Generate"}
          </button>
        </div>
        <div className="mt-6">
          {loading ? (
            <div className="h-96 w-full animate-pulse bg-gray-300 flex items-center justify-center">
              <h1>Loading Please wait...</h1>
            </div>
          ) : (
            <div>
              {image && (
                <>
                  <img src={image} alt="generate-image" />
                  <button
                    onClick={() => window.open(image)}
                    className="p-2 w-full mt-4 bg-blue-500 text-white rounded animate-bounce"
                  >
                    Download Image
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

export default ImageGenerator;
