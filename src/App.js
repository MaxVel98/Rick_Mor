import './App.css';
import Cards from './components/Cards/Cards.jsx';
import NavBar from './components/NavBar/NavBar';
import { useState } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail';
// import Forms from './components/Form/Form';
import { useLocation } from 'react-router-dom';
import Favorites from './components/Favorites/Favorites'
function App() {
   
   const [characters, setCharacters] = useState([]);
   const {pathname}= useLocation();
   
   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   };

   const onClose = (id) => {
      setCharacters(

         characters.filter((char) => { return char.id !== Number(id) })
      )
   };

   return (
      
      
      
       <div className='App'>

         {pathname !== '/' && <NavBar onSearch={onSearch} />}
        
         <Routes>
         {/* <Route path='/' element={<Forms/>}/> */}
         <Route path='/home' element={ <Cards characters={characters} onClose={onClose} />} />
         <Route path='/about' element = {<About/>}/>
         <Route path='/detail/:id' element = {<Detail/>}/>
         <Route path='/favorites' element = {<Favorites/>}/>
         </Routes>

       </div>
   );
}

export default App;
