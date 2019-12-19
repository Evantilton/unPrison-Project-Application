// stores all data from event table in database
const eventsTravelReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_TRAVEL_TABLE':
            return action.payload;
        case 'SET_EXISTING_TRAVEL':
           return {
               ...state,
               [action.payload.property]: action.payload.value,
           }
        default:
            return state;
    }
}

export default eventsTravelReducer;