import { PropsWithChildren } from "react";
import { EpisodesCard } from "../../../components/atm.episodes-card";

import { EpisodesContext, Episodes } from "../../../context/epidodes-card.context";

export const EpisodesCards: React.FC<PropsWithChildren<{ episodes: Episodes }>> = ({
    children, 
    episodes,
}) => {
    return (
        <EpisodesCard>
            <EpisodesContext.Provider value={{ episodes }}>
                <div>{children}</div>
            </EpisodesContext.Provider>
        </EpisodesCard>
    );
}