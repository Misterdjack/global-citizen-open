import {combineReducers} from 'redux'
import profile from './profile_reducer'
import search from './search_reducer'
import concerns from './concerns_reducer'
import issues from './issues_reducer'
export default combineReducers({
    profile,
    search,
    concerns,
    issues
});

