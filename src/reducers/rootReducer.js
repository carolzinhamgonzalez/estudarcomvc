const initState = {
    base: []
}

const rootReducer = (state = initState, action) => {
    if (action.type === 'ADD_BASE'){
        return {
            base: [...state.base, action.base]
        }
    }
}

export default rootReducer;