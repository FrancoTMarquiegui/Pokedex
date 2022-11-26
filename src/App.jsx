import './App.css'
import axios from 'axios'
import InputName from './components/InputName'
import Pokemon from './components/Pokemon'
import PokemonId from './components/PokemonId'
import {HashRouter, Routes, Route} from 'react-router-dom'
import ProtectedRoutes from './components/ProtectedRoutes'
function App() {


  return (
    <HashRouter> 
      <Routes>
        <Route path="/" element={<InputName />} />
        <Route element={<ProtectedRoutes/>} > </Route>
        <Route path="/pokemon" element={<Pokemon />} />
        <Route path="/pokemon/:id" element={<PokemonId />} />
      </Routes>
    </HashRouter>
   /* <div className="App">
     <h1>Hello Word</h1>
    </div>*/
  )
}

export default App
