import { shallowMount } from '@vue/test-utils'
import PokemonPicture from '@/components/PokemonPicture'

describe('pokemonPicture.vue', () => {

    test('debe de hacer match con el snapshot', () => {
        const wrapper = shallowMount(PokemonPicture, {
            props: {
                pokemonId: 1,
                showPokemon: false
            }
        })
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('debe de mostrar la imagen oculta y el pokemon 100', () => {
        const wrapper = shallowMount(PokemonPicture, {
            props: {
                pokemonId: 100,
                showPokemon: false
            }
        })

        const [ img1, img2 ] = wrapper.findAll('img')
        const urlImg = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg'

        expect(img1.exists()).toBeTruthy()
        expect(img2).toBe(undefined)

        expect(img1.classes('hidden-pokemon')).toBeTruthy()

        expect(img1.attributes('src')).toBe(urlImg)

    })

    test('debe de mostrar el pokemon si el showPicture esta en true', () => {
        const wrapper = shallowMount(PokemonPicture, {
            props: {
                pokemonId: 5,
                showPokemon: true
            }
        })

        const img = wrapper.find('img')

        expect(img.exists()).toBe(true)

        expect(img.classes('hidden-pokemon')).toBeFalsy()
        expect(img.classes('fade-in')).toBeTruthy()
    })
})
