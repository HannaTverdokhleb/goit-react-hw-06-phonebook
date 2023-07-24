import { useDispatch } from 'react-redux';
import style from 'components/ContactListItem/ContactListItem.module.css';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/contactsSlise'

const ContactListItem = ({contact}) => {
    const dispatch = useDispatch();

    return (
        <li key={contact.id} className={style.listItem}>
            {contact.name}: {contact.number}
            <button value={contact.name} onClick={() => dispatch(deleteContact(contact.id))} className={style.listButtton}>Delete</button>
        </li>
    )
}

export default ContactListItem;

ContactListItem.propTypes = {
    contact: PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
    }).isRequired
}