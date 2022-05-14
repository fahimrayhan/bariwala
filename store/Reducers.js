import { ACTIONS } from "./Actions";

const reducers = (state, action) =>{
    switch(action.type){
        case ACTIONS.AUTH:
            return{
                ...state,
                auth: action.payload
            };

        case ACTIONS.BALANCE:
            return{
                ...state,
                balance: action.payload
            }
        default:
            return state
    }
}

export default reducers