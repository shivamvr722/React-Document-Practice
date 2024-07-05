import './App.css';
import Table from './Table';
import Form  from './From';
import React, {Component} from 'react';

// function based component
// function App() {
//   return (
//     <div className="App">
//       <h1>Hello Shivam</h1>
//     </div>
//   );
// }


// the class based component creation
// class App extends Component {
//   render() {
//       const friends = [
//         {
//           name:"shivam",
//           car: "Land Rover Range Rover",
//         },
//         {
//           name:"Kaushik",
//           car: "Jaguar XJ",
//         },
//         {
//           name:"Keval",
//           car: "BMW M5",
//         },
//         {
//           name:"Jay",
//           car: "Mercedes E Class",
//         },
//         {
//           name:"Sanjay",
//           car: "Audi A8",
//         },
//         {
//           name:"Kishan",
//           car: "Audi A7",
//         },
//         {
//           name:"Yagna",
//           car: "Defender 130",
//         },
        
//       ]
//     return (
//       <div className='container'>
//         <Table friendsData = {friends}/>
//       </div>
//     )
//   }
// }

class App extends Component {
  // state = {
  //   friends: [
  //     {
  //       name:"shivam",
  //       car: "Land Rover Range Rover",
  //     },
  //     {
  //       name:"Kaushik",
  //       car: "Jaguar XJ",
  //     },
  //     {
  //       name:"Keval",
  //       car: "BMW M5",
  //     },
  //     {
  //       name:"Jay",
  //       car: "Mercedes E Class",
  //     },
  //     {
  //       name:"Sanjay",
  //       car: "Audi A8",
  //     },
  //     {
  //       name:"Kishan",
  //       car: "Audi A7",
  //     },
  //     {
  //       name:"Yagna",
  //       car: "Defender 130",
  //     },
  //   ]
  // }
  state = {
    friends: []
  }
  removeFriend = (index) => {
    const { friends } = this.state
    this.setState({
      friends: friends.filter((friend, i)=>{
        // console.log(friend, index, i);
        return i !== index
      }),
    })
  }
  
  handleSubmit = (friend) => {
    this.setState({ friends : [...this.state.friends, friend]})
  }

  render(){
    const { friends } = this.state

    return (
      <div className='container'>
        <Table friendsData={friends} removeFriend={this.removeFriend} />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default App


