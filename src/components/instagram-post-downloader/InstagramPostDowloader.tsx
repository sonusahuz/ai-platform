import React, { useState } from "react";
import { instagramDownloader } from "../../utils/chat-api";

function InstagramPostDowloader() {
  const [posts, setPosts] = useState<{ url: string; thumb: string }>();
  const [text, setText] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);

  const handleInstagramPost = async () => {
    if (text.trim() === "") {
      alert("Please enter a valid instagram post link");
    } else {
      setLoading(true);
      try {
        await instagramDownloader(text).then((res) => {
          setPosts(res.result.at(0));
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
          AI Instagram Post and Reels Downloader
        </h1>
        <div className="flex items-center justify-center flex-col w-full">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Paste instagram post link "
            className="px-2 py-2 rounded border-2 w-full"
          />
          <button
            onClick={handleInstagramPost}
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
              {posts && (
                <>
                  {posts.thumb === null ? (
                    <div className="h-80 w-full bg-gray-300 flex items-center justify-center">
                      Thumbnail is null
                    </div>
                  ) : (
                    <img src={posts.thumb} alt="generate-image" />
                  )}
                  <button
                    onClick={() => window.open(posts.url)}
                    className="p-2 w-full mt-4 bg-blue-500 text-white rounded"
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

export default InstagramPostDowloader;
