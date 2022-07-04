const api_key = process.env.API_KEY;
console.log(api_key);
const options = {
  method: "GET",
  url: "https://ott-details.p.rapidapi.com/advancedsearch",
  params: {
    start_year: "1970",
    end_year: "2022",
    min_imdb: "2.0",
    max_imdb: "10.0",
    genre:
      "action, adventure, animation, bibliography, comedy, crime, documentary, drama, family, fantasy, game-show, history, horror, music, musical, mystery, news, reality-TN, romance, sci-fi, short, sport, talk-Show, thriller, war, western",
    language: "english",
    type: "movie",
    sort: "highestrated",
    page: "13",
  },
  headers: {
    "X-RapidAPI-Key": `${api_key}`,
    "X-RapidAPI-Host": "ott-details.p.rapidapi.com",
  },
};

module.exports = options;
