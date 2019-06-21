import React from 'react';


export default class ConcertForm extends React.Component {
    state= {
        name: '',
        location: '',
        date: '',
    };

    change = (e) => {
        e.preventDefault();
        const name = this.input.name;
        const location = this.input.location;
        const date = this.input.date;
        this.setState({
            name,location,date
        });
    };

    render () {
        return (
            <form onSubmit={e => this.change(e)}>
                <input 
                    name='name'
                    ref={name => (this.input = name)}
                    placeholder=" name" 
                    />
                <input 
                    name='location'
                    ref={location => (this.input = location)}
                    placeholder='location'
                />
                 <input 
                    name='date'
                    ref={date => (this.input = date)}
                    placeholder='date'
                />
                <button type='submit'>Submit</button>
            </form>
        );
    }
}
