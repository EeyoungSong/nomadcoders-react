import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, coverImg, title, rating, genres, summary }) {
    return (<div>
            <img src={coverImg}/>
            <h2><Link to={`/movie/${id}`}>title: {title}</Link></h2>
            <h4>rating: {rating}</h4>
            <h4>genres: {genres}</h4>
            <p>{summary}</p>
            <hr/>
          </div>);
};

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number,
    genres: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
}

export default Movie;