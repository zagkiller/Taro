import { createStore, combineReducers } from 'redux'

export const reducers = combineReducers({
    cards: require('./CardsRedux').reducer,
});

const store = createStore(reducers);