import React from 'react';
import PropTypes from 'prop-types';
import { ContactsItems, ContactsLi, ButtonContact } from './ContactList.styled';

const ContactList = ({ lists, onDeleteContact }) => {
  return (
    <>
      <ContactsItems>
        {lists.map(({ name, number, id }) => (
          <ContactsLi key={id}>
            {name}: {number}
            <ButtonContact
              type="button"
              id={id}
              onClick={() => onDeleteContact(id)}
            >
              delete
            </ButtonContact>
          </ContactsLi>
        ))}
      </ContactsItems>
    </>
  );
};

ContactList.propTypes = {
  lists: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
