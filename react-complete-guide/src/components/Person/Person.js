import React, { Component } from 'react';
import styles from './Person.module.css'
import Radium from 'radium'



const person = (props) => {
    const style = {
        visibility: 'hidden'

    }
    // const style2 = {
    //     '@media (min-width: 500px)': {
    //         width: '450px'
    //     }
    // }
    return (
        <div className={styles.Person}><p>{props.children} </p>
            <p onClick={props.delete}>I'm {props.name} and I'm {props.age} years old</p>
            <input type='text' onChange={props.change} value={props.name}></input>
        </div>)
}

export default Radium(person)