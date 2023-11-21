import { useCardContext } from "../../../context/card.context";

export const CardTitle: React.FC = () => {
  const { card } = useCardContext();

  return <h3>{card.name}</h3>;
};
