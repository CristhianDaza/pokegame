import { getPokemons } from "@/helpers/getPokemonOptions";


describe('getPokemonOptions helpers', () => {
    test('debe de regresar un arreglo de numero', () => {
        const pokemons = getPokemons()
        expect(pokemons.length).toBe(650)
        expect(pokemons[0]).toBe(1)
        expect(pokemons[500]).toBe(501)
    })
})
