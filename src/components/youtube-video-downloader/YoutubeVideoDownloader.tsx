import React, { useState } from "react";
import { youtubeVideoDownloader } from "../../utils/chat-api";

interface ThumbnailType {
  url: string;
  mimeType: string;
}
function YoutubeVideoDowloader() {
  const [video, setVideo] = useState<{
    title: string;
    channelTitle: string;
    thumbnail: ThumbnailType[];
    formats: ThumbnailType[];
  }>();
  const [videoId, setVideoId] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);
  const handleImage = async () => {
    setLoading(true);
    try {
      await youtubeVideoDownloader(videoId.slice(32)).then((res) => {
        setVideo(res);
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
          Youtube Video Downloader
        </h1>
        <div className="flex items-center justify-center flex-col w-full">
          <input
            type="text"
            value={videoId}
            onChange={(e) => setVideoId(e.target.value)}
            placeholder="Paste youtube video link"
            className="px-2 py-2 rounded border-2 w-full"
          />
          <button
            onClick={handleImage}
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
              {video && (
                <>
                  <h1 className="mb-4 font-bold">Title: {video.title}</h1>
                  <h1 className="text-left mb-4">
                    Channel Name : {video.channelTitle}
                  </h1>
                  <img
                    src={video.thumbnail.at(1)?.url}
                    alt={video.title}
                    className="w-full"
                  />
                  <video controls muted className="my-4 w-full">
                    <source
                      src={video.formats.at(0)?.url}
                      type={video.formats.at(0)?.mimeType}
                    />
                  </video>
                  <div className="flex items-center justify-between lg:gap-10 gap-2 flex-wrap lg:flex-nowrap">
                    <button
                      onClick={() => window.open(video.thumbnail.at(1)?.url)}
                      className="p-2 mt-4 bg-blue-500 text-white rounded w-full animate-bounce"
                    >
                      Download Thumbnail
                    </button>
                    <button
                      onClick={() => window.open(video.formats.at(0)?.url)}
                      className="p-2 mt-4 bg-blue-500 text-white rounded w-full animate-bounce"
                    >
                      Download Video
                    </button>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default YoutubeVideoDowloader;
