import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// stateless functional component
// always return jsx
function People() {
    const friends = [
        {name:'Munaf' ,job: "Developer", age: "20", company: "apple"},
        {name:'Moin' ,job: "Developer", age: "20", company: "apple"},
        {name:'Sana' ,job: "Developer", age: "20", company: "apple"},

    ]

    return ( 
    <section> 
       <Person person = {friends[0]}>
            some info about me
       </Person>
       <Person person = {friends[1]}/>
       <Person person = {friends[2]}/>

    </section>
    );
}

const Person = props => {
        const {name,job,age,company} =props.person

      return(  <div>
             <h1>{name}</h1>
             <p>{job}</p>
             <p>{age}</p>
             <p>{company}</p>
             {props.children}
        </div>
);
}
ReactDOM.render( 
    <People />, document.getElementById("root")
);