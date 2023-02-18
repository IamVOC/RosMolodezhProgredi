import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Header } from './components/header/Header';
import { Chart1 } from './components/chart1/Chart1';
import { MainPage } from './components/authPage/mainPage/mainPage';
import { RussiaSelector } from './components/dash/first/RussiaSelector/RussiaSelector';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* <Header />
    <Chart1 /> */}
    {/* <MainPage /> */}
    <RussiaSelector />
  </React.StrictMode>
);
