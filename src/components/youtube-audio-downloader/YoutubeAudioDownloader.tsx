import React, { useState } from "react";
import { youtubeDownloader } from "../../utils/chat-api";

function YoutubeMp3Dowloader() {
  const [videoUrl, setVideoUrl] = useState<{ title: string; link: string }>();
  const [text, setText] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);

  const handleYoutubeVideo = async () => {
    if (text.trim() === "") {
      alert("Please enter a valid youtube link");
    } else {
      setLoading(true);
      try {
        await youtubeDownloader(text).then((res) => {
          setVideoUrl(res);
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
        <h1 className="text-3xl mb-4 font-semibold">
          Youtube Audio Downloader
        </h1>
        <div className="flex items-center justify-center flex-col w-full">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Paste youtube link "
            className="px-2 py-2 rounded border-2 w-full"
          />
          <button
            onClick={handleYoutubeVideo}
            className="py-2.5 px-4 rounded bg-black text-white w-full mt-2"
          >
            {loading ? "Loading..." : "Generate"}
          </button>
        </div>
        <div className="mt-6">
          {loading ? (
            <div className="space-y-2">
              <div className="h-80 w-full animate-pulse bg-gray-300 flex items-center justify-center">
                Loading Please wait...
              </div>
            </div>
          ) : (
            <div>
              {videoUrl && (
                <>
                  <h1 className="mb-4 font-light">{videoUrl.title}</h1>
                  <button
                    onClick={() => window.open(videoUrl.link)}
                    className="p-2 mt-4 bg-blue-500 text-white rounded w-full animate-bounce"
                  >
                    Download Song
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

export default YoutubeMp3Dowloader;
