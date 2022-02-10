import { createAction, props } from "@ngrx/store";

export const searchPokemonAction = createAction('[PokemonList Component] searchPokemon', props<{ newList: any[] }>());