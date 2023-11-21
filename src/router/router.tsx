import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MoreInfoPage } from '../modules/information/more-info.page';
import { EpisodesPage } from '../modules/episodes/episodes.page';
import { HomePage } from '../modules/home/home.page';
import { CharactersPage } from '../modules/characters/characters.page';

export const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/personagens' element={<CharactersPage />} />
        <Route path='/mais-informações/:id' element={<MoreInfoPage />} />
        <Route path='/episodios' element={<EpisodesPage />} />
      </Routes>
    </BrowserRouter>
  );
};
