import {REHYDRATE} from 'redux-persist/constants'
import {UPDATE_ISSUE} from '../actions/types'
const initialState = [
    {
        name: "domestic",
        value: 50
    },
    {
        name: "international",
        value: 50,
    },
    {
        name: "social",
        value: 50
    },
    {
        name: "fiscal",
        value: 50
    },
    {
        name: "environment",
        value: 50
    }
]

const issuesReducer = (state = initialState, action)=> {
    switch (action.type) {
        case REHYDRATE:
            return action.payload.issues || state
        case UPDATE_ISSUE:
            state[action.index]['value'] = action.value
            return state
        default:
            return state
    }
}

export default issuesReducer