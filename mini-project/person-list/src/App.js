import React, { Component } from 'react';
import './App.css';

const App = () =>  <PersonList/>;


const PersonList = () => {
  const people = [
    {
      img: 22, name: "John", job : "Developer"
    },
    {
      img: 65, name: "David", job: "Designer"
    },
    {
      img: 70, name: "Steve", job: "Manager"
    }
  ]

  return (
    <div>
      <Person data = {people[0]}></Person>
      <Person data = {people[1]}></Person>
      <Person data = {people[2]}></Person>
    </div>
  );
}


const Person = props => {

 

  const {img,name,job} = props.data;

  const url= `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  
  return (
    <div className = "person" >
      <img src = {url} alt= "image" />
      <div>
          <h4>{name}</h4>
          <h4>{job}</h4>
      </div>
    </div>
  );
}

export default App;
