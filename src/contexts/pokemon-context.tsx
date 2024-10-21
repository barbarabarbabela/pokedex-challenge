import type React from 'react'
import { createContext, useState, type ReactNode } from 'react'

interface PokemonContextType {
  pokemon: string
  setPokemon: (identifier: string) => void
}

export const PokemonContext = createContext<PokemonContextType | undefined>(
  undefined
)

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
