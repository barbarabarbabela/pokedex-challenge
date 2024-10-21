export function formatPokemonId(id: string) {
  return `#${String(id).padStart(3, "0")}`;
}
