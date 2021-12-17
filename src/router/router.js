import { Route, Routes } from "react-router-dom";

import Bookmark from "../components/bookmark/bookmark";
import Homepage from "../components/homepage/homepage";
import MovieForm from "../components/movie-form/movieform";
import WatchLater from "../components/watchLater/watchLater";

const NavRoute = () => {
  return (
    <Routes>
      <Route exect path="/" element={<Homepage />} />
      <Route path="/watchLater" element={<WatchLater />} />
      <Route path="/bookmark" element={<Bookmark />} />
      <Route path="/addMovie" element={<MovieForm />} />
    </Routes>
  );
};

export default NavRoute;
