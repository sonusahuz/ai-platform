import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import ChatBot from "./components/ai-chatbot/ChatBox";
import ImageGenerator from "./components/ai-image-generate/ImageGenerator";
import TextSummarization from "./components/ai-summarization/TextSummariztion";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<ChatBot />} path="/ai-chatbot" />
        <Route element={<ImageGenerator />} path="/ai-image-generator" />
        <Route element={<TextSummarization />} path="/ai-text-summarization" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
