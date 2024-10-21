import { PokemonCard } from '@/components'
import { usePokemonQuery } from '@/hooks'
import { formatPokemonId, capitalizeFirstLetter } from '@/shared'

function PokemonList() {
  const { data, isLoading, isError } = usePokemonQuery()

  if (isError) {
    return (
      <div className="flex justify-center h-screen mt-9">
        <p className="text-xl font-semibold">Erro ao buscar Pokémon</p>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="flex justify-center h-screen mt-9">
        <p className="text-xl font-semibold animate-pulse">Carregando...</p>
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
        number={formatPokemonId(data.id)}
        src={data.sprites.front_default}
      />
    </div>
  )
}

export default PokemonList
