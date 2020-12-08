import React from 'react';
import {movies} from './movies';
import Paragraph from "./paragraph";  // default export don't need curly braces
import {Button} from "./button";




function App() {
  const [currentMovie, setCurrentMovie] = React.useState(null);
  console.log(currentMovie)

  return (
    <div>
      <h1>movie info</h1>
      {movies.map((movie)=>{
        return (
          <button key={movie.title}  onClick={()=>{setCurrentMovie(movie)}}>
            <p>{movie.title}</p>
            <p><img style={{width:'200px',height:'300px'}} src={movie.posterUrl}/></p>
            
        </button>)
      })}
    {currentMovie  ?
      <div>
         <p>{currentMovie.title}</p>
          <p><img style={{width:'200px',height:'300px'}} src={currentMovie.posterUrl}/></p>
          <p>{currentMovie.director}</p>
          <p>{currentMovie.rating}</p>
          <p>{currentMovie.description}</p>
          <p>{currentMovie.categories.join(', ')}</p>
      </div>
    :
    <p>No movie selected</p>}
    </div>
  );
}

export default App;
