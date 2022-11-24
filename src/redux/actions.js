import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } from "./action_types"

export function addFavorite(personaje){
    return {
        type: ADD_FAVORITE,
        payload: personaje
    }
}

export function deleteFavorite(id){
    return {
        type: DELETE_FAVORITE,
        payload: id
    }
}

export function filterCards(status){
    return {
        type: FILTER,
        payload: status
    }
}

export function orderCards(id){
    return {
        type: ORDER,
        payload: id
    }
}