import React from "react";
import {
  PokemonSchema,
  PokemonSpritesSchema,
  UnpatchedPokemonSchema,
} from "../util/pokemonSchema";
import { pokemonData } from "../util/pokemonData";
import Head from "next/head";
import Pokedex from "../components/pokedex";

interface AppState {
  searchField: string;
  allPokemons: PokemonSchema[];
  searchedPokemons: PokemonSchema[];
  selectedPokemon: PokemonSchema | undefined;
}

class PokedexNonUser extends React.Component {
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

    //Find the seected pokemon from all pokemons
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
          <script
            dangerouslySetInnerHTML={{
              __html: `
    (function(d) {
    var config = {
      kitId: 'mlv6mbl',
      scriptTimeout: 3000,
      async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\\bwf-loading\\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
  })(document);
  `,
            }}
          />
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

export default PokedexNonUser;
