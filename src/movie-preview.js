import React from 'react';

const movieContainerStyles = {
    backgroundColor: '#F2EDEB',
    height: '350px',
    width: '250px',
    margin: '25px',
    padding: '5px',
    boxShadow: '4px 4px 12px #9A8B84',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
}


const imgStyle = {
  height:'150px',
  width: '100px'
}



const MoviePreview = (props) => {
    const {movie, onClickFunction} = props;
  
    return (
      <button key={movie.title} 
        style = {movieContainerStyles} 
        onClick={()=>{
            onClickFunction(movie)
            }}>
              <p style={{fontWeight:'bold'}}>{movie.title}</p>
              <p>{movie.rating}</p>
              <p>{movie.director}</p>
              <p><img alt={movie.title} src={movie.posterUrl}style={imgStyle}/></p>
            
          </button>
    )
  };

  export default MoviePreview;