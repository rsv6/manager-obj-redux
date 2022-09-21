
import { Routes, Route } from 'react-router-dom';
import './App.css';

import { BodyComp } from './components/BodyComp';
import { Feedback } from './pages/Feedback';
import { Home } from './pages/Home';
import { Pesquisa } from './pages/Pesquisa';
import { Sobre } from './pages/Sobre'; 


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<BodyComp>
            <Home />
          </BodyComp>} 
        />

        <Route path='/pesquisa' element={<BodyComp>
            <Pesquisa />
          </BodyComp>}
        />

        <Route path='/feedback' element={<BodyComp>
            <Feedback />
          </BodyComp>}
        />

        <Route path='/sobre' element={<BodyComp>
            <Sobre />
          </BodyComp>} 
        />

        <Route path='*' element={<BodyComp>
            <h3>Page not Found!</h3>
          </BodyComp>} 
        />

      </Routes>      
    </div>
  );
}

export default App;
