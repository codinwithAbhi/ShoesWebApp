import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './MainCompo/Home';
import NavBar from './MainCompo/NavBar';
import Products from './MainCompo/Products';
import Login from './MainCompo/Login';
import ItemsList from './MainCompo/ItemsList';
import Footer from './MainCompo/Footer';
import TicTacToe from './MainCompo/TicTacToe';

function App() {
  return (
    <div className="App">
      <div>
        <NavBar />
        <Footer />
        <BrowserRouter>
          <Routes>
            <Route path='' element={<Home></Home>}></Route>
            <Route path='/home' element={<Home></Home>}></Route>
            <Route path='/products' element={<Products></Products>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='tictactoe' element={<TicTacToe></TicTacToe>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
