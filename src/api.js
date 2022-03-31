// newsapi.org
const NEWS_API_KEY = "2b438d39edca676c3416e984b225a7ef";

export const getNews = () =>
  fetch(`https://dapi.kakao.com/v2/search/blog?query=분리배출`, {
    headers: {
      Authorization: `KakaoAK ${NEWS_API_KEY}`,
    },
  }).then((res) => res.json());
