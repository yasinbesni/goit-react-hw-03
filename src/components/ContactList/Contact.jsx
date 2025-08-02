const Contact = ({ id, name, number, deleteContact }) => {
  const handleDelete = (event) => {
    deleteContact(event.target.id);
  }

  return (
    <div>
      <p>{name}</p>
      <p>{number}</p>
      <button id={id} onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Contact;
