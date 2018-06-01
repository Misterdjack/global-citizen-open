import {REQUEST_HOUSE_LEGISLATOR, REQUEST_SENATE_LEGISLATOR ,FETCHING_LEGISLATOR} from '../actions/types'

const INITIAL_STATE = {
    houseLegislators: [],
    senateLegislators: [],
    isFetching: false
}

const searchReducer = (state = INITIAL_STATE, action)=> {
    switch (action.type) {
        case FETCHING_LEGISLATOR:
            return {...state, isFetching: action.status}
        case REQUEST_HOUSE_LEGISLATOR:
            return {...state, houseLegislators: action.data}
        case REQUEST_SENATE_LEGISLATOR:
            return {...state, senateLegislators: action.data}
        default:
            return state
    }
}

export default searchReducer