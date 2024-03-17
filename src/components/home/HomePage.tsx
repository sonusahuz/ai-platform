import {
  Bot,
  Download,
  Image,
  Languages,
  ScrollText,
  Volume2,
  Youtube,
} from "lucide-react";
import { Link } from "react-router-dom";

const AIServices = [
  {
    id: "1",
    name: "AI ChatBot",
    icon: <Bot className="w-20 h-20" />,
    path: "/ai-chatbot",
  },
  {
    id: "2",
    name: "AI Image Generator",
    icon: <Image className="w-20 h-20" />,
    path: "/ai-image-generator",
  },

  {
    id: "3",
    name: "AI Language Translator",
    icon: <Languages className="w-20 h-20" />,
    path: "/ai-translate",
  },
  {
    id: "4",
    name: "Instagram Post Downloader",
    icon: <Download className="w-20 h-20" />,
    path: "/ai-instagram-post-downloader",
  },
  {
    id: "5",
    name: "AI Text Summarization",
    icon: <ScrollText className="w-20 h-20" />,
    path: "/ai-text-summarization",
  },
  {
    id: "6",
    name: "Youtube Mp4 to Mp3 Converter",
    icon: <Youtube className="w-20 h-20" />,
    path: "/ai-youtube-mp3-downloader",
  },
];

export default function Component() {
  return (
    <div className="bg-gray-50 dark:bg-gray-950 px-4 mt-10 lg:mt-0">
      <div className="space-y-12">
        <div className="space-y-5">
          <header className="pt-6 lg:pt-14 pb-6 lg:pb-12 flex items-center justify-center">
            <div className="container lg:grid lg:grid-cols-12 lg:gap-12">
              <div className="space-y-4  text-center lg:text-left mx-auto lg:col-start-2 lg:col-span-5 flex items-center justify-between ">
                <div className="space-y-5">
                  <h1 className="text-7xl font-bold tracking-wide">
                    The AI Platform for the Future
                  </h1>
                  <p className="text-gray-600 dark:text-gray-400">
                    Empower your business with AI-driven insights. Our platform
                    provides scalable solutions for data analysis, automation,
                    and predictive modeling.
                  </p>
                  <div className="space-y-4">
                    <button className="py-3 w-40 rounded bg-black text-white">
                      <a href="#services"> Explore AI</a>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center lg:col-start-8 lg:col-span-4 mt-10 lg:mt-0">
                <img
                  alt="Hero image"
                  className="rounded object-cover aspect-[4/3] w-full"
                  src="/home-image.webp"
                />
              </div>
            </div>
          </header>
          <section id="services" className="pt-5 lg:pt-0">
            <div className="container lg:px-36">
              <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
                {AIServices.map((service) => (
                  <div
                    key={service.id}
                    className="flex flex-col items-center space-y-4 p-4 border-2 rounded shadow-lg"
                  >
                    <div className="flex items-center justify-center w-20 h-20 p-3 rounded-full bg-gray-100 dark:bg-gray-800">
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-center">
                      {service.name}
                    </h3>
                    <button className="px-4 py-2 text-sm rounded bg-black text-white">
                      <Link to={service.path}>Generate</Link>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <footer className="mb-4">
            <div className="border-t py-2">
              <div className="container text-center text-sm text-gray-500 dark:text-gray-400">
                Designed and Developed by{" "}
                <a
                  className=" text-blue-700"
                  href="https://sonusahu.vercel.app"
                >
                  Sonu Sahu.
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
