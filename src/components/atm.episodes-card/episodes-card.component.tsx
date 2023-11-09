import React, { useState } from "react";

export const FiltroLista = () => {
  const [itens, setItens] = useState([
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
  ]);

  const [filtro, setFiltro] = useState("");

  const listaFiltrada = itens.filter((item) =>
    item.toLowerCase().includes(filtro.toLowerCase())
  );

  const handleChangeFiltro = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setFiltro(event.target.value);
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Filtrar Itens"
          value={filtro}
          onChange={handleChangeFiltro}
        />
        <ul>
          {listaFiltrada.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2> Episódios </h2>

        <div>
          <img
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt="episódios"
          ></img>

          <span>name</span>
          <span>Lançado</span>
          <span>Episódio</span>
        </div>
      </div>
    </>
  );
};
