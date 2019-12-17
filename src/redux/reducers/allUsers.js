const allUsers = (state = [], action) => {
    switch (action.type) {
      case 'ALL_USERS':
          console.log("in allUsers", action.payload)
        return action.payload;
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default allUsers;
  