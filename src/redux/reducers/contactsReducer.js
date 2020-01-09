const contactsReducer = (state = [], action) => {
    console.log("state", state);
    console.log(action.payload);
    
    switch (action.type) {
        case 'SET_CONTACTS':
            return action.payload;
        default:
            return state;
    }
  }
  export default contactsReducer;