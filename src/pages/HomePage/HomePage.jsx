import React, { useState, useEffect, useContext } from 'react';
import style from './HomePage.module.css';
import Navigation from '../../shared/Navigation/Navigation';
import Header from '../../components/Header/Header';
import Home from '../../components/Home/Home.jsx';

const HomePage = (props) => {

  const [searchValue, setSearchValue] = useState('');

  return (
    <>
          <div className={style.pageMain}>
          
          <div className={style.visibleLg}>
          <Header setSearchValue={setSearchValue} />
          <Navigation /> 
          </div>

          <div className={style.pageOutlet}>
             <Home /> 
          </div>

        </div>
           
    </>
  );
};

export default HomePage;