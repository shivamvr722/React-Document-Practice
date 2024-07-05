import {component} from 'react'


const user = {
  name: "Gojo Saturo",
  imageurl: "https://images4.alphacoders.com/133/1332281.jpeg",
  imageSize: 300,
  bio: "it's gojo saturo!"
};

function profile(){
    return (
      <div className=''>
        <h1>{user.name}</h1>
        <img 
         className="profile"
         src={user.imageurl}
         alt = {`photo of ${user.name}`} 
         style={{
          width: user.imageSize,
          height: user.imageSize
         }}
        />
        <p>{user.bio}</p>
      </div>
    )
}


export default profile