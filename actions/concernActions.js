import {UPDATE_CONCERN} from './types'

export const updateSubject = (index, status)=>(dispatch)=> {
    dispatch({type: UPDATE_CONCERN, index, status})
}
