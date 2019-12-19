// stores all data from event table in database
const eventsTravelReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_TRAVEL_TABLE':
            return action.payload;
        default:
            return state;
    }
}

export default eventsTravelReducer;