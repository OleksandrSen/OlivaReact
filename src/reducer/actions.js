export const pushMeal = (product, number) => ({
  type: 'PUSH_MEAL',
  payload: { product, number },
});

// export const changeCount = (number) => ({
//   type: 'CHENGE_COUNT',
//   payload: { number },
// });

export const deleteMeal = (mealId) => ({
  type: 'DELETE_ITEM',
  payload: { mealId },
});

// export const countMoney = (mealCost) => ({
//   type: 'COUNT_MONEY',
//   payload: { mealCost },
// });
