import {Routes,Route,BrowserRouter as Router} from 'react-router-dom'
import AdminLogin from "./components/AdminLogin";
import Dashboard from "./components/Dashboard"
import Cart from './components/userInterface/components/screens/Cart';
import Home from './components/userInterface/components/screens/Home';
import ProductPurchaseScreen from './components/userInterface/components/screens/ProductPurchaseScreen'

function App() {
  return (
    <div>
     <Router>
      <Routes>
        <Route element={<AdminLogin/>} path="/adminlogin"/>
        <Route element={<Dashboard/>} path="/dashboard/*"/>
        <Route element={<Home/>} path="/home"/>
        <Route element={<ProductPurchaseScreen/>} path="/productpurchasescreen" />
        <Route element={<Cart/>} path="/cart"/>

      
      </Routes>
      </Router> 
     
      </div>
  );
}

export default App;
