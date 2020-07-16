const initialState = {
  basketList: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PUSH_MEAL':
      const sameElem = state.basketList.findIndex(
        (item) => item.id === action.payload.product.id
      );
      const allMeal = [
        ...state.basketList.slice(0, sameElem),
        ...state.basketList.slice(sameElem + 1),
      ];

      return {
        basketList: [...allMeal, action.payload.product],
      };

    // case 'CHENGE_COUNT':
    //   return {
    //     qty: state.basketList.qty + action.payload.number,
    //   };

    case 'DELETE_ITEM':
      const elem = state.basketList.findIndex(
        (item) => item.id === action.payload.mealId
      );
      const restMeal = [
        ...state.basketList.slice(0, elem),
        ...state.basketList.slice(elem + 1),
      ];

      return {
        basketList: restMeal,
      };

    // case 'COUNT_MONEY':
    //   const allMoney = state.basketList.reduce(function (
    //     accumulator,
    //     currentValue
    //   ) {
    //     return [...accumulator, ...currentValue.mealCost];
    //   });

    //   return {
    //     basketList: allMoney,
    //   };

    default:
      return state;
  }
};

export default reducer;
