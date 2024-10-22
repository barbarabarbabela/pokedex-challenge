import { PokemonCard, PokemonInfo } from '@/components'
import { usePokemonContext, usePokemonQuery } from '@/hooks'
import { useState } from 'react'

function PokemonList() {
  const [isModalOpen, setModalOpen] = useState(false)
  const { pokemon } = usePokemonContext()
  const { data, isLoading, isError } = usePokemonQuery(pokemon)

  const handleOpenModal = () => {
    setModalOpen(!isModalOpen)
  }

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
      <PokemonCard data={data} onClickInfo={handleOpenModal} />
      {isModalOpen && (
        <PokemonInfo
          pokemon={data}
          onClose={handleOpenModal}
          isOpen={isModalOpen}
        />
      )}
    </div>
  )
}

export default PokemonList
