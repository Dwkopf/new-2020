import React from 'react';

const Paragraph = (props) => {
    //const text = props.text;    // 2 lines same result
    const {text} = props;
    return (<div>
        <p>hi</p>
        <p style={{color:'blue'}}>{text}</p>
      </div>);
  };


  export default Paragraph;