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

    <template
        v-if="showAnswer"
        class="fade-in"
    >
      <h2>{{ message }}</h2>
      <button
          @click="newGame"
          class="newGame"
      >Nuevo Juego</button>
    </template>
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
      showPokemon: false,
      showAnswer: false,
      message: ''
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
      const { id, name } = this.pokemon
      this.showPokemon = true
      this.showAnswer = true
      if (pokemonId === id) {
        this.message = `Correcto, ${name}`
      } else {
        this.message = `Ooops, era ${name}`
      }
    },
    newGame() {
      this.showPokemon = false
      this.showAnswer = false
      this.pokemonArr = []
      this.pokemon = null
      this.mixPokemonArray()
    }
  },
  mounted() {
    this.mixPokemonArray()
  }
}
</script>

<style scoped>
  .newGame {
    padding: 5px 15px;
    border-radius: 5px;
    outline: none;
    border: none;
    cursor: pointer;
  }

  .newGame:hover {
    background: rgba(255, 255, 255, .8);
  }
</style>
