import AddContactForm from 'components/AddContactForm/AddContactForm';
import ContactList from 'components/ContactList/ContactList';
import SearchFilter from 'components/SearchFilter/SearchFilter';


const App = () => {
  return (
    <div className="container">
      <h1 className="main-title">Phonebook</h1>
      <AddContactForm />
      
      <h2 className="title">Contacts</h2>
      <SearchFilter />

      <ContactList />
    </div>
  )
}


export default App;
