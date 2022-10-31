import PropTypes from 'prop-types';
export const Contacts = ({ contacts, onDeleteContacts }) => {
    return (
          <ul>{contacts.map(({ id, name, number }) => <li key={id}><p>{name}: {number}</p><button onClick={() => onDeleteContacts(id)}>Delete</button></li>)}</ul>
        )
}

Contacts.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDeleteContacts: PropTypes.func.isRequired,
}