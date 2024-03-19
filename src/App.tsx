import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import ChatBot from "./components/ai-chatbot/ChatBox";
import ImageGenerator from "./components/ai-image-generate/ImageGenerator";
import TextSummarization from "./components/text-summarization/TextSummariztion";
import Translate from "./components/ai-translate/LanguageTranslate";
import InstagramPostDowloader from "./components/instagram-post-downloader/InstagramPostDowloader";
import YoutubeMp3Dowloader from "./components/youtube-audio-downloader/YoutubeAudioDownloader";
import RemoveBackground from "./components/remove-background/RemoveBackground";
import PasswordGenerator from "./components/password-generator/PasswordGenerator";
import ObjectsDetection from "./components/objects-detection/ObjectDetection";
import CartoonGenerator from "./components/ai-cartoon-generator/CartoonGenerator";
import YoutubeVideoDowloader from "./components/youtube-video-downloader/YoutubeVideoDownloader";
import TextToSpeech from "./components/text-to-speech/TextToSpeech";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<ChatBot />} path="/ai-chatbot" />
        <Route element={<ImageGenerator />} path="/ai-image-generator" />
        <Route element={<TextSummarization />} path="/ai-text-summarization" />
        <Route element={<Translate />} path="/ai-translate" />
        <Route element={<RemoveBackground />} path="/ai-remove-background" />
        <Route element={<PasswordGenerator />} path="/ai-password-generator" />
        <Route element={<ObjectsDetection />} path="/ai-object-detection" />
        <Route element={<CartoonGenerator />} path="/ai-cartoon-generator" />
        <Route element={<TextToSpeech />} path="/ai-text-to-speech" />

        <Route
          element={<YoutubeVideoDowloader />}
          path="/ai-youtube-video-downloader"
        />

        <Route
          element={<YoutubeMp3Dowloader />}
          path="/ai-youtube-mp3-downloader"
        />
        <Route
          element={<InstagramPostDowloader />}
          path="/ai-instagram-post-downloader"
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
