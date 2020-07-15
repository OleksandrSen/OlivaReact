export const pushMeal = (product) => ({ type: 'PUSH_MEAL', product })

export const changeCount = (mealId, number) => ({ type: 'CHENGE_COUNT', payload: { mealId, number } })
