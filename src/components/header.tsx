import Image from 'next/image'
import logo from '../assets/logo.png'
import Input from './input'
import Button from './button'
import { usePokemonContext } from '@/contexts/pokemon-context'
import { useState } from 'react'

function Header() {
  const { setPokemon } = usePokemonContext()
  const [pokemonInput, setPokemonInput] = useState('')

  const handleInputChange = (value: string) => {
    setPokemonInput(value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setPokemon(pokemonInput.toLowerCase())
    setPokemonInput('')
  }

  return (
    <div className="font-nunito">
      <div className="mt-12 flex justify-center">
        <Image src={logo} alt="app logo" />
      </div>
      <form onSubmit={handleSubmit} className="flex justify-center mt-20 gap-4">
        <div>
          <Input value={pokemonInput} onInputChange={handleInputChange} />
          <p className="text-[#FFFFFF] text-xs mt-2">
            Busque por número ou nome
          </p>
        </div>
        <Button type="submit">Buscar</Button>
      </form>
    </div>
  )
}

export default Header
