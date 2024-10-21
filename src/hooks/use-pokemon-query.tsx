import { usePokemonContext } from '@/contexts/pokemon-context'
import { useQuery } from '@tanstack/react-query'

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

async function getPokemons(pokemonIdentifier: string): Promise<PokemonData> {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonIdentifier}`
  )

  if (!response.ok) {
    throw new Error('Erro ao buscar Pokémon')
  }

  const data = await response.json()
  return data as PokemonData
}

export const usePokemonQuery = () => {
  const { pokemon } = usePokemonContext()

  const { data, isLoading, isError } = useQuery({
    queryKey: ['pokemon', pokemon],
    queryFn: () => getPokemons(pokemon),
    enabled: !!pokemon,
  })

  return { data, isLoading, isError }
}
