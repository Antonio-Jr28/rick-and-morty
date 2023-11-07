import { useCardContext } from "../../../context/card.context";

export const CardImage: React.FC = () => {
    const { card } = useCardContext();

    return <img src={card.img} alt="Imagens dos personagens"/>
}