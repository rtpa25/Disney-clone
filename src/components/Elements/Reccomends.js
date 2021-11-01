import Sliding from "../Helper/Sliding";
import { useSelector } from "react-redux";
import { selectRecommend } from "../../store/movie-slice";

const Reccomends = () => {
  const movies = useSelector(selectRecommend);
  return <Sliding movies={movies} title="Recommended for you" />;
};

export default Reccomends;
