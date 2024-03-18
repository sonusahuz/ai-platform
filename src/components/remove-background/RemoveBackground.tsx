import React, { useState } from "react";
import { removeBackground } from "../../utils/chat-api";

function RemoveBackground() {
  const [responseImage, setResponseImage] = useState<{ url: string }>();
  const [loading, setLoading] = React.useState<boolean>(false);

  const removeBackgroundImageHandle = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault(); // Prevent default form submission behavior

    const form = e.currentTarget; // Access the form element
    const formData = new FormData(form);
    const image = formData.get("image");
    const bg_image = formData.get("bg_image");

    if (image && bg_image) {
      setLoading(true);
      try {
        await removeBackground(image as File, bg_image as string).then(
          (res) => {
            setResponseImage(res.data);
            setLoading(false);
          }
        );
      } catch (error) {
        throw new Error("Failed to generate image");
      }
    } else {
      console.error("Some form data is missing.");
    }
  };
  return (
    <div className="flex items-center justify-center mx-auto mt-4 px-2">
      <div className="text-center border-2 shadow-2xl rounded p-4 w-[400px]">
        <h1 className="text-3xl mb-4 font-semibold">
          AI Image Background Remove
        </h1>
        <form
          onSubmit={removeBackgroundImageHandle}
          className="flex items-center justify-center flex-col gap-3"
        >
          <label>Image</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            className="p-2 px-4 rounded border-2 mr-2  w-full"
          />
          <label htmlFor="">Background Image</label>
          <input
            type="file"
            name="bg_image"
            accept="image/*"
            className="p-2 px-4 rounded border-2 mr-2 w-full"
          />{" "}
          <button className="p-2 px-4 rounded bg-black text-white w-full">
            {loading ? "Loading..." : "Generate"}
          </button>
        </form>
        <div className="mt-6">
          {loading ? (
            <div className="h-80 w-full animate-pulse bg-gray-300 flex items-center justify-center">
              <h1>Loading Please wait...</h1>
            </div>
          ) : (
            <div>
              {responseImage && (
                <>
                  <img src={responseImage.url} alt="generate-image" />
                  <button
                    onClick={() => window.open(responseImage.url)}
                    className="p-2 mt-4 bg-blue-500 text-white rounded animate-bounce"
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

export default RemoveBackground;
