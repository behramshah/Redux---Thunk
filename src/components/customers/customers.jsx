import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCustomers, getAllCustomers } from '../../redux/actions/actions';

export default function Customers() {

    let dispatch = useDispatch();

    let state = useSelector(state => state.customerReducer);

    const deleteCustomer = (e) => {
        dispatch(deleteCustomers(e.target.value))
    }

    useEffect(() => {
        dispatch(getAllCustomers());
      });

    return (
        <>
            <h1>Customers</h1>
            <Link to="add">Add Customers</Link>
            <ol>
                {
                    state.map( customer => (
                        <li key={customer.id}>
                            {
                            customer.companyName
                            }
                            <button onClick={deleteCustomer} value={customer.id}>delete</button>
                        </li>
                    ))
                }
            </ol>      
        </>
    );
}
