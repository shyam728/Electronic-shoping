var initialState={  
mycart:{}
}
export default function RootReducer(state=initialState,action)
{
    switch(action.type)
    {
        case "ADD_PRODUCT":
            state.mycart[action.payload[0]]=action.payload[1]
            console.log("STATE:",state.mycart)
            return {mycart:state.mycart}

        case "EDIT_PRODUCT":
                state.mycart[action.payload[0]]=action.payload[1]
                console.log("STATE:",state.mycart)
                return {mycart:state.mycart}    

        case "REMOVE_PRODUCT":
                    delete state.mycart[action.payload[0]]
                    console.log("STATE:",state.mycart)
                    return {mycart:state.mycart}            
        default:
            return {mycart:state.mycart} 
    }


}
