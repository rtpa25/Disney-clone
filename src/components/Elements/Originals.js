import Sliding from "../Helper/Sliding";
import { useSelector } from "react-redux";
import { selectOriginal } from "../../store/movie-slice";

const Original = () => {
  const movies = useSelector(selectOriginal);
  return <Sliding movies={movies} title="Disney Originals" />;
};

export default Original;
