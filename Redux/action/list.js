import {} from './'
import { ADD_SEASON, MARK_COMPLETE, REMOVE_SEASON } from './action.types'


export const addSeason = (season) => ({
    type : ADD_SEASON,
    payload :season
})


export const removeSeason = (id) => ({
    type :REMOVE_SEASON,
    payload : id
})


export const markComplete = (id) => ({
    type : MARK_COMPLETE,
    payload : id
})

