import React from 'react';
import {movies} from "./movies";
import Paragraph from "./paragraph";  // default export don't need curly braces
import {Button} from "./button";




function App() {

  const [count, setCount] =React.useState(0);

  return (
    <div>
      <p>{count}</p>
      <Button
          buttonText ={'increment'}
          onClickFunction={()=>setCount(count+1)}
        />
        <Button 
          buttonText = {'decrement'}
          onClickFunction={()=>setCount(count-1)}
          />
          <Button
            buttonText={'reset count'}
            onClickFunction={()=>setCount(0)}
            />
    </div>
  );
}

export default App;
