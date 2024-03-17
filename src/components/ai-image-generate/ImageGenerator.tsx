import React, { useState } from "react";
import { generateImage } from "../../utils/chat-api";

function ImageGenerator() {
  const [image, setImage] = useState<string>();
  const [text, setText] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);
  const handleImage = async () => {
    setLoading(true);
    try {
      await generateImage(text, "texttoimage2").then((res) => {
        setImage(res.generated_image);
        setLoading(false);
      });
    } catch (error) {
      throw new Error("Failed to generate image");
    }
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = image!;
    link.download = "generated-image.png"; // Change the file name if needed
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
            onClick={handleImage}
            className="p-2 px-4 rounded bg-black text-white w-full lg:w-36"
          >
            {loading ? "Loading..." : "Generate"}
          </button>
        </div>
        <div className="mt-6">
          {loading ? (
            <div className="h-96 w-full animate-pulse bg-gray-300 flex items-center justify-center">
              <h1>Loading...</h1>
            </div>
          ) : (
            <div>
              {image && (
                <>
                  <img src={image} alt="generate-image" />
                  <button
                    onClick={handleDownload}
                    className="p-2 mt-4 bg-blue-500 text-white rounded"
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
