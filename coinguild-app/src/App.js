import 'bootstrap/dist/css/bootstrap.min.css';
import {Router, Route, Routes} from 'react-router-dom';
import Homepage from './pages/Homepage';
import Login from './pages/Login';


function App() {
  return (

   <>

    <Routes>
      <Route path='/' element={<Homepage/>} />
      {/* <Route path='/aboutus' element={<AboutUs/>} />
      <Route path='/products' element={<Products/>} />
      <Route path='/workwithus' element={<WorkwUs/>} /> */}
      <Route path='/login' element={<Login/>} />
    </Routes>

    
   </>
  );
}

export default App;
