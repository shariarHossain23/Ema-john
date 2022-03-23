import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import './App.css';
import Header from './component/header/Header';
import Shop from './component/shop/Shop';

function App() {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <div>
     <Header></Header>
    <Shop></Shop>
    </div>
  );
}

export default App;
