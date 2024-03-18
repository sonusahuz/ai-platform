import axios from "axios";
export interface QuestionType {
  id: string;
  text: string;
}
export interface Chat {
  id: string;
  question: string;
  answer: string;
}

export const chatBot = async (question: string) => {
  try {
    const response = await axios.request({
      method: "POST",
      url: "https://openai-api-gpt-3-5-turbo.p.rapidapi.com/api/v1/chat/completions",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "cba052b53dmsh2b037f8a5045067p14689cjsn35a355f36249",
        "X-RapidAPI-Host": "openai-api-gpt-3-5-turbo.p.rapidapi.com",
      },
      data: {
        model: "openchat-3.5",
        messages: [
          {
            role: "assistant",
            content: "You are helpful Assistant at PK AI.",
          },
          {
            role: "user",
            content: question,
          },
        ],
        temperature: 1,
        top_p: 1,
        max_tokens: 600,
        use_cache: false,
        stream: false,
      },
    });
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error(error);
  }
};

export const generateImage = async (text: string, url: string) => {
  try {
    const response = await axios.request({
      method: "POST",
      url: `https://open-ai21.p.rapidapi.com/${url}`,
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "3eca7a546fmsh520b6309845ef5dp1dfcc7jsnac8bb8092ec5",
        "X-RapidAPI-Host": "open-ai21.p.rapidapi.com",
      },
      data: { text: text, size: "512x512" },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const translate = async (from: string, to: string, text: string) => {
  const encodedParams = new URLSearchParams();
  encodedParams.set("from", from);
  encodedParams.set("to", to);
  encodedParams.set("text", text);

  const options = {
    method: "POST",
    url: "https://google-translate113.p.rapidapi.com/api/v1/translator/text",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": "cba052b53dmsh2b037f8a5045067p14689cjsn35a355f36249",
      "X-RapidAPI-Host": "google-translate113.p.rapidapi.com",
    },
    data: encodedParams,
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    return null; // Handle error appropriately
  }
};

export const instagramDownloader = async (url: string) => {
  const options = {
    method: "GET",
    url: "https://instagram-post-reels-stories-downloader.p.rapidapi.com/instagram/",
    params: {
      url: url,
    },
    headers: {
      "X-RapidAPI-Key": "3eca7a546fmsh520b6309845ef5dp1dfcc7jsnac8bb8092ec5",
      "X-RapidAPI-Host":
        "instagram-post-reels-stories-downloader.p.rapidapi.com",
    },
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const youtubeDownloader = async (url: string) => {
  const options = {
    method: "GET",
    url: "https://youtube-mp3-downloader2.p.rapidapi.com/ytmp3/ytmp3/",
    params: {
      url: url,
    },
    headers: {
      "X-RapidAPI-Key": "cba052b53dmsh2b037f8a5045067p14689cjsn35a355f36249",
      "X-RapidAPI-Host": "youtube-mp3-downloader2.p.rapidapi.com",
    },
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const removeBackground = async (image: any, bg_image: string) => {
  const data = new FormData();
  data.append("image", image);
  data.append("bg_image", bg_image);
  data.append("bg_blur", "0");
  data.append("format", "PNG");

  const options = {
    method: "POST",
    url: "https://picsart-remove-background2.p.rapidapi.com/removebg",
    headers: {
      "X-RapidAPI-Key": "cba052b53dmsh2b037f8a5045067p14689cjsn35a355f36249",
      "X-RapidAPI-Host": "picsart-remove-background2.p.rapidapi.com",
    },
    data: data,
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
export const passwordGenerator = async (length: string) => {
  const options = {
    method: "GET",
    url: "https://password-generator-by-api-ninjas.p.rapidapi.com/v1/passwordgenerator",
    params: {
      length: length,
      exclude_numbers: "true",
      exclude_special_chars: "true",
    },
    headers: {
      "X-RapidAPI-Key": "3eca7a546fmsh520b6309845ef5dp1dfcc7jsnac8bb8092ec5",
      "X-RapidAPI-Host": "password-generator-by-api-ninjas.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const objectDetection = async (image: File) => {
  const data = new FormData();
  data.append("image", image);
  const options = {
    method: "POST",
    url: "https://objects-detection.p.rapidapi.com/objects-detection",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": "3eca7a546fmsh520b6309845ef5dp1dfcc7jsnac8bb8092ec5",
      "X-RapidAPI-Host": "objects-detection.p.rapidapi.com",
    },
    data: data,
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const cartoonGenerator = async (image: File, type: string) => {
  const data = new FormData();
  data.append("image", image);
  data.append("type", type);

  const options = {
    method: "POST",
    url: "https://cartoon-yourself.p.rapidapi.com/facebody/api/portrait-animation/portrait-animation",
    headers: {
      "X-RapidAPI-Key": "3eca7a546fmsh520b6309845ef5dp1dfcc7jsnac8bb8092ec5",
      "X-RapidAPI-Host": "cartoon-yourself.p.rapidapi.com",
    },
    data: data,
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const youtubeVideoDownloader = async (videoId: string) => {
  const options = {
    method: "GET",
    url: "https://ytstream-download-youtube-videos.p.rapidapi.com/dl",
    params: { id: videoId },
    headers: {
      "X-RapidAPI-Key": "3eca7a546fmsh520b6309845ef5dp1dfcc7jsnac8bb8092ec5",
      "X-RapidAPI-Host": "ytstream-download-youtube-videos.p.rapidapi.com",
    },
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const speakLanguages = [
  { name: "Afrikaans", code: "af" },
  { name: "Albanian", code: "sq" },
  { name: "Amharic", code: "am" },
  { name: "Arabic", code: "ar" },
  { name: "Armenian", code: "hy" },
  { name: "Azerbaijani", code: "az" },
  { name: "Basque", code: "eu" },
  { name: "Belarusian", code: "be" },
  { name: "Bengali", code: "bn" },
  { name: "Bosnian", code: "bs" },
  { name: "Bulgarian", code: "bg" },
  { name: "Catalan", code: "ca" },
  { name: "Cebuano", code: "ceb" },
  { name: "Chinese (Simplified)", code: "zh-CN" },
  { name: "Chinese (Traditional)", code: "zh-TW" },
  { name: "Corsican", code: "co" },
  { name: "Croatian", code: "hr" },
  { name: "Czech", code: "cs" },
  { name: "Danish", code: "da" },
  { name: "Dutch", code: "nl" },
  { name: "English", code: "en" },
  { name: "Esperanto", code: "eo" },
  { name: "Estonian", code: "et" },
  { name: "Finnish", code: "fi" },
  { name: "French", code: "fr" },
  { name: "Frisian", code: "fy" },
  { name: "Galician", code: "gl" },
  { name: "Georgian", code: "ka" },
  { name: "German", code: "de" },
  { name: "Greek", code: "el" },
  { name: "Gujarati", code: "gu" },
  { name: "Haitian Creole", code: "ht" },
  { name: "Hausa", code: "ha" },
  { name: "Hawaiian", code: "haw" },
  { name: "Hebrew", code: "iw" },
  { name: "Hindi", code: "hi" },
  { name: "Hmong", code: "hmn" },
  { name: "Hungarian", code: "hu" },
  { name: "Icelandic", code: "is" },
  { name: "Igbo", code: "ig" },
  { name: "Indonesian", code: "id" },
  { name: "Irish", code: "ga" },
  { name: "Italian", code: "it" },
  { name: "Japanese", code: "ja" },
  { name: "Javanese", code: "jw" },
  { name: "Kannada", code: "kn" },
  { name: "Kazakh", code: "kk" },
  { name: "Khmer", code: "km" },
  { name: "Kinyarwanda", code: "rw" },
  { name: "Korean", code: "ko" },
  { name: "Kurdish", code: "ku" },
  { name: "Kyrgyz", code: "ky" },
  { name: "Lao", code: "lo" },
  { name: "Latin", code: "la" },
  { name: "Latvian", code: "lv" },
  { name: "Lithuanian", code: "lt" },
  { name: "Luxembourgish", code: "lb" },
  { name: "Macedonian", code: "mk" },
  { name: "Malagasy", code: "mg" },
  { name: "Malay", code: "ms" },
  { name: "Malayalam", code: "ml" },
  { name: "Maltese", code: "mt" },
  { name: "Maori", code: "mi" },
  { name: "Marathi", code: "mr" },
  { name: "Mongolian", code: "mn" },
  { name: "Myanmar (Burmese)", code: "my" },
  { name: "Nepali", code: "ne" },
  { name: "Norwegian", code: "no" },
  { name: "Nyanja (Chichewa)", code: "ny" },
  { name: "Pashto", code: "ps" },
  { name: "Persian", code: "fa" },
  { name: "Polish", code: "pl" },
  { name: "Portuguese (Portugal, Brazil)", code: "pt" },
  { name: "Punjabi", code: "pa" },
  { name: "Romanian", code: "ro" },
  { name: "Russian", code: "ru" },
  { name: "Samoan", code: "sm" },
  { name: "Scots Gaelic", code: "gd" },
  { name: "Serbian", code: "sr" },
  { name: "Sesotho", code: "st" },
  { name: "Shona", code: "sn" },
  { name: "Sindhi", code: "sd" },
  { name: "Sinhala (Sinhalese)", code: "si" },
  { name: "Slovak", code: "sk" },
  { name: "Slovenian", code: "sl" },
  { name: "Somali", code: "so" },
  { name: "Spanish", code: "es" },
  { name: "Sundanese", code: "su" },
  { name: "Swahili", code: "sw" },
  { name: "Swedish", code: "sv" },
  { name: "Tagalog (Filipino)", code: "tl" },
  { name: "Tajik", code: "tg" },
];

export const cartoonType = [
  {
    id: "1",
    type: "3d_cartoon",
  },
  {
    id: "2",
    type: "pixar",
  },
  {
    id: "3",
    type: "avatar",
  },
  {
    id: "4",
    type: "angel",
  },
  {
    id: "5",
    type: "demon",
  },
  {
    id: "6",
    type: "ukiyoe_cartoon",
  },
  {
    id: "7",
    type: "bopu_cartoon",
  },
  {
    id: "8",
    type: "famous",
  },
  {
    id: "9",
    type: "amcartoon",
  },
  {
    id: "10",
    type: "jpcartoon",
  },
];
