import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Customers from './components/customers/customers';
import AddCustomers from './components/addcustomers/addcustomers';
import { useDispatch } from 'react-redux';
import { getAllCustomers } from './redux/actions/actions';

function App() {

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCustomers());
  });
  

  return (
    <Routes>
        <Route path='/' element={<Customers/>}/>
        <Route index path='add' element={<AddCustomers/>}/>
    </Routes>
  );
}

export default App;
