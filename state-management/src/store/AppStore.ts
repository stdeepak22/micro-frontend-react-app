

import { configureStore, combineReducers } from '@reduxjs/toolkit'

let dynamicReducers: any = {}

const store = configureStore({
    reducer: {}
})

const addReducer = (name: string, currentReducers: any) => {
    dynamicReducers[name] = currentReducers;

    const reducers: any = combineReducers({
        ...dynamicReducers
    })

    store.replaceReducer(reducers);
}

export { store, addReducer };