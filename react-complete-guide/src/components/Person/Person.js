import React, { Component } from 'react';
import './Person.css'
import Radium from 'radium'



const person = (props) => {
    const style = {
        visibility: 'hidden'
    }
    return (
        <div className='Person'><p>{props.children}</p>
            <p onClick={props.delete}>I'm {props.name} and I'm {props.age} years old</p>
            <input type='text' onChange={props.change} value={props.name}></input>
        </div>)
}

export default Radium(person)