export const customerReducer = (state = [], action) => {


    switch (action.type) {
        case "GET_ALL_CUSTOMERS":
            return [...action.payload]
        case "DELETE_CUSTOMER":
            return [...state]    

        default:
            return state;
    }

}