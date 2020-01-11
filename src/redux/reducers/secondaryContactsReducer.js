const secondaryContactsReducer = (state = [], action) => {
    console.log("state", state);
    console.log(action.payload);
    
    switch (action.type) {
        case 'SET_EXISTING_SECONDARY_CONTACTS':
            return {
            ...state,
            [action.payload.property]: action.payload.value,
        }
        default:
            return state;
    }
  }
  export default secondaryContactsReducer;