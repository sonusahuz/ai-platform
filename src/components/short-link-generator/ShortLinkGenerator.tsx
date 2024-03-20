import React, { useState } from "react";
import { shortLinkGenerator } from "../../utils/chat-api";
import { Copy } from "lucide-react";

function ShortLinkGenerator() {
  const [createUrl, setCreateUrl] = useState<{ url: string }>();
  const [url, setUrl] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);

  const handleUrl = async () => {
    setLoading(true);
    try {
      await shortLinkGenerator(url).then((res) => {
        setCreateUrl(res);
        setLoading(false);
      });
    } catch (error) {
      throw new Error("Failed to generate image");
    }
  };

  return (
    <div className="flex items-center justify-center mx-auto mt-4 px-2">
      <div className="text-center border-2 shadow-2xl rounded p-4 w-[500px]">
        <h1 className="text-3xl mb-4 font-semibold">Short Link Generator</h1>
        <div className="flex items-center justify-center flex-col w-full">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Paste the URL...."
            className="px-2 py-2 rounded border-2 w-full"
          />
          <button
            onClick={handleUrl}
            className="py-2.5 px-4 rounded bg-black text-white w-full mt-2"
          >
            {loading ? "Loading..." : "Generate"}
          </button>
        </div>
        <div className="mt-6">
          {loading ? (
            <div className="space-y-2">
              <div className="h-20 w-full mx-auto animate-pulse bg-gray-300 flex items-center justify-center">
                Loading Please wait...
              </div>
            </div>
          ) : (
            <div>
              {createUrl && (
                <div>
                  <p className="text-left p-2 border-2 rounded">
                    {createUrl.url}
                  </p>
                  <Copy
                    className=" float-right text-gray-600 cursor-pointer mt-2"
                    onClick={() =>
                      navigator.clipboard.writeText(createUrl.url!)
                    }
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

export default ShortLinkGenerator;
