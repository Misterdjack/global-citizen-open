import {IS_LOGGEDIN, LOGIN_FAILED} from '../actions/types'
import {REHYDRATE} from 'redux-persist/constants'

const INITIAL_STATE = {
    user: {},
    isLoggedIn: false,
}

const profileReducer = (state = INITIAL_STATE, action)=> {
    switch (action.type) {
        case REHYDRATE:
            return action.payload.profile || state
        case IS_LOGGEDIN:
            return {...state, isLoggedIn: true, user: action.data}
        case LOGIN_FAILED:
            return {...state, isLoggedIn: false}
        default:
            return state
    }
}

export default profileReducer