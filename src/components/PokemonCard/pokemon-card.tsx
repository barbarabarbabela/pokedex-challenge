import type { PokemonData } from '@/interfaces'
import { formatPokemonId, capitalizeFirstLetter } from '@/shared'
import { FaInfoCircle } from 'react-icons/fa'

interface PokemonCardProps {
  data: PokemonData
  onClickInfo: () => void
}

function PokemonCard({ data, onClickInfo }: PokemonCardProps) {
  return (
    <div className="lg:w-[294px] rounded-lg overflow-hidden shadow-md">
      <div className="bg-[#FFFFFF] flex flex-col justify-center">
        <div className="w-full flex justify-end p-2">
          <FaInfoCircle
            className="w-6 h-6 cursor-pointer transition duration-200 ease-in-out hover:text-azul hover:bg-text-200 active:text-blue-300"
            onClick={onClickInfo}
          />
        </div>
        <div className="rounded overflow-hidden">
          <img
            src={data.sprites.front_default}
            alt="bulbasaur"
            className="w-[294px] h-[294px]"
          />
        </div>
      </div>
      <div className="bg-[#F1F1F1] font-roboto px-[27px] py-[39px] flex flex-col gap-2 justify-center h-[129px] text-xl">
        <p>{formatPokemonId(data.id)}</p>
        <p>{capitalizeFirstLetter(data.species.name)}</p>
      </div>
    </div>
  )
}

export default PokemonCard
