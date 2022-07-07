import React from 'react';
import PropTypes from 'prop-types';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import '../../styles/index.css';
import { Title } from '../Phonebook/Phonebook.styled';

class Phonebook extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    ],
    filter: '',
  };
  // створення
  handleCreate = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };
  //видалення
  handleDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  handleFilter = value => this.setState({ filter: value });
  getFilter = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { handleCreate, handleDelete, handleFilter, getFilter } = this;
    const { filter, contacts } = this.state;

    return (
      <>
        <Title>Phonebook</Title>
        <ContactForm allContacts={contacts} onSubmit={handleCreate} />
        <Title>Contacts</Title>
        <Filter value={filter} onChange={handleFilter} />
        <ContactList lists={getFilter()} onDeleteContact={handleDelete} />
      </>
    );
  }
}

export default Phonebook;

Phonebook.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};
