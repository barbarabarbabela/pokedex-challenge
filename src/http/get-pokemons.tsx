interface PokemonData {
  id: string
  species: {
    name: string
  }
  sprites: {
    front_default: string
  }
}

export async function getPokemons(
  pokemonIdentifier: string
): Promise<PokemonData> {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonIdentifier}`
  )

  if (!response.ok) {
    throw new Error(`Erro ao buscar o Pokémon: ${response.statusText}`)
  }

  const data = await response.json()

  console.log(data)

  return data
}
