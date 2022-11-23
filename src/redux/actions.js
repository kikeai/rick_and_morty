import { ADD_FAVORITE, DELETE_FAVORITE } from "./action_types"

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