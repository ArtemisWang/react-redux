const defaultState={
    inputValue:'something',
    list:[]
}
export default (state=defaultState, action)=>{

    if(action.type==='change_input'){
        console.log(action.value)
        let newState=JSON.parse(JSON.stringify(state))
        newState.inputvalue=action.value
        return newState
    }

    return state
}

