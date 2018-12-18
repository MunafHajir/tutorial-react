import React from 'react';
import ReactDOM from 'react-dom';

// stateless functional component
// always return jsx
function Greeting() {
    return ( 
    <div> Hello React </div>
    );
}

ReactDOM.render( <Greeting /> , document.getElementById("root")
);