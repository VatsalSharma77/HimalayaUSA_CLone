import './App.css'
import Footer from './Components/Footer';
import Navbar from './Components/Navbar/Navbar';

import AllRoutes from './Pages/AllRoutes';

function App() {
  
  return (
    <div>
      <div className="header-offer"><h3><span>FREE SHIPPING</span> ON ORDERS OVER $35</h3></div>
      <Navbar/>
      <AllRoutes/>
      <Footer/>
      
    </div>
  )
}

export default App
