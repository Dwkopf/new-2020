import React from 'react';

const Button = (props) => {
    const {buttonText,onClickFunction} = props;  // same as const buttonText = props.buttonText;
    
    return(
      <button onClick={onClickFunction}> {buttonText}</button>
    );
  };

  const someString = 'hello';

  export {Button};