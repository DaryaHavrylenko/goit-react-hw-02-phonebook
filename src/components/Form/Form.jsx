import React, { Component } from 'react';
import { nanoid } from 'nanoid'

class Form extends Component {
  state = {
    name: '',
     number: ''
  };

  modelId = nanoid();
  numberId = nanoid();
  
  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '',  number: '' });
  };
  render() {
    return (
      <form autoComplete="off" onSubmit={this.handleSubmit}>
        <label htmlFor={this.modelId}>
          Name
      </label>
    <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
                // value={this.state.name}
                id= {this.modelId}
        />
        <label htmlFor={this.numberId}>Number</label>
        <input
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={this.handleChange}
          // value={this.state.number}
          id={this.numberId}
/>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default Form;
