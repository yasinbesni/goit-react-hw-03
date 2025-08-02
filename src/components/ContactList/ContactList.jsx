import Contact from "./Contact";
import css from "./ContactList.module.css"

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={css.contactListUL}>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <Contact id={id} name={name} number={number} deleteContact={deleteContact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
