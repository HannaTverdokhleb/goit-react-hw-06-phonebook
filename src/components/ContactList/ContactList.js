import ContactListItem from 'components/ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';
import style from 'components/ContactList/ContactList.module.css'

const ContactList = () => {

    const contacts = useSelector(state => state.contacts.value);
    const searchValue = useSelector(state => state.filter);

    return (
        <ul className={style.contactList}>
            {contacts && contacts
            .filter((el) => el.name.toLowerCase().includes(searchValue.toLowerCase())) 
            .map(contact => {
                return (
                    <ContactListItem key={contact.id} contact={contact} />
                )
            })}
        </ul>
    )
}

export default ContactList;
