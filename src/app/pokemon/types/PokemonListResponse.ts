type PokemonListResponse = {
  count: number,
  next: string,
  previous: string,
  results: Array<{name: string, url: string}>,
};

export default PokemonListResponse;
