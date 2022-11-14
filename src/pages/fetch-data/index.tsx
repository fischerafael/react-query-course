import React from "react";

export const FetchingPokemons = () => {
  const [pokemons, setPokemons] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon`);
      const data = await res.json();
      console.log(data);
    })();
  }, []);

  console.log(pokemons);

  return (
    <div>
      {pokemons.map((pokemon) => (
        <div key={pokemon}>
          <p>Nome do Pokemon</p>
        </div>
      ))}
      <div>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png`}
        />
        <p>Ivysaur</p>
        <p>69 kg</p>
        <p>7</p>
      </div>
    </div>
  );
};
