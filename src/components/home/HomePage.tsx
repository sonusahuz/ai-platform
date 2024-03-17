import { Bot, Image, ScrollText, Volume2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function Component() {
  return (
    <div className="bg-gray-50 dark:bg-gray-950 px-4">
      <div className="space-y-12">
        <div className="space-y-5">
          <header className="pt-6 lg:pt-14 pb-6 lg:pb-12">
            <div className="container lg:grid lg:grid-cols-12 lg:gap-12">
              <div className="space-y-4 lg:col-start-2 lg:col-span-5 flex items-center justify-between ">
                <div className="space-y-5">
                  <h1 className="text-6xl font-bold tracking-wide">
                    The AI Platform for the Future
                  </h1>
                  <p className="text-gray-600 dark:text-gray-400">
                    Empower your business with AI-driven insights. Our platform
                    provides scalable solutions for data analysis, automation,
                    and predictive modeling.
                  </p>
                  <div className="space-y-4">
                    <button className="inline-block btn btn-lg btn-primary scale-90 py-3 w-40 text-center rounded bg-black text-white">
                      Explore AI
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center lg:col-start-8 lg:col-span-4 mt-10 lg:mt-0">
                <img
                  alt="Hero image"
                  className="rounded-3xl object-cover aspect-[4/3] w-full"
                  src="/home-image.webp"
                />
              </div>
            </div>
          </header>
          <section className="" id="explore-ai">
            <div className="container">
              <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
                <div className="flex flex-col items-center space-y-4 p-4">
                  <div className="flex items-center justify-center w-16 h-16 p-3 rounded-full bg-gray-100 dark:bg-gray-800">
                    <Bot className="w-10 h-10" />
                  </div>
                  <h3 className="text-lg font-semibold text-center">
                    AI ChatBot
                  </h3>
                  <button className="px-4 py-2 text-sm rounded bg-black text-white">
                    <Link to={"/ai-chatbot"}>Generate</Link>
                  </button>
                </div>
                <div className="flex flex-col items-center space-y-4">
                  <div className="flex items-center justify-center w-16 h-16 p-3 rounded-full bg-gray-100 dark:bg-gray-800">
                    <Image className="w-10 h-10" />
                  </div>
                  <h3 className="text-lg font-semibold text-center">
                    AI Image Generator
                  </h3>
                  <button className="px-4 py-2 text-sm rounded bg-black text-white">
                    <Link to={"/ai-image-generator"}>Generate</Link>
                  </button>
                </div>

                <div className="flex flex-col items-center space-y-4">
                  <div className="flex items-center justify-center w-16 h-16 p-3 rounded-full bg-gray-100 dark:bg-gray-800">
                    <ScrollText className="w-10 h-10" />
                  </div>
                  <h3 className="text-lg font-semibold text-center">
                    AI Text Summarization
                  </h3>
                  <button className="px-4 py-2 text-sm rounded bg-black text-white">
                    <Link to={"/ai-text-summarization"}>Generate</Link>
                  </button>
                </div>
              </div>
            </div>
          </section>

          <footer>
            <div className="border-t py-2">
              <div className="container text-center text-sm text-gray-500 dark:text-gray-400">
                © 2024 AI Multiverse. Designed and Developed by{" "}
                <span className=" text-blue-700">Sonu Sahu</span>.
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
