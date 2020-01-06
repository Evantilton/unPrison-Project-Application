// stores all data from event table in database
const eventsProgramsReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_PROGRAMS_TABLE':
            return action.payload;
        case 'SET_EXISTING_PROGRAMS':
           return {
               ...state,
               [action.payload.property]: action.payload.value,
           }
        default:
            return state;
    }
}

export default eventsProgramsReducer;