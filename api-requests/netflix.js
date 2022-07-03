const axios = require("axios");

// Request to obtain complete movie directory from IMDB (just to be made once, and then, you can just update daily)
// Each page contains 50 titles, run the query for pages 1-40 to obtain movies
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
  },
  headers: {
    "X-RapidAPI-Key": "9d76f64d58msh0d561ed2e3614d2p13751fjsn26330debcf14",
    "X-RapidAPI-Host": "ott-details.p.rapidapi.com",
  },
};

const getMovieDetailsFromIMDB = () => {
  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};

// getMovieDetailsFromIMDB();

/*
How will the movie entries be stored in the db
- imdb code
- title
- type
- genre [array]
- imdb rating
- release date
- synopsis
- image url

Total Genres
- Action, Adventure, Animation, Bibliography, Comedy, Crime, Documentary, Drama, Family, Fantasy, Game-show, History
- Horror, Music, Musical, Mystery, News, Reality-TN, Romance, Sci-fi, Short, Sport, Talk-Show, Thriller, War, Western 

*/
