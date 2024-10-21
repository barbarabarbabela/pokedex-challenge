'use client'
import { Header, PokemonList } from '@/components'
import { PokemonProvider } from '@/contexts/pokemon-context'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export default function Home() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <PokemonProvider>
        <Header />
        <PokemonList />
      </PokemonProvider>
    </QueryClientProvider>
  )
}
