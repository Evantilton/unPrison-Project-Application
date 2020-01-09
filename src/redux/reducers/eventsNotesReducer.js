// stores all data from event table in database
const eventsNotesReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_NOTES_TABLE':
            console.log("set notes table was hit")
            return action.payload;
        case 'SET_EXISTING_NOTES':
           return {
               ...state,
               [action.payload.property]: action.payload.value,
           }
        default:
            return state;
    }
}

export default eventsNotesReducer;