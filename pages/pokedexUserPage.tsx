import {
  PokemonSchema,
  PokemonSpritesSchema,
  UnpatchedPokemonSchema,
} from "../util/pokemonSchema";
import React from "react";
import { pokemonData } from "../util/pokemonData";
import Head from "next/head";
import Pokedex from "../components/pokedex";

interface AppState {
  searchField: string;
  allPokemons: PokemonSchema[];
  searchedPokemons: PokemonSchema[];
  selectedPokemon: PokemonSchema | undefined;
}

class PokedexUserPage extends React.Component {
  state = {
    searchField: "",
    allPokemons: [],
    searchedPokemons: [],
    selectedPokemon: undefined,
  };
  patchPokemonData = (pokemons: UnpatchedPokemonSchema[]) => {
    const patchedPokemons = pokemons.map((pokemon) => {
      let parsedSprites: PokemonSpritesSchema = {
        normal: undefined,
        animated: undefined,
      };
      try {
        parsedSprites = pokemon.sprites && JSON.parse(pokemon.sprites);
      } catch (e) {
        console.log("wait.....", e);
      }
      const patchedPokemon: PokemonSchema = {
        ...pokemon,
        sprites: parsedSprites,
      };
      return patchedPokemon;
    });
    return patchedPokemons;
  };

  componentDidMount() {
    //Patch the stringified pokemon sprites
    const patchedPokemons: PokemonSchema[] = this.patchPokemonData(pokemonData);
    //Update the state with the patched pokemons
    this.setState({
      allPokemons: patchedPokemons,
      searchedPokemons: patchedPokemons,
    });
  }

  handleInputChange = (inputValue: string) => {
    //filter the searched pokemons
    const { allPokemons } = this.state;

    const searchedPokemons = allPokemons.filter((pokemon: PokemonSchema) => {
      return pokemon.name && pokemon.name.toLowerCase().includes(inputValue);
    });
    this.setState({
      searchField: inputValue,
      searchedPokemons: searchedPokemons,
    });
  };

  handleClick = (pokemonName: string) => {
    const { allPokemons } = this.state;

    //Find the selected pokemon from all pokemons
    const selectedPokemon = allPokemons.find(
      (pokemon: PokemonSchema) => pokemon.name === pokemonName
    );
    //Update the State
    this.setState({
      selectedPokemon,
    });
  };

  render() {
    return (
      <>
        <Head>
          <title>なつかしいポケモン図鑑</title>
        </Head>
        <Pokedex
          searchedPokemons={this.state.searchedPokemons}
          onInputChange={this.handleInputChange}
          selectedPokemon={this.state.selectedPokemon}
          onPokemonClick={this.handleClick}
        />
      </>
    );
  }
}

export default PokedexUserPage;
