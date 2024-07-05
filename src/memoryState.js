import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  return(
    <>
      <button onClick={()=>setCount(count-1)}>-</button>
      <span className='counts'>{count}</span>
      <button onClick={()=>setCount(count+1)}>+</button>
      <br></br>
      <br></br>
    </>
  )
}