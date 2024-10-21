import type React from 'react'
import { createContext, useContext, useState, type ReactNode } from 'react'

interface PokemonContextType {
  pokemon: string
  setPokemon: (identifier: string) => void
}

const PokemonContext = createContext<PokemonContextType | undefined>(undefined)

export const PokemonProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [pokemon, setPokemon] = useState<string>('')

  return (
    <PokemonContext.Provider value={{ pokemon, setPokemon }}>
      {children}
    </PokemonContext.Provider>
  )
}

export const usePokemonContext = () => {
  const context = useContext(PokemonContext)
  if (!context) {
    throw new Error(
      'usePokemonContext deve ser usado dentro do PokemonProvider'
    )
  }
  return context
}
