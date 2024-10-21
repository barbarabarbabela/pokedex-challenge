import { PokemonContext } from '@/contexts'
import { useContext } from 'react'

export const usePokemonContext = () => {
  const context = useContext(PokemonContext)
  if (!context) {
    throw new Error(
      'usePokemonContext deve ser usado dentro do PokemonProvider'
    )
  }
  return context
}
