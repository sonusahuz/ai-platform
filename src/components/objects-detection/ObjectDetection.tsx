import React, { useState } from "react";
import { objectDetection } from "../../utils/chat-api";

function ObjectsDetection() {
  const [responseText, setResponseText] = useState<any>();
  const [loading, setLoading] = React.useState<boolean>(false);

  const handleImage = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const image = formData.get("image");

    if (image) {
      setLoading(true);
      try {
        await objectDetection(image as File).then((res: any) => {
          setResponseText(res.body);
          setLoading(false);
          console.log(res);
        });
      } catch (error) {
        throw new Error("Failed to generate image");
      }
    } else {
      console.error("Some form data is missing.");
    }
  };

  return (
    <div className="flex items-center justify-center mx-auto mt-4 px-2">
      <div className="text-center border-2 shadow-2xl rounded p-4 w-[500px]">
        <h1 className="text-3xl mb-4 font-semibold">
          AI Image Object Detection
        </h1>
        <form
          onSubmit={handleImage}
          className="flex items-center justify-center flex-col w-full"
        >
          <input
            type="file"
            name="image"
            className="p-2 px-4 rounded border-2 mr-2 w-full mb-4 "
          />
          <button className="p-2 px-4 rounded bg-black text-white w-full ">
            {loading ? "Loading..." : "Generate"}
          </button>
        </form>
        <div className="mt-6">
          {loading ? (
            <div className=" space-y-2">
              <div className="h-5 w-full animate-pulse bg-gray-300 flex items-center justify-center"></div>
              <div className="h-5 w-full animate-pulse bg-gray-300 flex items-center justify-center"></div>
            </div>
          ) : (
            <div>
              {responseText && (
                <div>
                  <p className="text-left">
                    Name: {responseText?.labels?.at(0)?.Name}
                  </p>
                  <p className="text-left">
                    Confidence: {responseText?.labels?.at(0)?.Confidence} %
                  </p>

                  <div>
                    Keywords:{" "}
                    {responseText?.keywords?.map((item: any) => (
                      <div>
                        <h1>{item}</h1>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ObjectsDetection;
