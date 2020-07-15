export const pushMeal = (product, number) => ({ type: 'PUSH_MEAL', payload: { product, number } })

export const changeCount = (mealId, number) => ({ type: 'CHENGE_COUNT', payload: { mealId, number } })

export const deleteMeal = (mealId) => ({ type: 'DELETE_ITEM', payload: { mealId } })