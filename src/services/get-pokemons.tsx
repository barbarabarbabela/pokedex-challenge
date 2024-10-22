import type { PokemonData } from '@/interfaces'

export async function getPokemons(
  pokemonIdentifier: string
): Promise<PokemonData> {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonIdentifier}`
  )

  if (!response.ok) {
    throw new Error('Erro ao buscar Pokémon')
  }

  const data: PokemonData = await response.json()

  return data
}
