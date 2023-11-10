import { useCardContext } from "../../../context/card.context";

export const CardTitle: React.FC = () => {
  const { card } = useCardContext();

  return <h3 className="text-white text-2xl p-2 text-center">{card.name}</h3>;
};
