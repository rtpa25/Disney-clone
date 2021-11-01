import Sliding from "../Helper/Sliding";
import { useSelector } from "react-redux";
import { selectNewDisney } from "../../store/movie-slice";

const NewDisney = () => {
  const movies = useSelector(selectNewDisney);
  return <Sliding movies={movies} title="New To Disney+" />;
};

export default NewDisney;
