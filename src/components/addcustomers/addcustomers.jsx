import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

export default function AddCustomers() {

    let state = useSelector(state => state.customerReducer);
    let newCustomer = useSelector(state => state.addcustomerReducer);

    const addCustomer = (customer) => {
        dispatch(addCustomer(customer))
    }

    let dispatch = useDispatch();

    const handleSubmit = (newCustomer) => {
        addCustomer(newCustomer)
    }
    
    const handleChangeName = (e) => {
        dispatch({type: "SET_COMPANY_NAME", payload: e.target.value})
    }

    const handleChangeContact = (e) => {
        dispatch({type: "SET_CONTACT_NAME", payload: e.target.value})
    }
    
  return (
    <>
        <h1>Add Customers</h1>
        <Link to="/">Customers</Link>
        <form onSubmit={handleSubmit}>
        <label>
          Company Name:
          <input type="text" onChange={handleChangeName} />
        </label>
        <label>
          Contact Name:
          <input type="text" onChange={handleChangeContact} />
        </label>
        <input type="submit" value="Submit" />
      </form>   
    </>
  );
}