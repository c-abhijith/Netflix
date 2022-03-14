import React from 'react'
import './App.css'
import {action,originals} from './urls'
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import RowPost from './Components/RowPost/RowPost';
function App() {
  return (
     <div className='App'>
       <NavBar/>
       <Banner/>
       <RowPost url={originals} title='Netflix Orginals' />
       <RowPost url={action} title='Action Moves' isSmall />
     </div> 
  );
}

export default App;
