const initialState = {
  basketList: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PUSH_MEAL':

      const detachItem = (basketList) => {
        const sameElem = basketList.findIndex((item) => item.id === action.payload.mealId)
        const allMeal = [...basketList.slice(0, sameElem), ...basketList.slice(sameElem + 1)]
        return {
          basketList: allMeal
        }
      }

      return {
        ...state,

        basketList: [detachItem, action.product]
      }
    // case 'CHENGE_COUNT':
    //   console.log(action.payload.mealId)

    //   const deleteItem = (basketList) => {
    //     const sameElem = basketList.findIndex((item) => item.id === action.payload.mealId)
    //     const allMeal = [...basketList.slice(0, sameElem), ...basketList.slice(sameElem + 1)]

    //     console.log(sameElem)

    //     return {
    //       basketList: allMeal
    //     }
    //   }

    //   return {
    //     ...state,

    //     basketList: [deleteItem]
    //   }

    case 'DELETE_ITEM':
      console.log(action.payload.mealId)

      const deleteItem = (basketList) => {
        const sameElem = basketList.find((item) => item.id === action.payload.mealId)
        const allMeal = [...basketList.slice(0, sameElem), ...basketList.slice(sameElem + 1)]

        return {
          basketList: allMeal
        }
      }

      return {
        ...state,

        basketList: [deleteItem]
      }

    default:
      return state
  }
}

export default reducer
