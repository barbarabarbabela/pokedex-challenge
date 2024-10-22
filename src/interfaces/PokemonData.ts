export interface PokemonData {
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
  stats: {
    base_stat: number
    stat: {
      name: string
    }
  }[]
}