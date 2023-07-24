import { useDispatch } from 'react-redux';
import { useState } from 'react';
import shortid from 'shortid';
import style from 'components/AddContactForm/AddContactForm.module.css';
import { addContact } from 'redux/contactsSlise'


export default function AddContactForm() {

    const dispatch = useDispatch();
    const nameInputId = shortid.generate();
    const numberInputId = shortid.generate();
    const [ userName, setName] = useState('');
    const [ userNumber, setNumber] = useState('');

    const handleChange = e => {
        const {name, value} = e.target;
        switch(name) {
            case 'name' :
                setName(value);
                break;

            case 'number' :
                setNumber(value);
                break;

            default: return;
        }
    }

    const handleOnSubmit = e => {
        e.preventDefault();
        dispatch(addContact({
            name: userName,
            number: userNumber
        }));
        reset();  
    }

    const reset = () => {
        setNumber('');
        setName('');
    }

    return (
        <form onSubmit={handleOnSubmit} className={style.phonebookForm} autoComplete='off'>
            <label htmlFor={ nameInputId } className={style.label} >Name</label>
            <input
                type="text"
                name="name"
                value={userName}
                onChange={handleChange}
                pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                id={ nameInputId }
                className={style.input}
            />
            <label htmlFor={ numberInputId } className={style.label}>Number</label>
            <input
                type="tel"
                name="number"
                value={userNumber}
                onChange={handleChange}
                pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                id={numberInputId}
                className={style.input}
            />
            <button type='submit' className={style.button}>Add contact</button>
        </form>
    )
}
