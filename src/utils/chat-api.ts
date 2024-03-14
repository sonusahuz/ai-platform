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

export const chatMessage = async (question: string) => {
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
        max_tokens: -1,
        use_cache: false,
        stream: false,
      },
    });

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error(error);
  }
};
