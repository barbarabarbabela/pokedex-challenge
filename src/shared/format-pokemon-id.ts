export function formatPokemonNumber(id: string) {
  return `#${String(id).padStart(3, "0")}`;
}
