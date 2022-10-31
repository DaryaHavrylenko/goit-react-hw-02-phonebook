export const Contacts = ({contacts, onDeleteContacts}) => {
    return (
          <ul>{contacts.map(({ id, name, number }) => <li key={id}><p>{name}: {number}</p><button onClick={() => onDeleteContacts(id)}>Delete</button></li>)}</ul>
        
  
      
)
}