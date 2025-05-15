export const BASE_URL = "https://dataphone.cloud.com";
export const colors = [
  "#ffb32d",
  "#070222",
  "#1a0bb4",
  "#d8eb29",
  "#aa3dcb",
  "#29eb9d",
  "#aab850",
  "#FF7F75",
  "#06373A",
  "#D62828",
  "#B64074",
  "#429EBD",
  "#EA4A6B",
  "#05668D",
  "#213502",
  "#841E62",
  "#88304E",
  "#BDE12D",
  "#FFE720",
  "#C73618",
  "#2B2F6C",
  "#DE978F",
  "#7B716A",
  "#00F7FF",
  "#8E9C57",
];
export const getMaxValue = () => {
  return window.innerWidth >= 1400 ? 10 :
         window.innerWidth >= 1200 ? 9 :
         window.innerWidth >= 992 ? 8 :
         window.innerWidth >= 768 ? 7 :
         window.innerWidth >= 576 ? 5 : 3;
};
