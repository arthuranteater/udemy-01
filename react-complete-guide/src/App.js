import React, { Component } from 'react';
import styles from './app.module.css';
//import Radium, { StyleRoot } from 'radium'
import Person from './components/Person/Person'


class App extends Component {
  state = {
    persons: [
      { name: 'Hunt', age: 31 },
      { name: 'Jimmy', age: 33 },
      { name: 'Mike', age: 60 }
    ],
    showPersons: false,
    count: 0
  }

  handleClick = () => {
    const { persons } = this.state
    this.setState({
      persons: [
        ...persons,
        persons[0].name = 'Julio',
        persons[0].age = '45'
      ]
    })
  }

  changeName = event => {
    console.log(this.state)
    const i = event.target.parentElement.firstChild.innerHTML
    const person = { ...this.state.persons[i] }
    person.name = event.target.value
    const persons = [...this.state.persons]
    persons[i] = person
    this.setState({
      persons: persons
    })
  }


  deleteName = (index) => {
    const list = [...this.state.persons]
    list.splice(index, 1)
    this.setState(prevState => ({
      ...prevState,
      persons: list
    }))

  }

  toggleShow = () => {
    this.setState(prevState => ({
      showPersons: !prevState.showPersons
    }))
  }

  render() {
    const { persons, showPersons } = this.state
    console.log('rerendering', showPersons)
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      // ':hover': {
      //   backgroundColor: 'lightgreen',
      //   color: 'black'
      // }
    }

    // let classes = ['red', 'bold'].join(' ')


    let classes = []

    if (persons.length < 3) {
      classes.push(styles.red)
    }

    if (persons.length <= 1) {
      classes.push(styles.bold)
    }

    return (
      // <StyleRoot>
      <div className={styles.App}>
        <h1>I'm a React App</h1>
        <p className={classes.join(' ')}>this is tworking</p>
        <button onClick={this.toggleShow}>Show Names</button>
        <div>{showPersons ? (style.backgroundColor = 'red', persons.map((person, index) => <Person key={index} change={this.changeName} delete={() => this.deleteName(index)} name={person.name} age={person.age}>{index}</Person>)) : ''}</div>
      </div>

    );
  }
}


export default App


//Radium In-line

// style[':hover'] = {
//   backgroundColor: 'salmon',
//   color: 'black'
// }



// Hooks example

// const app = props => {
//   const [personsState, setPersonsState] = useState({
//     persons: [
//       { name: 'Hunt', age: 31 },
//       { name: 'Jimmy', age: 33 },
//       { name: 'Mike', age: 60 }
//     ],
//     otherState: 'no change'
//   })

//   const [other, setOtherState] = useState(personsState.otherState)

//   console.log(personsState, other)

//   const handleClick = () => {
//     console.log('Was clicked')
//     setPersonsState({
//       persons: [
//         ...personsState.persons,
//         personsState.persons[0].name = 'Julio',
//         personsState.persons[0].age = '45'
  //     ]
  //   })
  // }
