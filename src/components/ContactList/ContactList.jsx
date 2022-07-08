import React from 'react';
import PropTypes from 'prop-types';
import {
  ContactsItems,
  ContactsLi,
  ButtonContact,
  ItemWrap,
} from './ContactList.styled';

const ContactList = ({ lists, onDeleteContact }) => {
  return (
    <ContactsItems>
      {lists.map(({ name, number, id }) => (
        <ContactsLi key={id}>
          <ItemWrap>
            {name}: {number}
            <ButtonContact type="button" onClick={() => onDeleteContact(id)}>
              Delete
            </ButtonContact>
          </ItemWrap>
        </ContactsLi>
      ))}
    </ContactsItems>
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
