import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Header } from './components/header/Header';
import { MainPage } from './components/authPage/mainPage/mainPage';
import { RussiaSelector } from './components/dash/first/RussiaSelector/RussiaSelector';
import { DashContainer1 } from './components/dash/containers/container1';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* <Header />
    <Chart1 /> */}
    {/* <MainPage /> */}
    <Header />
    <RussiaSelector />
    <DashContainer1 />
  </React.StrictMode>
);
