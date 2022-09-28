

export default function ContactList({ contacts }) {
  const elements = contacts.map(({name, number, id}) => {
    return <li key={id}>{name}: {number}</li>
  })
  
  return (
    <ul>
      {elements}
    </ul>
  )
}
