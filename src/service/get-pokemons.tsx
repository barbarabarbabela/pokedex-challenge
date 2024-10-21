interface PokemonData {
  id: string
  weight: number
  height: number
  types: Array<{
    type: {
      name: string
    }
  }>
  species: {
    name: string
  }
  sprites: {
    front_default: string
  }
  stats: {
    base_stat: number
    stat: {
      name: string
    }
  }[]
}

export async function getPokemons(
  pokemonIdentifier: string
): Promise<PokemonData> {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonIdentifier}`
  )

  if (!response.ok) {
    throw new Error('Erro ao buscar Pokémon')
  }

  const data = await response.json()
  return data as PokemonData
}
