import React, {Component} from 'react';
import './App.css';
import AddConcert from './AddConcert.js';
import MyContext from './MyContext.js';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          location: '',
          date: ''
        }
      }
    
    addConcert = (name, location, date) => {
        this.setState({
          name: [this.state.name, name],
          location: [this.state.location, location],
          date: [this.state.date, date],
        });
    }

    saveConcertForm(name, location, date) {
        console.log (name, location, date);
        this.setState({
          name, location, date
        });
    }

    render(){
        return (
        // changes made below //
        <MyContext.Provider
            value={{
                name: this.state.name,
                location: this.state.location,
                date: this.state.date,
                addConcert: this.addConcert,
            }}
        >
            // end of changes //
            
            <div className='concert'>
                 <AddConcert saveConcertForm={(name, location, date) => this.saveConcertForm(name, location, date)} />
            </div>
       </MyContext.Provider>
        );
      }
    }

