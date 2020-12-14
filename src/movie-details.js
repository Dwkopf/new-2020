import React from 'react';

const imgStyle = {
    height:'300px',
    width: '200px'
  }
  

const divStyle = {
    backgroundColor: 'lightblue',
    height: '700px',
    width: '500px',
    margin: '25px',
    padding: '5px',
    boxShadow: '4px 4px 12px #9A8B84',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
}

const MovieDetails = (props) => {
    const {currentMovie} = props;
    return (
      
        <div style={divStyle}>
           <p>{currentMovie.title}</p>
            
            <p>{currentMovie.director}</p>
            <p>{currentMovie.rating}</p>
            <p>{currentMovie.description}</p>
            <p>{currentMovie.categories.join(', ')}</p>
            <p><img style={imgStyle} alt={currentMovie.title} src={currentMovie.posterUrl}/></p>
        </div>
    )
  };

  export default MovieDetails