import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } from "./action_types";

const initialState = {
    myFavorites: [],
    allCharacters: []
};

export default function favorites(state=initialState, action){
    
    switch (action.type) {
        case ADD_FAVORITE:
            const doble = state.myFavorites.filter(e => e.id === action.payload.id)
            if(doble.length){
                return{
                    ...state,
                    myFavorites: [...state.allCharacters],
                    allCharacters: [...state.allCharacters] 
                }
            }
            
            return {
                ...state,
                myFavorites: [...state.allCharacters, action.payload],
                allCharacters: [...state.allCharacters, action.payload]
            }
        case DELETE_FAVORITE:
            return{
                ...state,
                myFavorites: state.myFavorites.filter(e => e.id !== action.payload),
                allCharacters: state.allCharacters.filter(e => e.id !== action.payload)
            }
        case FILTER:
            const filterCopy = [...state.allCharacters]
            let filtrado = filterCopy.filter(e => e.gender === action.payload)
            if(action.payload === "All") filtrado = filterCopy;
            return {
                ...state,
                 myFavorites: filtrado
            }
        case ORDER:
            const orderCopy = [...state.myFavorites]
            const sorteo = (metod) => {
                if(metod === "Ascendente"){
                    return orderCopy.sort((a, b) => {
                        if(a.id > b.id){
                            return 1
                        }
                        if(a.id < b.id){
                            return -1
                        }
                        else {return 0}
                    })
                }
                if(metod === "Descendente"){
                    return orderCopy.sort((a, b) => {
                        if(a.id < b.id){
                            return 1
                        }
                        if(a.id > b.id){
                            return -1
                        }
                        else {return 0}
                    });
                }
            }
            return{
                ...state,
                myFavorites: sorteo(action.payload)
            }
        default:
            return {...state}
    }
}