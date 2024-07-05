import React, { Component } from "react";

class Table extends Component {
//   render() {
//     return (
//       <table border={1}>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Car</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>Shivam</td>
//             <td>BMW M5</td>
//           </tr>
//           <tr>
//             <td>Keval</td>
//             <td>Land Rover Discovery</td>
//           </tr>
//           <tr>
//             <td>Jay</td>
//             <td>Jaguar XJ</td>
//           </tr>
//           <tr>
//             <td>Kaushik</td>
//             <td>Mercedes C-class</td>
//           </tr>

//         </tbody>
//       </table>
//     )
//   }
}

// fun code
let table = new Table()
console.log(table);
// fun code



const TableHeader = () => {
  return (
    <thead>
    <tr>
      <th>Name</th>
      <th>Car</th>
      <th>Model</th>
      <th>Operation</th>
    </tr>
  </thead>
  )
}


// const TableBody = () => {
//   return (
//     <tbody />
      // {/* <tr>
      //   <td>Shivam</td>
      //   <td>BMW M5</td>
      // </tr>
      // <tr>
      //   <td>Keval</td>
      //   <td>Land Rover Discovery</td>
      // </tr>
      // <tr>
      //   <td>Jay</td>
      //   <td>Jaguar XJ</td>
      // </tr>
      // <tr>
      //   <td>Kaushik</td>
      //   <td>Mercedes C-class</td>
      // </tr> */}
    // </tbody>
//   )
// }




const TableBody2 = (props) => {
  const {removeFriend, friendsData} = props
  console.log(friendsData, "data");
  const rows = friendsData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.car}</td>
        <td>{row.model}</td>
        <td>
          <button onClick={()=> removeFriend(index)}>Delete</button>
        </td>
      </tr>
    )
  })
  return <tbody>{rows}</tbody>
}


// class Table2 extends Component {
//   render() {
//     const { friendsData, removeFriend } = this.props
//     return (
//       <table border={1}>
//         <TableHeader />
//         <TableBody2 friendsData={ friendsData } removeFriend={removeFriend} />
//       </table>
//     )
//   }
// }


const Table3 = (props) => {
  const { friendsData, removeFriend } = props
  // console.log(friendsData,);
  return (
    <table>
      <TableHeader />
      <TableBody2 friendsData={friendsData}  removeFriend={removeFriend} />
    </table>
  )
}

export default Table3