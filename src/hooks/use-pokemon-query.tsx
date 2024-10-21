import { usePokemonContext } from '@/hooks'
import { getPokemons } from '@/service'
import { useQuery } from '@tanstack/react-query'

export const usePokemonQuery = () => {
  const { pokemon } = usePokemonContext()

  const { data, isLoading, isError } = useQuery({
    queryKey: ['pokemon', pokemon],
    queryFn: () => getPokemons(pokemon),
    enabled: !!pokemon,
  })

  return { data, isLoading, isError }
}
