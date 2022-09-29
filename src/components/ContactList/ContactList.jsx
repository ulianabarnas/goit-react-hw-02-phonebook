export default function ContactList({ contacts, onDeleteContact }) {
  const elements = contacts.map(({name, number, id}) => {
    return <li key={id}>{name}: {number}
      <button
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  })
  
  return (
    <ul>
      {elements}
    </ul>
  )
}
