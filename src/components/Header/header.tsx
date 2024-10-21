import Image from 'next/image'
import logo from '../../assets/logo.png'
import { usePokemonContext } from '@/hooks'
import { Button, Input } from '@/components'
import { useForm } from 'react-hook-form'

interface FormProps {
  pokemon: string
}

function Header() {
  const { setPokemon } = usePokemonContext()
  const { handleSubmit, register, reset } = useForm<FormProps>()

  const submitForm = (data: FormProps) => {
    const pokemonIdentifier = data.pokemon.toLowerCase()
    setPokemon(pokemonIdentifier)
    reset()
  }

  return (
    <div className="font-nunito">
      <div className="mt-12 flex justify-center">
        <Image src={logo} alt="app logo" />
      </div>
      <form
        onSubmit={handleSubmit(submitForm)}
        className="flex justify-center mt-20 gap-4"
      >
        <div>
          <Input {...register('pokemon')} placeholder="Pesquisar" required />
          <p className="text-[#FFFFFF] text-xs mt-2">
            Busque por número ou nome
          </p>
        </div>
        <Button>Buscar</Button>
      </form>
    </div>
  )
}

export default Header
