const initialValue = [
  {
    key: 1,
    name: "Movie 1",
    description:
      "It is a 2021 Indian Hindi-language action film directed by Prabhu Deva",
    cast: "Salman Khan, Disha Patani",
    similarMovies: "Movie A, Moviee B",
    genre: "Thriller",
    language: "Hindi",
    watchLater: false,
    bookmark: false,
  },
  {
    key: 2,
    name: "Movie 2",
    description:
      "It is a 2021 Indian Hindi-language action film directed by Prabhu Deva",
    cast: "Salman Khan, Disha Patani",
    similarMovies: "Movie A, Moviee B",
    genre: "Action",
    language: "English",
    watchLater: false,
    bookmark: false,
  },
];

function movieReducer(currentValue = initialValue, action) {
  switch (action.type) {
    case "BOOKMARK_MOVIE":
      return currentValue.map((movie) => {
        if (movie.key === action.id) {
          movie.bookmark = !movie.bookmark;
        }
        return movie;
      });
    case "WATCH_LATER":
      return currentValue.map((movie) => {
        if (movie.key === action.id) {
          movie.watchLater = !movie.watchLater;
        }
        return movie;
      });
    case "ADD_MOVIES":
      return [
        ...currentValue,
        {
          key: currentValue.length + 1,
          ...action.movie,
          bookmark: false,
          watchLater: false,
        },
      ];
    default:
      return currentValue;
  }
}

export default movieReducer;
