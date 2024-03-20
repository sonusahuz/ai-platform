import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import ChatBot from "./components/chatbot/ChatBox";
import ImageGenerator from "./components/image-generator/ImageGenerator";
import TextSummarization from "./components/text-summarization/TextSummariztion";
import Translate from "./components/google-translate/LanguageTranslate";
import InstagramPostDowloader from "./components/instagram-post-downloader/InstagramPostDowloader";
import YoutubeMp3Dowloader from "./components/youtube-audio-downloader/YoutubeAudioDownloader";
import RemoveBackground from "./components/remove-background/RemoveBackground";
import PasswordGenerator from "./components/password-generator/PasswordGenerator";
import ObjectsDetection from "./components/objects-detection/ObjectDetection";
import CartoonGenerator from "./components/cartoon-generator/CartoonGenerator";
import YoutubeVideoDowloader from "./components/youtube-video-downloader/YoutubeVideoDownloader";
import ShortLinkGenerator from "./components/short-link-generator/ShortLinkGenerator";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<ChatBot />} path="/chatbot" />
        <Route element={<ImageGenerator />} path="/image-generator" />
        <Route element={<TextSummarization />} path="/text-summarization" />
        <Route element={<Translate />} path="/translate" />
        <Route element={<RemoveBackground />} path="/remove-background" />
        <Route element={<PasswordGenerator />} path="/password-generator" />
        <Route element={<ObjectsDetection />} path="/object-detection" />
        <Route element={<CartoonGenerator />} path="/cartoon-generator" />
        <Route element={<ShortLinkGenerator />} path="/short-link-generator" />

        <Route
          element={<YoutubeVideoDowloader />}
          path="/youtube-video-downloader"
        />

        <Route
          element={<YoutubeMp3Dowloader />}
          path="/youtube-mp3-downloader"
        />
        <Route
          element={<InstagramPostDowloader />}
          path="/instagram-post-downloader"
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
