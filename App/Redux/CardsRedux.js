import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */
/*
const {Types, Creators} = createActions({
    addCardsRequest: ['items'],
    addCardsSuccess: {value: ''},
    addCardsFailure: {error: ''},

});


export const CardsTypes = Types;
export default Creators;
*/

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
    items: [],
    error: null,
    fetching: false
});

/* ------------- Reducers ------------- */
export const addCardsRequest = state => state.merge({fetching: true});

export const addCardsSuccess = (state, {value}) => {
    return state.merge({
     items: value.items,
     fetching: false,
     error: null,
    });
};

export const getItemsFailure = (state, {error}) => state.merge({fetching: false, error});

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = function(INITIAL_STATE, action) {
    if (state === undefined) {
        state = INITIAL_STATE;
      }
      if (action.type === 'ADD_CARDS_REQUEST') {
        var newState = state.concat([action.data]);
        return newState;
      }

    return state;
}

/*createReducer(INITIAL_STATE, {
    [Types.ADD_CARDS_REQUEST]: addCardsRequest,
    [Types.ADD_CARDS_SUCCESS]: addCardsSuccess,
    [Types.ADD_CARDS_FAILURE]: addCardsFailure,

});
*/
/* ------------- Selectors ------------- */
export const getCards = state => state.cards.items;

