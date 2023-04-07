import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import Policy from './pages/Policy.js';
import PageNotFound from './pages/PageNotFound.js';
import Register from './pages/Auth/Register.js';
import Login from './pages/Auth/Login.js';
import Dashboard from './pages/User/Dashboard.js';
import PrivateRoute from './components/Routes/Private.js';
import AdminRoute from './components/Routes/AdminRoute.js';
import ForgotPassword from './pages/Auth/ForgotPassword.js';
import AdminDashboard from './pages/Admin/AdminDashboard.js';
import CreateCategory from './pages/Admin/CreateCategory.js';
import CreateProduct from './pages/Admin/CreateProduct.js';
import Users from './pages/Admin/Users.js';
import Profile from './pages/User/Profile.js';
import Orders from './pages/User/Orders.js';
import Product from './pages/Admin/Product.js';
import UpdateProduct from './pages/Admin/UpdateProduct.js';

function App() {
  return (
    <>
    
    <Routes>
      <Route path='/' element={<HomePage></HomePage>} ></Route>
      <Route path='/register' element={<Register></Register>} ></Route>
      <Route path='/login' element={<Login></Login>} ></Route>
      <Route path='/forgot-password' element={<ForgotPassword></ForgotPassword>} ></Route>
      <Route path='/dashboard' element={<PrivateRoute></PrivateRoute>} >
            <Route path='user' element={<Dashboard></Dashboard>} ></Route>
            <Route path='user/profile' element={<Profile></Profile>} ></Route>
            <Route path='user/orders' element={<Orders></Orders>} ></Route>
      </Route>
      <Route path='/dashboard' element={<AdminRoute></AdminRoute>} >
            <Route path='admin' element={<AdminDashboard></AdminDashboard>} ></Route>
            <Route path='admin/create-category' element={<CreateCategory></CreateCategory>} ></Route>
            <Route path='admin/create-product' element={<CreateProduct></CreateProduct>} ></Route>
            <Route path='admin/product/:slug' element={<UpdateProduct></UpdateProduct>} ></Route>
            <Route path='admin/product' element={<Product></Product>} ></Route>
            <Route path='admin/users' element={<Users></Users>} ></Route>
      </Route>
      <Route path='/about' element={<About></About>} ></Route>
      <Route path='/contact' element={<Contact></Contact>} ></Route>
      <Route path='/policy' element={<Policy></Policy>} ></Route>
      <Route path='*' element={<PageNotFound></PageNotFound>} ></Route>
    </Routes>

    </>
  );
}

export default App;
