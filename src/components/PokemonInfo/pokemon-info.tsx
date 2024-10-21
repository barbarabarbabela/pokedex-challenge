import { Button } from '@/components'
import { formatPokemonId, capitalizeFirstLetter } from '@/shared'

interface PokemonInfoModalProps {
  isOpen: boolean
  onClose: () => void
  pokemon:
    | {
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
        stats: Array<{
          base_stat: number
          stat: {
            name: string
          }
        }>
      }
    | undefined
}

const PokemonInfoModal: React.FC<PokemonInfoModalProps> = ({
  isOpen,
  onClose,
  pokemon,
}) => {
  if (!isOpen || !pokemon) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-[500px] shadow-2xl transform transition-transform duration-300 ease-in-out">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-4 text-center">
          Informações do Pokémon
        </h1>

        <div className="flex flex-col sm:flex-row gap-10 sm:gap-20 items-center">
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-semibold text-gray-700 mb-1">
              {capitalizeFirstLetter(pokemon.species.name)}
            </h2>
            <p className="text-md font-semibold text-gray-500 mb-4">
              {formatPokemonId(pokemon.id)}
            </p>
            <img
              src={pokemon.sprites.front_default}
              alt={pokemon.species.name}
              className="w-32 h-32 object-contain mb-4 rounded-md"
            />
            <div className="flex gap-4">
              <div className="text-center">
                <span className="block text-sm text-gray-600 font-medium">
                  Weight
                </span>
                <span className="text-md font-bold text-gray-800">
                  {pokemon.weight / 10} kg
                </span>
              </div>
              <div className="text-center">
                <span className="block text-sm text-gray-600 font-medium">
                  Height
                </span>
                <span className="text-md font-bold text-gray-800">
                  {pokemon.height / 10} m
                </span>
              </div>
            </div>
            <div className="flex gap-2 mt-4">
              {pokemon.types.map((type, index) => (
                <span
                  key={type.type.name}
                  className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm shadow-md"
                >
                  {capitalizeFirstLetter(type.type.name)}
                </span>
              ))}
            </div>
          </div>

          <div>
            <ul className="flex flex-col gap-3">
              {pokemon.stats.map(stat => (
                <li key={stat.stat.name} className="text-gray-700">
                  <span className="font-semibold text-gray-900">
                    {capitalizeFirstLetter(stat.stat.name)}
                  </span>
                  : {stat.base_stat}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-full flex justify-center sm:justify-end">
          <Button type="button" onClick={onClose} className="w-32 h-10">
            Fechar
          </Button>
        </div>
      </div>
    </div>
  )
}

export default PokemonInfoModal
