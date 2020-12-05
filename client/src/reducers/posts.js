const reducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return action.payload;
    case 'CREATE_POST':
      return state;
    default:
      return state;
  }
}

export default reducer;