const initialState = {
  basketList: [],
  amountToPay: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PUSH_MEAL':
      console.log('PUSH_MEAL');
      const sameElem = state.basketList.find(
        (item) => item.id === action.payload.product.id
      );
      console.log(state.basketList);
      if (!sameElem) {
        action.payload.product.qty = 1;
        return {
          basketList: [...state.basketList, action.payload.product],
          amountToPay: state.amountToPay + action.payload.product.cost,
        };
      } else {
        let elIdx = state.basketList.findIndex(
          (item) => item.id === action.payload.product.id
        );
        return {
          basketList: [
            ...state.basketList.slice(0, elIdx),
            { ...sameElem, qty: sameElem.qty + 1 },
            ...state.basketList.slice(elIdx + 1),
          ],
          amountToPay: state.amountToPay + action.payload.product.cost,
        };
      }

    case 'CHENGE_COUNT':
      console.log('PUSH_MEAL');
      return {
        qty: state.basketList.qty + action.payload.number,
      };

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
