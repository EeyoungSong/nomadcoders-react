import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";

function Detail() {
    const {id} = useParams();
    const [movie, setMovie] = useState();
    const getMovie = async () => {
        console.log(id);
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json(); 
        console.log(json);
        setMovie(json.data.movie);
        console.log(movie?.title);
        
    }
    useEffect(() => {
        getMovie();
    }, [])
    return (
        <div className={styles.Detail}>
            <h1>{movie?.title}</h1>
            <img className={styles.Detail__image} src={movie?.large_cover_image}></img>
            <h4>rating : {movie?.rating}</h4>
            <h4>runing time : {movie?.runtime}</h4>
            <h4>year : {movie?.year}</h4>
            <h4>language : {movie?.language}</h4>
            <p>{movie?.description_full}</p>
        </div>
    
    );
}

export default Detail;