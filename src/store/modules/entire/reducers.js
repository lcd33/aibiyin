const initialState = {
  entireList: []
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'entire/changeEntireList':
      return {
        ...state,
        entireList: action.payload
      }
    default:
      return state
  }
}

export default reducer