import './App.css';
import { fetch_user } from './util/prerender';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar';
import store from './store';
import { useState } from 'react';
import Website from './pages/Website/Website';

function App() {
  const [loading, setLoading] = useState(true);
  if (loading) fetch_user(store, setLoading);
  if (loading) return <p>Loading...</p>;
  return (
    <Provider store={store}>
      <Router>
        <div className='App'>
          <Navbar/>
          <div className='content'>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/website-projects' element={<Website/>} />
              <Route path='/blog' element={<Website/>} />
              <Route path='/other-projects' element={<Website/>} />
              <Route path='/certificate' element={<Website/>} />
            </Routes>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
