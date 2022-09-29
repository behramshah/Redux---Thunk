export const customerReducer = (state = [], action) => {


    switch (action.type) {
        case "GET_ALL_CUSTOMERS":
            return [...action.payload]
        case "DELETE_CUSTOMER":
            return [...state]    
        case "CREATE_CUSTOMER":
            return [state.contactname, action.payload]  

        default:
            return state;
    }

}