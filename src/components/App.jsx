import React, { Component } from 'react';
import Form from './Form/Form';
import { ContactsWrapper } from './Contacts/ContactsWrapper';
import { Contacts } from './Contacts/Contacts';
// import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid'
import { ThemeConsumer } from 'styled-components';

class App extends Component {
state = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}
  ],
filter: ''
  }
  
  deleteContacts = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)}))
  }

  formSubmitHandler = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number
    }
    
 this.setState(({contacts}) => ({contact: [contact, ...contacts]}))
}

  changeFilter = (e) => {
this.setState({filter: e.currentTarget.value})
  }
  
render() {
    const {contacts, filter} = this.state
    return (
      
      <div>
        <h1>Phonebook</h1>
        <Form onSubmit={this.formSubmitHandler}></Form>  
        <ContactsWrapper title='contacts' >
                        <label>
            Find contacts by name
            <input
            type="text"
            name="filter"
              value={filter}
              onChange={this.changeFilter}
/>
      </label>
 
          <Contacts contacts={contacts} onDeleteContacts={this.deleteContacts}></Contacts>
        </ContactsWrapper>
      </div>
  
  );
} 

  }
export default App;