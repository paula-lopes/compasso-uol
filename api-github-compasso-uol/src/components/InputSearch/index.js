import React from "react";
import { Button } from "./styles";
import { SearchContainer } from "./styles";
const InputSearch = ({ setUsername }) => {
  return (
    <SearchContainer>
      <input
        onChange={(event) => setUsername(event.target.value)}
        placeholder="Buscar Usuário"
      />
      <Button>Buscar</Button>
    </SearchContainer>
  );
};

export default InputSearch;
