const venueDetailsReducer = (state = {}, action) => {
    console.log("state", state);
    console.log(action.payload);
    
    switch (action.type) {
        case 'SET_VENUE_DETAILS':
            return action.payload;
        case 'SET_EXISTING_VENUES_GENERAL':
            return {
            ...state,
            [action.payload.property]: action.payload.value,
        }
        default:
            return state;
    }
  }
  export default venueDetailsReducer;