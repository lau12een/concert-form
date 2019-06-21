import React, { Component } from 'react';
import MyContext from './MyContext';







export default class AddConcert extends Component {
  static contextType = MyContext 

  onSubmit(event) {
    event.preventDefault();
      const name = this.input.name;
      const location = this.input.location;
      const date = this.input.date;
      console.log(name, location, date);
    this.props.saveConcertForm(name, location, date);
      
      //changes made below // 
    this.context.addConcert({
        name: name.value,
        location: location.value,
        date: date.value,
    })
      name.value = ''
      location.value = ''
      date.value = ''
  }
      // end of changes //


  render() {
    const {} = this.props
    return (
        <form onSubmit={e => this.onSubmit(e)}>
              <section className='Concert'>
                <h2>Create a note</h2>
                  <div className='field'>
                    <label htmlFor='concert-name-input'>
                      Name
                    </label>
                    <input type='text' id='concert-name-input'  ref={name => (this.input = name)} />
                  </div>
                  <div className='field'>
                    <label htmlFor='concert-location-input'>
                      Location
                    </label>
                    <textarea id='concert-location-input'  ref={location => (this.input = location)} />
                  </div>
                  <div className='field'>
                    <label htmlFor='concert-date-input'>
                      Date
                    </label>
                      <textarea id='concert-location-input'  ref={date => (this.input = date)}/>
                  </div>


                  <div className='buttons'>
                    <button type='submit'>
                      Add Concert
                    </button>
                  </div>
              </section>
        </form>
    )
  }
}
