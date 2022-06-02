import React from "react";
import PropTypes from "prop-types";
import "../../styles/index.css"


const ContactList = ({ lists, onClick, items }) => {
  return (
    <div>
      <ul className="contacts-items">
        {lists.map(({ name, number, id }) => (
          <li key={id}>
            {name}: {number}
            <button className="btn" type="button" id={id} onClick={onClick}>
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  lists: PropTypes.array,
};

export default ContactList;