import {ADD_EMAIL } from '../actions'

const Initial_State={
    emailGlobal:'',
}

function loginReducer(state=Initial_State,action){
    switch(action.type){
        case ADD_EMAIL:
            return {
                ...state,
                emailGlobal:action.email,
            }
        default:return state;
    }

}
export default loginReducer;