export const getAllCustomers = () => {

    return async (dispatch) => {
        fetch('https://northwind.vercel.app/api/customers')
            .then(res => res.json())
            .then(data => {
                dispatch({ type: 'GET_ALL_CUSTOMERS', payload: data })
            })
    }

}

export const deleteCustomers = (id) => {

    return async (dispatch) => {
        fetch(`https://northwind.vercel.app/api/customers/${id}`, { method: 'DELETE' })
            .then(res => res.json())
            .then(data => {
                dispatch({ type: 'DELETE_CUSTOMER'});
            })
    }

}