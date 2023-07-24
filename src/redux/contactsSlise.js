import { createSlice } from '@reduxjs/toolkit';
import shortid from 'shortid';

const contactsInitialState = {value: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
]};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitialState,
    reducers: {
        addContact(state, action) {
            let isExist = state.value.find(contact => action.payload.name === contact.name);
            if (isExist) {
                alert(action.payload.name + " is allready in contacts");
                return state
            };
            state.value.push({
                ...action.payload,
                id: shortid.generate()
            })
        },
        deleteContact(state, action) {
            return {value: state.value.filter(contact => contact.id !== action.payload)}
        }
    }})

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;


