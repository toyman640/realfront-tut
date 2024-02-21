import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/HomePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<SignUp />} />
          <Route exact path="/home-page" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
