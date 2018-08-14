import * as EsnValidationActions from './esn.actions';

const initialState = {
    validatedEsns: []
}

export function esnReducer(state = initialState, action: EsnValidationActions.EsnValidationActions) {
    switch(action.type) {
        case EsnValidationActions.REFRESH:
            return [...state.validatedEsns, ...action.payload];
        default:
            return state;
    }
}