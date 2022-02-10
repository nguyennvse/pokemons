import { createReducer, on } from "@ngrx/store";
import { searchPokemonAction } from "../actions/pokemon.action";

export const initPokemonListState:any[] = [];

const _pokemonReducer = createReducer(
    initPokemonListState,
    on(searchPokemonAction,(state,{ newList})=> { return [...newList]})
)

export function pokemonReducer(state:any,action:any){
    return _pokemonReducer(state,action);
}