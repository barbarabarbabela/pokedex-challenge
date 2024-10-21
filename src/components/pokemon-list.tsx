import React from 'react'
import PokemonCard from './pokemon-card'
import { useQuery } from '@tanstack/react-query'
import { getPokemons } from '../http/get-pokemons'
import { usePokemonContext } from '@/contexts/pokemon-context'
import { capitalizeFirstLetter } from '@/shared/capitalize-first-letter'
import { formatPokemonNumber } from '@/shared/format-pokemon-id'

function PokemonList() {
  const { pokemon } = usePokemonContext()

  const { data, isLoading, isError } = useQuery({
    queryKey: ['pokemon', pokemon],
    queryFn: () => getPokemons(pokemon),
    enabled: !!pokemon,
  })

  if (isLoading) {
    return (
      <div className="flex justify-center h-screen mt-9">
        <p className="text-xl font-semibold animate-pulse">Carregando...</p>
      </div>
    )
  }

  if (isError) {
    return (
      <div className="flex justify-center h-screen mt-9">
        <p className="text-xl font-semibold">Erro ao buscar Pokémon</p>
      </div>
    )
  }

  if (!data) {
    return null
  }

  return (
    <div className="mx-[69px] mt-[71px] grid gap-[42px] lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1">
      <PokemonCard
        name={capitalizeFirstLetter(data.species.name)}
        number={formatPokemonNumber(data.id)}
        src={data.sprites.front_default}
      />
    </div>
  )
}

export default PokemonList
