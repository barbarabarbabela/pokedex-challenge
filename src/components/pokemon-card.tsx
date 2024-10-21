import { usePokemonQuery } from '@/hooks/use-pokemon-query'
import { useState } from 'react'
import { FaInfoCircle } from 'react-icons/fa'
import PokemonInfoModal from './pokemon-info'

interface PokemonCardProps {
  number: string
  name: string
  src: string
}

function PokemonCard({ number, name, src }: PokemonCardProps) {
  const { data } = usePokemonQuery()
  const [isModalOpen, setModalOpen] = useState(false)

  const handleOpenModal = () => {
    setModalOpen(!isModalOpen)
  }

  return (
    <div className="lg:w-[294px] rounded-lg overflow-hidden shadow-md">
      <div className="bg-[#FFFFFF] flex flex-col justify-center">
        <div className="w-full flex justify-end p-2">
          <FaInfoCircle
            className="w-6 h-6 cursor-pointer transition duration-200 ease-in-out hover:text-azul hover:bg-text-200 active:text-blue-300"
            onClick={handleOpenModal}
          />
        </div>
        <div className="rounded overflow-hidden">
          <img src={src} alt="bulbasaur" className="w-[294px] h-[294px]" />
        </div>
      </div>
      <div className="bg-[#F1F1F1] font-roboto px-[27px] py-[39px] flex flex-col gap-2 justify-center h-[129px] text-xl">
        <p>{number}</p>
        <p>{name}</p>
      </div>

      {isModalOpen && (
        <PokemonInfoModal
          pokemon={data}
          onClose={handleOpenModal}
          isOpen={isModalOpen}
        />
      )}
    </div>
  )
}

export default PokemonCard
