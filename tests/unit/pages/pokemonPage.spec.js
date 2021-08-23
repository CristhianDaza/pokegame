import { shallowMount, mount } from '@vue/test-utils'
import PokemonPage from '@/pages/PokemonPage'

describe('pokemonPage component', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallowMount(PokemonPage)
    })
    test('debe de llamar mixPokemonArray al montar', () => {
        const mixPokemonArraySpy = jest.spyOn(PokemonPage.methods, 'mixPokemonArray')
        shallowMount(PokemonPage)
        expect(mixPokemonArraySpy).toHaveBeenCalled()
    })
})
