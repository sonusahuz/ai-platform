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

export const shortLinkGenerator = async (url: string) => {
  const options = {
    method: "POST",
    url: "https://url-shortener42.p.rapidapi.com/shorten/",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "3eca7a546fmsh520b6309845ef5dp1dfcc7jsnac8bb8092ec5",
      "X-RapidAPI-Host": "url-shortener42.p.rapidapi.com",
    },
    data: {
      url: url,
      validity_duration: 5,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const currenyConverter = async (
  from: string,
  to: string,
  amount: string
) => {
  const options = {
    method: "GET",
    url: "https://currency-converter-pro1.p.rapidapi.com/convert",
    params: {
      from: from,
      to: to,
      amount: amount,
    },
    headers: {
      "X-RapidAPI-Key": "3eca7a546fmsh520b6309845ef5dp1dfcc7jsnac8bb8092ec5",
      "X-RapidAPI-Host": "currency-converter-pro1.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data.result;
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

export const countryData = [
  { code: "AED", id: "AE", currency: "United Arab Emirates Dirham" },
  { code: "AFN", id: "AF", currency: "Afghan Afghani" },
  { code: "ALL", id: "AL", currency: "Albanian Lek" },
  { code: "AMD", id: "AM", currency: "Armenian Dram" },
  { code: "ANG", id: "AN", currency: "Netherlands Antillean Guilder" },
  { code: "AOA", id: "AO", currency: "Angolan Kwanza" },
  { code: "ARS", id: "AR", currency: "Argentine Peso" },
  { code: "AUD", id: "AU", currency: "Australian Dollar" },
  { code: "AWG", id: "AW", currency: "Aruban Florin" },
  { code: "AZN", id: "AZ", currency: "Azerbaijani Manat" },
  { code: "BAM", id: "BA", currency: "Bosnia-Herzegovina Convertible Mark" },
  { code: "BBD", id: "BB", currency: "Barbadian Dollar" },
  { code: "BDT", id: "BD", currency: "Bangladeshi Taka" },
  { code: "BGN", id: "BG", currency: "Bulgarian Lev" },
  { code: "BHD", id: "BH", currency: "Bahraini Dinar" },
  { code: "BIF", id: "BI", currency: "Burundian Franc" },
  { code: "BMD", id: "BM", currency: "Bermudian Dollar" },
  { code: "BND", id: "BN", currency: "Brunei Dollar" },
  { code: "BOB", id: "BO", currency: "Bolivian Boliviano" },
  { code: "BRL", id: "BR", currency: "Brazilian Real" },
  { code: "BSD", id: "BS", currency: "Bahamian Dollar" },
  { code: "BTC", id: "BTC", currency: "Bitcoin" },
  { code: "BTN", id: "BT", currency: "Bhutanese Ngultrum" },
  { code: "BWP", id: "BW", currency: "Botswanan Pula" },
  { code: "BYN", id: "BY", currency: "Belarusian Ruble" },
  { code: "BZD", id: "BZ", currency: "Belize Dollar" },
  { code: "CAD", id: "CA", currency: "Canadian Dollar" },
  { code: "CDF", id: "CD", currency: "Congolese Franc" },
  { code: "CHF", id: "CH", currency: "Swiss Franc" },
  { code: "CLF", id: "CL", currency: "Chilean Unit of Account (UF)" },
  { code: "CLP", id: "CL", currency: "Chilean Peso" },
  { code: "CNH", id: "CN", currency: "Chinese Yuan (Offshore)" },
  { code: "CNY", id: "CN", currency: "Chinese Yuan" },
  { code: "COP", id: "CO", currency: "Colombian Peso" },
  { code: "CRC", id: "CR", currency: "Costa Rican Colón" },
  { code: "CUC", id: "CU", currency: "Cuban Convertible Peso" },
  { code: "CUP", id: "CU", currency: "Cuban Peso" },
  { code: "CVE", id: "CV", currency: "Cape Verdean Escudo" },
  { code: "CZK", id: "CZ", currency: "Czech Republic Koruna" },
  { code: "DJF", id: "DJ", currency: "Djiboutian Franc" },
  { code: "DKK", id: "DK", currency: "Danish Krone" },
  { code: "DOP", id: "DO", currency: "Dominican Peso" },
  { code: "DZD", id: "DZ", currency: "Algerian Dinar" },
  { code: "EGP", id: "EG", currency: "Egyptian Pound" },
  { code: "ERN", id: "ER", currency: "Eritrean Nakfa" },
  { code: "ETB", id: "ET", currency: "Ethiopian Birr" },
  { code: "EUR", id: "EU", currency: "Euro" },
  { code: "FJD", id: "FJ", currency: "Fijian Dollar" },
  { code: "FKP", id: "FK", currency: "Falkland Islands Pound" },
  { code: "GBP", id: "GB", currency: "British Pound Sterling" },
  { code: "GEL", id: "GE", currency: "Georgian Lari" },
  { code: "GGP", id: "GG", currency: "Guernsey Pound" },
  { code: "GHS", id: "GH", currency: "Ghanaian Cedi" },
  { code: "GIP", id: "GI", currency: "Gibraltar Pound" },
  { code: "GMD", id: "GM", currency: "Gambian Dalasi" },
  { code: "GNF", id: "GN", currency: "Guinean Franc" },
  { code: "GTQ", id: "GT", currency: "Guatemalan Quetzal" },
  { code: "GYD", id: "GY", currency: "Guyanaese Dollar" },
  { code: "HKD", id: "HK", currency: "Hong Kong Dollar" },
  { code: "HNL", id: "HN", currency: "Honduran Lempira" },
  { code: "HRK", id: "HR", currency: "Croatian Kuna" },
  { code: "HTG", id: "HT", currency: "Haitian Gourde" },
  { code: "HUF", id: "HU", currency: "Hungarian Forint" },
  { code: "IDR", id: "ID", currency: "Indonesian Rupiah" },
  { code: "ILS", id: "IL", currency: "Israeli New Sheqel" },
  { code: "IMP", id: "IM", currency: "Manx pound" },
  { code: "INR", id: "IN", currency: "Indian Rupee" },
  { code: "IQD", id: "IQ", currency: "Iraqi Dinar" },
  { code: "IRR", id: "IR", currency: "Iranian Rial" },
  { code: "ISK", id: "IS", currency: "Icelandic Króna" },
  { code: "JEP", id: "JE", currency: "Jersey Pound" },
  { code: "JMD", id: "JM", currency: "Jamaican Dollar" },
  { code: "JOD", id: "JO", currency: "Jordanian Dinar" },
  { code: "JPY", id: "JP", currency: "Japanese Yen" },
  { code: "KES", id: "KE", currency: "Kenyan Shilling" },
  { code: "KGS", id: "KG", currency: "Kyrgystani Som" },
  { code: "KHR", id: "KH", currency: "Cambodian Riel" },
  { code: "KMF", id: "KM", currency: "Comorian Franc" },
  { code: "KPW", id: "KP", currency: "North Korean Won" },
  { code: "KRW", id: "KR", currency: "South Korean Won" },
  { code: "KWD", id: "KW", currency: "Kuwaiti Dinar" },
  { code: "KYD", id: "KY", currency: "Cayman Islands Dollar" },
  { code: "KZT", id: "KZ", currency: "Kazakhstani Tenge" },
  { code: "LAK", id: "LA", currency: "Laotian Kip" },
  { code: "LBP", id: "LB", currency: "Lebanese Pound" },
  { code: "LKR", id: "LK", currency: "Sri Lankan Rupee" },
  { code: "LRD", id: "LR", currency: "Liberian Dollar" },
  { code: "LSL", id: "LS", currency: "Lesotho Loti" },
  { code: "LYD", id: "LY", currency: "Libyan Dinar" },
  { code: "MAD", id: "MA", currency: "Moroccan Dirham" },
  { code: "MDL", id: "MD", currency: "Moldovan Leu" },
  { code: "MGA", id: "MG", currency: "Malagasy Ariary" },
  { code: "MKD", id: "MK", currency: "Macedonian Denar" },
  { code: "MMK", id: "MM", currency: "Myanma Kyat" },
  { code: "MNT", id: "MN", currency: "Mongolian Tugrik" },
  { code: "MOP", id: "MO", currency: "Macanese Pataca" },
  { code: "MRU", id: "MR", currency: "Mauritanian Ouguiya" },
  { code: "MUR", id: "MU", currency: "Mauritian Rupee" },
  { code: "MVR", id: "MV", currency: "Maldivian Rufiyaa" },
  { code: "MWK", id: "MW", currency: "Malawian Kwacha" },
  { code: "MXN", id: "MX", currency: "Mexican Peso" },
  { code: "MYR", id: "MY", currency: "Malaysian Ringgit" },
  { code: "MZN", id: "MZ", currency: "Mozambican Metical" },
  { code: "NAD", id: "NA", currency: "Namibian Dollar" },
  { code: "NGN", id: "NG", currency: "Nigerian Naira" },
  { code: "NIO", id: "NI", currency: "Nicaraguan Córdoba" },
  { code: "NOK", id: "NO", currency: "Norwegian Krone" },
  { code: "NPR", id: "NP", currency: "Nepalese Rupee" },
  { code: "NZD", id: "NZ", currency: "New Zealand Dollar" },
  { code: "OMR", id: "OM", currency: "Omani Rial" },
  { code: "PAB", id: "PA", currency: "Panamanian Balboa" },
  { code: "PEN", id: "PE", currency: "Peruvian Nuevo Sol" },
  { code: "PGK", id: "PG", currency: "Papua New Guinean Kina" },
  { code: "PHP", id: "PH", currency: "Philippine Peso" },
  { code: "PKR", id: "PK", currency: "Pakistani Rupee" },
  { code: "PLN", id: "PL", currency: "Polish Zloty" },
  { code: "PYG", id: "PY", currency: "Paraguayan Guarani" },
  { code: "QAR", id: "QA", currency: "Qatari Rial" },
  { code: "RON", id: "RO", currency: "Romanian Leu" },
  { code: "RSD", id: "RS", currency: "Serbian Dinar" },
  { code: "RUB", id: "RU", currency: "Russian Ruble" },
  { code: "RWF", id: "RW", currency: "Rwandan Franc" },
  { code: "SAR", id: "SA", currency: "Saudi Riyal" },
  { code: "SBD", id: "SB", currency: "Solomon Islands Dollar" },
  { code: "SCR", id: "SC", currency: "Seychellois Rupee" },
  { code: "SDG", id: "SD", currency: "Sudanese Pound" },
  { code: "SEK", id: "SE", currency: "Swedish Krona" },
  { code: "SGD", id: "SG", currency: "Singapore Dollar" },
  { code: "SHP", id: "SH", currency: "Saint Helena Pound" },
  { code: "SLL", id: "SL", currency: "Sierra Leonean Leone" },
  { code: "SOS", id: "SO", currency: "Somali Shilling" },
  { code: "SRD", id: "SR", currency: "Surinamese Dollar" },
  { code: "SSP", id: "SS", currency: "South Sudanese Pound" },
  { code: "STD", id: "ST", currency: "São Tomé and Príncipe Dobra (pre-2018)" },
  { code: "STN", id: "ST", currency: "São Tomé and Príncipe Dobra" },
  { code: "SVC", id: "SV", currency: "Salvadoran Colón" },
  { code: "SYP", id: "SY", currency: "Syrian Pound" },
  { code: "SZL", id: "SZ", currency: "Swazi Lilangeni" },
  { code: "THB", id: "TH", currency: "Thai Baht" },
  { code: "TJS", id: "TJ", currency: "Tajikistani Somoni" },
  { code: "TMT", id: "TM", currency: "Turkmenistani Manat" },
  { code: "TND", id: "TN", currency: "Tunisian Dinar" },
  { code: "TOP", id: "TO", currency: "Tongan Pa'anga" },
  { code: "TRY", id: "TR", currency: "Turkish Lira" },
  { code: "TTD", id: "TT", currency: "Trinidad and Tobago Dollar" },
  { code: "TWD", id: "TW", currency: "New Taiwan Dollar" },
  { code: "TZS", id: "TZ", currency: "Tanzanian Shilling" },
  { code: "UAH", id: "UA", currency: "Ukrainian Hryvnia" },
  { code: "UGX", id: "UG", currency: "Ugandan Shilling" },
  { code: "USD", id: "US", currency: "United States Dollar" },
  { code: "UYU", id: "UY", currency: "Uruguayan Peso" },
  { code: "UZS", id: "UZ", currency: "Uzbekistan Som" },
  { code: "VEF", id: "VE", currency: "Venezuelan Bolívar Fuerte (Old)" },
  { code: "VES", id: "VE", currency: "Venezuelan Bolívar Soberano" },
  { code: "VND", id: "VN", currency: "Vietnamese Dong" },
  { code: "VUV", id: "VU", currency: "Vanuatu Vatu" },
  { code: "WST", id: "WS", currency: "Samoan Tala" },
  { code: "XAF", id: "CF", currency: "CFA Franc BEAC" },
  { code: "XAG", id: "XAG", currency: "Silver Ounce" },
  { code: "XAU", id: "XAU", currency: "Gold Ounce" },
  { code: "XCD", id: "EC", currency: "East Caribbean Dollar" },
  { code: "XDR", id: "XDR", currency: "Special Drawing Rights" },
  { code: "XOF", id: "XOF", currency: "CFA Franc BCEAO" },
  { code: "XPD", id: "XPD", currency: "Palladium Ounce" },
  { code: "XPF", id: "PF", currency: "CFP Franc" },
  { code: "XPT", id: "XPT", currency: "Platinum Ounce" },
  { code: "YER", id: "YE", currency: "Yemeni Rial" },
  { code: "ZAR", id: "ZA", currency: "South African Rand" },
  { code: "ZMW", id: "ZM", currency: "Zambian Kwacha" },
  { code: "ZWL", id: "ZW", currency: "Zimbabwean Dollar" },
];
