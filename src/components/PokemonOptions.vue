<template>
  <div class="options-container">
    <ul>
      <li
          v-for="pokemon in pokemons"
          :key="pokemon.id"
          @click="$emit('selection', pokemon.id)"
      >
        {{ pokemon.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PokemonOptions",
  props: {
    pokemons: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
  ul {
    list-style-type: none;
    margin-top: 50px;
    padding: 0;
  }
  li {
    background-color: white;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;
    margin-bottom: 10px;
    width: 250px;
    transition: all .2s ease;
    color: #0d1117;
    padding: 5px 15px;
  }

  li:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }

  .options-container {
    display: flex;
    justify-content: center;
  }
</style>
