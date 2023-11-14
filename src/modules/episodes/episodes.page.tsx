import React, { useState } from 'react';
import { Navbar } from '../../components/atm.navbar';
import { Title } from '../../components/atm.title/title.components';
import { EpisodesCards } from './components/episodes-card';
import { EpisodesAirDate } from './components/episodes.data';
import { useGetEpisodes } from '../../domain/get-episodes.use-case';
import { Button } from '../../components/atm.button';
import { EpidodesTitle } from './components/episodes.title';
import { EpisodesData } from '../../context/epidodes-card.context';
import { EpisodesCharactersCard } from './components/episodes-characters-card';

export const EpisodesPage = () => {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState({ name: '' });
  const limit = 30;

  const { episodes, loading } = useGetEpisodes(filter, page, limit);

  const handlePreviousPage = () => {
    setPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleSelectChange = (e: { target: { value: any } }) => {
    setFilter({ name: e.target.value });
  };

  return (
    <div>
      <div className='mt-10' />
      <Navbar />
      <div className='mt-10' />
      <Title text='Episódios' />

      <div>
        <select value={filter.name} onChange={handleSelectChange}>
          <option value=''>Selecione um Episódio</option>
          {episodes?.map((episode: EpisodesData) => (
            <option key={episode?.id} value={episode?.name}>
              {episode?.name}
            </option>
          ))}
        </select>
        <div className='mt-10' />

        {loading && <p>Carregando...</p>}

        <div>
          {episodes?.map((episode: EpisodesData) => (
            <div key={episode?.id}>
              <EpisodesCards
                episodes={{
                  id: episode?.id,
                  name: episode?.name,
                  air_date: episode?.air_date,
                  characters: episode?.characters,
                }}>
                <div className='mt-4' />
                <EpidodesTitle />
                <div className='mt-4' />
                <EpisodesAirDate />
                <div className='mt-10' />
                <EpisodesCharactersCard />
              </EpisodesCards>
            </div>
          ))}
        </div>

        <div className='flex flex-row items-center gap-4 py-6'>
          <Button type='secondary' text='Anterior' onClick={handlePreviousPage} />
          <Button type='secondary' text='Próximo' onClick={handleNextPage} />
        </div>
      </div>
      <div className='mt-10' />
    </div>
  );
};
