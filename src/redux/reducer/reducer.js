import * as ACT from '../actions/counterButtonActions'

// 1- Set Initial State

const initState = {
    counter:0,
}

// 2- Create a Reducer

const reducer=(state=initState,action)=>{
    switch (action.type){
        case ACT.INCREASE_COUNTER:
        return{
            ...state,
            counter:state.counter+1
        };
        case ACT.DECREASE_COUNTER:
        return{
            ...state,
            counter:state.counter-1
        }
        case ACT.RESET:
        return{
            ...state,
            counter:0
        }
    }

    return state
}

export default reducer;