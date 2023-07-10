import './index.css';
import './App.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Body from './components/Body/Body';
import calendar from './assets/icons/calendar.png';

function App() {


  return (
    <>
    <Header/>
    <Navbar/>
    {/* latest section */}
    <Body
    title='latest'
    logo={calendar}
    />
    {/* memes section */}
    {/* toprated section */}
    </>
  )
}

export default App
