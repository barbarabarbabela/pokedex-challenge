import { getPokemons } from '@/services'
import { useQuery } from '@tanstack/react-query'

export const usePokemonQuery = (pokemon: string) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['pokemon', pokemon],
    queryFn: () => getPokemons(pokemon),
    enabled: !!pokemon,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
    retry: false,
  })

  return { data, isLoading, isError }
}
