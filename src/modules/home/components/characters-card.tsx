import { PropsWithChildren } from "react";
import { Cards } from "../../../components/atm.card";

import { CardContext,  Card } from "../../../context/card.context";

export const CharactersCard: React.FC<PropsWithChildren<{ card: Card }>> = ({
    children,
    card,
}) => {
    return (
        <Cards>
            <CardContext.Provider value={{ card }}>
                <div>{children}</div>
            </CardContext.Provider>
        </Cards>
    )
}

