import Sliding from "../Helper/Sliding";
import { useSelector } from "react-redux";
import { selectTrending } from "../../store/movie-slice";

const Trending = () => {
  const movies = useSelector(selectTrending);
  return <Sliding movies={movies} title={"Trending"} />;
};

export default Trending;
