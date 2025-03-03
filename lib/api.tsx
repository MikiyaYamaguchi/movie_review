import axios from "axios";

//映画ジャンル取得API
export const getMovieGenre = async () => {
  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/genre/movie/list",
      {
        params: {
          api_key: process.env.NEXT_PUBLIC_API_KEY,
          language: "ja",
        },
      }
    );
    return response.data.genres;
  } catch (err) {
    console.error("ジャンルの取得に失敗しました", err);
    throw new Error("ジャンルの取得に失敗しました");
  }
};

//映画タイトルに基づいて映画情報を取得するAPI
export const getMovieByTitle = async (title: string) => {
  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/search/movie",
      {
        params: {
          api_key: process.env.NEXT_PUBLIC_API_KEY,
          query: title,
          language: "ja",
        },
      }
    );

    if (response.data.results.length <= 0) {
      throw new Error("映画が見つかりませんでした");
    } else {
      return response.data.results;
    }
  } catch (err) {
    console.error("TMDb APIエラー:", err);
    return [];
  }
};
