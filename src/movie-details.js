import React from 'react';

const MovieDetails = (props) => {
    const {currentMovie} = props;
    return (
      
        <div>
           <p>{currentMovie.title}</p>
            
            <p>{currentMovie.director}</p>
            <p>{currentMovie.rating}</p>
            <p>{currentMovie.description}</p>
            <p>{currentMovie.categories.join(', ')}</p>
            <p><img alt={currentMovie.title} src={currentMovie.posterUrl}/></p>
        </div>
    )
  };

  export default MovieDetails