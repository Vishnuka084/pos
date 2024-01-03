import {BrowserRouter as Router, Routes,Route,Link} from "react-router-dom";
import './App.css'
import Home from "./components/Home.tsx";

function App() {

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/customer'>Customer</Link>
            </li>
            <li>
              <Link to='/product'>Product</Link>
            </li>

          </ul>
        </nav>

        <hr/>

        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/customer' element={<Customer/>}></Route>
          <Route path='/product' element={<Product/>}></Route>
        </Routes>

      </div>
    </Router>
  )
}

export default App
