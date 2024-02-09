import { useState, Component }  from 'react'
import './App.css'
import Props from './componrnts/Props'

// export default class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       count :0
//     }
//   }

//   handleClick= () =>{
//     console.log(this.state);
//     this.setState({count:this.state.count+1});
//   }

// render() {
//   return (
//     <div>
//       <h1> Class based component : count = {this.state.count}</h1> 
//       <button onClick={this.handleClick}>Click me</button>
//     </div>
//   )
// }

// }
function App() {
  return (
    <div>
      <Props />
    </div>
  )
}

export default App

