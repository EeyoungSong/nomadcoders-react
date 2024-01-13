import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, coverImg, title, year, summary }) {
    return (<div className={styles.movie}>
            <div>
                <img className={styles.movie__img} src={coverImg}/>
            </div>
            <div>
                <p className={styles.movie__title}><Link to={`/movie/${id}`}>{title}</Link></p>
                <p className={styles.movie__genres}>{year}</p>
                <p>{summary.length > 300 ? `${summary.slice(0, 300)}` : summary}</p>
            </div>
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