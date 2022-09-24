import React from 'react';
import './categories.scss';
import {Routes,Route} from 'react-router-dom';
import HomeComponent from './routes/HomeComponent';
import NavigationComponent from './routes/NavigationComponent';
import ShopComponent from './routes/ShopComponent';
import Signincomponent from './components/signincomponent';
const App = () => {
  
  return (
    <Routes>
    <Route path="/" element={<NavigationComponent/>}>
      <Route index element={<HomeComponent/>}/>
      <Route path='/shop' element={<ShopComponent/>}/>
      <Route path='/signin' element={<Signincomponent/>}/>
    </Route>
    </Routes>
  );
}

export default App;
