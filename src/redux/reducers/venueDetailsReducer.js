const venueDetailsReducer = (state = [], action) => {
    console.log("state", state);
    console.log(action.payload);
    
    switch (action.type) {
        case 'SET_VENUE_DETAILS':
            return action.payload;
        default:
            return state;
    }
  }
  export default venueDetailsReducer;