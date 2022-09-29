const initialState = {
    companyname: '',
    contactname: '',
}


export const addcustomerReducer = (state = initialState, action) => {


    switch (action.type) {
        case "SET_COMPANY_NAME":
            return [state.companyname, action.payload]
        case "SET_CONTACT_NAME":
            return [state.contactname, action.payload]     

        default:
            return state;
    }

}