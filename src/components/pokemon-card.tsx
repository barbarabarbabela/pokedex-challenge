import Image from 'next/image'
import React from 'react'

interface PokemonCardProps {
  number: string
  name: string
  src: string
}

function PokemonCard({ number, name, src }: PokemonCardProps) {
  return (
    <div className="lg:w-[294px] rounded-lg overflow-hidden shadow-md">
      <div className="bg-[#FFFFFF] flex justify-center">
        <div className="rounded overflow-hidden">
          <img src={src} alt="bulbasaur" className="w-[294px] h-[294px]" />
        </div>
      </div>
      <div className="bg-[#F1F1F1] font-roboto px-[27px] py-[39px] flex flex-col gap-2 justify-center h-[129px] text-xl">
        <p>{number}</p>
        <p>{name}</p>
      </div>
    </div>
  )
}

export default PokemonCard
