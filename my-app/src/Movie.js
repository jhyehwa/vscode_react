import React from 'react';
import PropTypes from 'prop-types';
import "./Movie.css";

function Movie({id, year, title, summary, poster, genres}) {
    return <div className="movie">
        <img src={poster} alt={title} title={title} />
    <div className="movie_data">
        <h3 className="movie_title">{title}</h3>
        <h5 className="movie_year">{year}</h5>
        <ul className="genres">
            {genres.map((element, index) => (
                <li key={index} className="genres_genre">{element}</li>
            ))}
        </ul>
        <p className="movie_summary">{summary}</p>
    </div>
    </div>
};

Movie.propTypes = {
    id : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired
}

export default Movie;