import './App.css';
import Header from './Header';
import Login from './Login';
import Register from './Register';
import UpdateProduct from './UpdateProduct';
import AddProduct from './AddProduct';
import {BrowserRouter,Route,Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <h1>Ecomm Project</h1>
      <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register/>} />
      <Route path='/add' element={<AddProduct/>} />
      <Route path='/update' element={<UpdateProduct />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
