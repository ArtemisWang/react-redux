const defaultState={
    inputValue:'something',
    list:[]
}
export default (state=defaultState, action)=>{

    if(action.type==='change_input'){
        let newState=JSOn.parse(JSON.stringify(state))
        newState.inputvalue=action.inputValue
        return newState
    }
    return state
}

