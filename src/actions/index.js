import * as personActions from '../constants/person-action-types'

export const addPerson = (person) => ({
    type: personActions.CREATE,
    payload: {
        request: {
            method: 'POST',
            url: '/persons',
            data: person
        }
    }
});

export const getAllPersons = () => ({
    type: personActions.GET_ALL,
    payload: {
        request: {
            method: 'GET',
            url: '/persons'
        }
    }
});

export const updatePerson = (person) => ({
    type: personActions.UPDATE,
    payload: {
        request: {
            method: 'PUT',
            url: `/persons/${person._id}`,
            data: person
        }
    }
});


export const deletePerson = (personId) => ({
    type: personActions.DELETE,
    payload: {
        request: {
            method: 'DELETE',
            url: `/persons/${personId}`,
        }
    }
});