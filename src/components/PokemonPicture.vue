<template>
  <div class="pokemon-container">
    <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg"
        alt="Pokemon"
        class="hidden-pokemon"
    >
<!--    <img
       src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg"
       class="fade-in"
       alt="Pokemon"
> -->
  </div>
</template>

<script>
export default {
  name: "PokemonPicture"
}
</script>

<style scoped>
  .pokemon-container {
    height: 200px;
  }
  img {
    height: 200px;
    position: absolute;
    /*right: 32%;*/
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
  }
  .hidden-pokemon {
    filter: brightness(0);
  }
</style>
