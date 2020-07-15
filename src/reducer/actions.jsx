export const pushMeal = (product, mealId, number) => ({ type: 'PUSH_MEAL', product, payload: { mealId, number } })

export const changeCount = (mealId, number) => ({ type: 'CHENGE_COUNT', payload: { mealId, number } })
