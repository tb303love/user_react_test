import * as personActions from '../constants/person-action-types'

const personCRUD = (state, action) => {
    switch (action.type) {
        case personActions.CREATE:
            return {
                ...state,
                loading: true,
                error: null
            };
        case personActions.CREATE_SUCCESS:
            if (state.persons === null || state.persons === undefined) {
                state.persons = [];
                return {
                    ...state, persons: [...state.persons.concat(action.payload.data)], loading: false
                };
            }
            return {
                ...state, persons: [...state.persons.concat(action.payload.data)], loading: false
            };
        case personActions.CREATE_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };

        case personActions.GET_ALL:
            return {
                ...state,
                loading: true,
                error: null
            };
        case personActions.GET_ALL_SUCCESS:
            return {...state, loading: false, persons: action.payload.data};
        case personActions.GET_ALL_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };

        case personActions.DELETE:
            return {
                ...state,
                loading: true,
                error: null
            };
        case personActions.DELETE_SUCCESS :
            return Object.assign({}, state, {
                loading: false,
                persons: [...state.persons.filter(person => person._id !== action.payload.data._id)]
            });
        case personActions.DELETE_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };

        case personActions.UPDATE:
            return {
                ...state,
                loading: true,
                error: null
            };
        case personActions.UPDATE_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                persons: state.persons.map(person => person._id === action.payload.data._id ?
                    { ...action.payload.data} :
                    person
                )
            };
        case personActions.UPDATE_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                persons: [...state.persons]
            };
        default:
            return {
                ...state
            }
    }
};


export default personCRUD;