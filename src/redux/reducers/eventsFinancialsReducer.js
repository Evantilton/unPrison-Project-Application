// stores all data from event table in database
const eventsFinancialsReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_FINANCIALS_TABLE':
            return action.payload;
        case 'SET_EXISTING_FINANCIALS':
           return {
               ...state,
               [action.payload.property]: action.payload.value,
           }
        default:
            return state;
    }
}

export default eventsFinancialsReducer;