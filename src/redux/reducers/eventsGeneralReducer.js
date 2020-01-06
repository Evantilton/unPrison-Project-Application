// stores all data from event table in database
const eventsGeneralReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_GENERAL_TABLE':
            return action.payload;
        case 'SET_EXISTING_GENERAL':
           return {
               ...state,
               [action.payload.property]: action.payload.value,
           }
        default:
            return state;
    }
}

export default eventsGeneralReducer;