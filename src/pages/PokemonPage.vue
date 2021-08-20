<template>
  <div v-if="pokemon">
    <h1>¿Quién es este Pokémon?</h1>
    <PokemonPicture
        :pokemonId="pokemon.id"
        :showPokemon="showPokemon"
    />
    <PokemonOptions
        :pokemons="pokemonArr"
        @selection="checkAnswer($event)"
    />
  </div>
  <div v-else>
    <h1>Cargando...</h1>
  </div>
</template>

<script>
import PokemonOptions from '@/components/PokemonOptions'
import PokemonPicture from '@/components/PokemonPicture'

import getPokemonOptions from '@/helpers/getPokemonOptions'

export default {
  name: "PokemonPage",
  data() {
    return {
      pokemonArr: [],
      pokemon: null,
      showPokemon: false
    }
  },
  components: {
    PokemonPicture,
    PokemonOptions
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions()

      const rndInt = Math.floor(Math.random() * 4)
      this.pokemon = this.pokemonArr[rndInt]
    },
    checkAnswer(pokemonId) {
      this.showPokemon = true
    }
  },
  mounted() {
    this.mixPokemonArray()
  }
}
</script>
