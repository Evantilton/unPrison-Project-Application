const venueReducer = (state = [], action) => {
    console.log("state", state);
    console.log(action.payload);
    
    switch (action.type) {
        case 'SET_VENUES':
            return action.payload;
        default:
            return state;
    }
  }
  export default venueReducer;