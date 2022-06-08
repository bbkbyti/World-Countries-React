
import { Route, Routes } from 'react-router-dom';

import './App.css';
import MainContainer from './components/MainContainer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainContainer />} />
      </Routes>

    </div>
  );
}

export default App;
