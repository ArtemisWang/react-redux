import React, { Component } from 'react';
import store from './store'
class TodoList extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return ( 
            <div>
                <div>
                    <input/>
                    <button>提交</button>
                </div>
                <ul>
                    <li>Artemis</li>
                </ul>
            </div>
            

         );
    }
}
 
export default TodoList;