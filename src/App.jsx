import style from "./App.module.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

function App() {
  // static contacts data instance from the hw
  const staticContactsData = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];

  // contacts var initialization
  const [contacts, setContacts] = useState(() => {
    // fetch contacts from the local storage
    const localData = localStorage.getItem("contacts");
    // if the local storage is empty, initialize with static Data
    if (localData !== null) {
      return JSON.parse(localData);
    }
    return staticContactsData;
  });

  // if any changes on contacts, update it on local storage
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  // Adding a new contact to contacts
  const addContact = ({ name, phone }) => {
    const newContact = {
      id: nanoid(),
      name,
      number: phone,
    };
    
    setContacts((prevContacts) => [newContact, ...prevContacts]);
  };

  // filtering variable initialization
  const [keyword, setKeyword] = useState("");


  // callback for filtering
  const handleSearch = (event) => {
    setKeyword(event.target.value);
  };

   const getFilteredContacts = () => {
    const normalizedFilter = keyword.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getFilteredContacts();
  
  
  // callback for deleting a contact
   const deleteContact = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  return (
    <div className={style.mainContainer}>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox handleSearch={handleSearch} keyword={keyword} />
      <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
    </div>
  );
}

export default App;
