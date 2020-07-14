const initialState = {
  basketList: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PUSH_MEAL':
      return {
        ...state,

        basketList: [...state.products, action.product]
      }

    default:
      return state
  }
}

export default reducer
