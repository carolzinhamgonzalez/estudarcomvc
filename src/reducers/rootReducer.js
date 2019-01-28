// import React from 'react';
// import DataMatters from '../containers/DataMatters';
// import store from '../index';

const initState = {
    base: []
}

const rootReducer = (state = initState, action) => {
    if (action.type === 'ADD_BASE'){
        return {
            base: [...state.base, action.base]
        }
    }
    
    // return state;
}

// const baseAction = {type: 'ADD_BASE', base: DataMatters}
// // criação de ação para dar update no state

// store.dispatch(baseAction);

// store.subscribe(() => {
//     console.log('state updated');
//     console.log(store.getState());
// })

export default rootReducer;