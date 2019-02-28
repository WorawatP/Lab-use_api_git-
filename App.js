import React, {Component} from 'react';
import './App.css';
import TaskList from './todo/TaskList'
import InputTask from "./todo/InputTask";
import Github from "./github/Github";
import Weather from "./WeatherAPI/Weather";

class App extends Component {

   state = {
       tasks: [{id: 1, user: 'wwarodom'}],
       id:2,
       selectedUser: ''
   }

   addTask = (user) => {
       this.setState({
                tasks: [...this.state.tasks, {id: this.state.id,user } ],
                id: this.state.id+1,  
                selectedUser: user  })
   }

   render() {
   return (
       <div className="App">
           <h1>Todo</h1>
           <TaskList tasks={this.state.tasks}/>
           <InputTask addTask={this.addTask} id={this.state.id}/>
           <br/>
          <Github user={this.state.selectedUser}/>
          <Weather/>
       </div>
   );
}

}

export default App;