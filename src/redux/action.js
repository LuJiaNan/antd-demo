export const addScrollListAction = (count) => ({
    type: 'ADD',
    payload: count
})


export const deleteScrollListAction = (count) => ({
    type: 'DELETE',
    payload: count
})

export const clearScrollListAction = () => ({
    type: 'CLEAR'
})