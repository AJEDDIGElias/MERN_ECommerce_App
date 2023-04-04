import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import Policy from './pages/Policy.js';
import PageNotFound from './pages/PageNotFound.js';
import Register from './pages/Auth/Register.js';
import Login from './pages/Auth/Login.js';

function App() {
  return (
    <>
    
    <Routes>
      <Route path='/' element={<HomePage></HomePage>} ></Route>
      <Route path='/register' element={<Register></Register>} ></Route>
      <Route path='/login' element={<Login></Login>} ></Route>
      <Route path='/about' element={<About></About>} ></Route>
      <Route path='/contact' element={<Contact></Contact>} ></Route>
      <Route path='/policy' element={<Policy></Policy>} ></Route>
      <Route path='*' element={<PageNotFound></PageNotFound>} ></Route>
    </Routes>

    </>
  );
}

export default App;
