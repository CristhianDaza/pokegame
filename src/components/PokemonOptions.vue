<template>
  <div class="options-container">
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PokemonOptions"
}
</script>

<style scoped>
  ul {
    list-style-type: none;
    margin-top: 50px;
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
  }

  li:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }

  .options-container {
    display: flex;
    justify-content: center;
  }
</style>
