import './index.css';
import './App.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Section from './components/Section/Section';
import calendar from './assets/icons/calendar.png';
import sparkles from './assets/icons/sparkles_icon.png';
import {latestData} from './data/latestData';
import { memeData } from './data/memeData';

function App() {


  return (
    <>
    <Header/>
    <Navbar/>
    {/* latest section */}
    <Section
    title='latest'
    logo={calendar}
    content={latestData}
    imgClass='section__img--round'
    />
    {/* memes section */}
    <Section
    title='memes'
    content={memeData}
    imgClass='section__img--square'
    contentClass='section__bg'
    />
    {/* toprated section */}
    {/* <Section
    title='top rated'
    logo={sparkles}
    bodyClass='body__reverse'
    /> */}
    </>
  )
}

export default App
