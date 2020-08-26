/* Movies를 렌더링 하기위한 js파일 */
import React from "react";
import PropTypes from "prop-types";

 function Movie({id, year, title, summary, poster, genres}){
     return (
         //class로 사용하면 콘솔에 에러를 찍는다 className으로 사용하자
     <div className="movie">
         <img src={poster} alt={title} title={title}/>
         <div className="movie_data">
             <h3 className="movie_title">{title}</h3>
             <p className="movie_summary">{summary}</p>
             <h5 className="movie_year">{year}</h5>
             <ul className="genres">
                 {genres.map((genre, index) => (
                 <li key={index} className="genres_genre">{genre}</li>))}
             </ul>
         </div>
     </div>
     )
 }

 Movie.propTypes = {
     id: PropTypes.number.isRequired,
     title: PropTypes.string.isRequired, 
     year: PropTypes.number.isRequired,
     summary: PropTypes.string.isRequired,
     poster: PropTypes.string.isRequired,
     genres: PropTypes.arrayOf(PropTypes.string).isRequired
 }
 export default Movie;