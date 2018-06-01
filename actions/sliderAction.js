import {UPDATE_ISSUE} from './types'


export const updateIssue = (index, value)=>(dispatch)=> {
    dispatch({type: UPDATE_ISSUE,index, value})
}