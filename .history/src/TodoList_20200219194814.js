import React, { Component } from 'react';
import {connect} from 'react-redux'


class TodoList extends Component {
    // constructor(props) {
    //     super(props);
    // }
    render() { 
        return ( 
            <div>
                <div>
                    <input 
                        value={this.props.inputValue} 
                        onChange={this.props.inputChange}
                    />
                    <button onClick={this.clickButton}>提交</button>
                </div>
                <ul> 
                    <li>Artemis</li>
                </ul>
            </div>
            
         );
    }

}
const stateToProps=(state)=>{
    return {
        inputValue:state.inputValue
    }
}

const dispatchToProps=(dispatch)=>{
    return {
        inputChange(e){
            let action ={
                type:'change_input',
                value:e.target.value
            }
            dispatch(action)
        },
        clickButton(){
            console.log(111)
        }
    }
}
 
export default connect(stateToProps,dispatchToProps)(TodoList);