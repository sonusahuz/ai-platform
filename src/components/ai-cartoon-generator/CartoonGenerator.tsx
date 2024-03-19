import React, { useState } from "react";
import { cartoonGenerator, cartoonType } from "../../utils/chat-api";

function CartoonGenerator() {
  const [type, settype] = useState<string>("");
  const [cartoon, setCartoon] = useState<{ image_url: string }>();
  const [loading, setLoading] = React.useState<boolean>(false);

  const handleCartoon = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const image = formData.get("image");

    if (image) {
      setLoading(true);
      try {
        await cartoonGenerator(image as File, type as string).then((res) => {
          setCartoon(res.data);
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
        <h1 className="text-3xl mb-4 font-semibold">AI Cartoon Generator</h1>
        <form onSubmit={handleCartoon}>
          <input
            placeholder="Paste Image Link here..."
            type="file"
            name="image"
            className="p-2 px-4 rounded border-2 mr-2  w-full mb-4"
          />
          <select
            onChange={(e) => settype(e.target.value)}
            value={type}
            className="border-2 w-full p-3 mb-3 rounded"
          >
            {cartoonType.map((item) => (
              <option value={item.type}>{item.type}</option>
            ))}
          </select>
          <button className="p-2 px-4 rounded bg-black text-white w-full">
            {loading ? "Loading..." : "Generate"}
          </button>
        </form>
        <div className="mt-6">
          {loading ? (
            <div className="h-96 w-full animate-pulse bg-gray-300 flex items-center justify-center">
              <h1>Loading Please wait...</h1>
            </div>
          ) : (
            <div>
              {cartoon && (
                <>
                  <div>
                    <img src={cartoon.image_url} alt="" />
                    <button
                      onClick={() => window.open(cartoon.image_url)}
                      className="p-2 mt-4 w-full bg-blue-500 text-white rounded animate-bounce"
                    >
                      Download Image
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

export default CartoonGenerator;
