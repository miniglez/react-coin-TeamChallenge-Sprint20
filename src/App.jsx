import React from 'react'
import {BrowserRouter as Router ,Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import SingleCoin from "./components/SingleCoin.jsx"
import Favourites from "./components/Favourites.jsx"

const App = () => {
    return(
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/coin/:id' element={<SingleCoin />}></Route>
                    <Route path='/favourites' element={<Favourites />}></Route>
                </Routes>
            </Router>
        </>
    )
}

export default App