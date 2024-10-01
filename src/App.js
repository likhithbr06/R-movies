import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes,Switch} from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer';
import Home from './components/Home/Home';

function App() {
  return (
      <BrowserRouter>
          <>
            <Header/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route/>
              <Route/>
            </Routes>
            <Footer/>
          </>
      </BrowserRouter>
    
  );
}

export default App;
