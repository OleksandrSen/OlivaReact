const initialState = {
  basketList: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PUSH_MEAL':
      return {
        ...state,

        basketList: [...state.basketList, action.product]
      }
    case 'CHENGE_COUNT':
      console.log(action.payload.mealId)

      // const sameMeal = { state.basketList.find((item) => item.id === action.payload.mealId) }
      const sameMeal = {}

      return {
        ...state,

        basketList: [...state.basketList, sameMeal]
      }
    default:
      return state
  }
}

export default reducer
