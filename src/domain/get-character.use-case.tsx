import { useQuery } from "@apollo/client";
import { getCharacter } from "../data/character.query";

interface PersonagemProps {
  characterId: string;
}

export const Personagem = (props: PersonagemProps) => {
  return useQuery(getCharacter, {
    variables: {
      data: {
        CharacterData: props.characterId,
      },
    },
  });
};
