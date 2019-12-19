const eventDetailsReducer = (state = [], action) => {
    console.log("state", state);
    console.log(action.payload);
    
    switch (action.type) {
        case 'SET_EVENT_DETAILS':
            return action.payload;
        default:
            return state;
    }
  }
  export default eventDetailsReducer;