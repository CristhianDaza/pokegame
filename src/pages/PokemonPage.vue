<template>
  <h1>¿Quién es este Pokémon?</h1>
  <PokemonPicture
      :pokemonId="150"
      :showPokemon="true"
  />
  <PokemonOptions
      :pokemons="pokemonArr"
  />
</template>

<script>
import PokemonOptions from '@/components/PokemonOptions'
import PokemonPicture from '@/components/PokemonPicture'

import getPokemonOptions from '@/helpers/getPokemonOptions'

export default {
  name: "PokemonPage",
  data() {
    return {
      pokemonArr: []
    }
  },
  components: {
    PokemonPicture,
    PokemonOptions
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions()
    }
  },
  mounted() {
    this.mixPokemonArray()
  }
}
</script>
