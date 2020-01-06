const eventsListForVenuesTabReducer = (state = [], action) => {
    console.log("state", state);
    console.log(action.payload);
    
    switch (action.type) {
        case 'SET_EVENTS_FOR_ONE_VENUE':
            return action.payload;
        default:
            return state;
    }
  }
  export default eventsListForVenuesTabReducer;