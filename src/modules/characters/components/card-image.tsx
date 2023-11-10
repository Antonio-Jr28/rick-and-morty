import { useCardContext } from "../../../context/card.context";

export const CardImage: React.FC = () => {
    const { card } = useCardContext();

    return <img className="rounded-full" src={card.img} alt="cards dos personagens"/>
}