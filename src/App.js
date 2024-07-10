import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './Screens/Header';
import Foot from './Screens/Foot';
import Asid from './Screens/Asid';

function App() {

  
  return (
  <>
    <Asid/>
    <Header/>
  
  <main className='min-h-[calc(100vh-120px)]'>
    <Outlet/>
  </main>
  <Foot/>
  
  </>
  );
}

export default App;
